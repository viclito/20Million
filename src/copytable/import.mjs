import { writeFile as _writeFile } from 'fs';
import request from 'request';
import { join } from 'path';
import readline from 'readline';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// the URL directly gets the data from 20million Marketing Copytable
const URL =
    'https://script.google.com/macros/s/AKfycby9grJMPPvU7weEff9BslM6xKI2nrT1D0piWuCLrj1ZbJoWHUdQMvxm5vEtm4we_hJO/exec';
const copytableRootDir = dirname(fileURLToPath(import.meta.url));
const copytables = [
    {
        name: '20million Marketing Copytable',
        sheetid: '1tvQsPVijm-8eeUTTQq8Qgk5a3_fdRj9hxYPrJNN-hFk',
        sheets: [
            {
                name: 'Export',
                path: 'content',
            },
        ],
    },
];

const color = (t) => `\x1b[35m${t}\x1b[0m`;

copytables.map((copytableConfig, index) => {
    rl.write(`[${color(index)}] ${copytableConfig.name}\n`);
});

rl.question(`\nWhich table would you like to update? `, async (index) => {
    const copytableConfig = copytables[index];
    if (copytableConfig && copytableConfig.name) {
        rl.write(
            `Okay! Starting import for ${color(copytableConfig.name)}\n\n`
        );
        try {
            await updateCopytable(copytableConfig);
            status(`Done with import for ${color(copytableConfig.name)}\n`);
        } catch (error) {
            rl.write(`\n${color('Error!')} Could not update copy table\n`);
            rl.write(error.message, error.stack);
        }
    } else {
        rl.write(
            `${color(
                'Error!'
            )} Could not find a configuration with index ${index}`
        );
    }
    rl.write(`\n`);
    rl.close();
});

async function updateCopytable(copytableConfig) {
    return Promise.all(
        copytableConfig.sheets.map((sheetConfig) =>
            updateSheet(copytableConfig, sheetConfig)
        )
    );
}

async function updateSheet(copytableConfig, sheetConfig) {
    const parameters = {
        sheetid: copytableConfig.sheetid,
        sheetname: sheetConfig.name,
        enableAutoArray: true,
    };

    const body = await getSheet(parameters);
    const data = parseJSON(body);

    await writeLanguageFilesFromData(data, sheetConfig.path);
}

async function getSheet(parameters) {
    status(`getSheet: ${URL}'`);
    return new Promise((resolve, reject) => {
        request({ url: URL, qs: parameters }, (err, response, body) => {
            if (err) reject(err);
            resolve(body);
        });
    });
}

function parseJSON(json) {
    const data = JSON.parse(json);
    if (data.error) throw new Error(`Failed parsing json:\n${json}`);
    return data;
}

async function writeLanguageFilesFromData(data, folderPath) {
    return Promise.all(
        Object.keys(data).map(async (language) => {
            const languageObject = data[language];
            const fileName = language + '.json';
            let json = JSON.stringify(languageObject, null, 4);
            // remove all \b characters
            // example "label": "\b날짜", => "label": "날짜",
            json = json.replace(/\\b/g, '');
            const filePath = join(copytableRootDir, folderPath, fileName);

            await writeFile(filePath, json);
        })
    );
}

async function writeFile(filePath, content) {
    status(`writeFile: ${filePath}'`);
    return new Promise((resolve, reject) => {
        _writeFile(filePath, content, function (err) {
            if (err) reject(err);
            resolve();
        });
    });
}

function status(string) {
    rl.write(null, { ctrl: true, name: 'u' });
    rl.write(string);
}
