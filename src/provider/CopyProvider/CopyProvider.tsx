import React, { PropsWithChildren, useContext, useMemo, useState } from 'react';
import * as copyEn from '../../copytable/content/en.json';
import { CopyContext } from './CopyContext';

export const CopyProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [content, setContent] = useState(copyEn);

    const copyContext = useMemo(
        () => ({
            content: content,
        }),
        [content]
    );

    return (
        <CopyContext.Provider value={copyContext}>
            {children}
        </CopyContext.Provider>
    );
};

export const useCopy = () => useContext(CopyContext);
