import React from 'react';
import * as copyEn from '../../copytable/content/en.json';

type CopyContextType = {
    content: typeof copyEn;
};

export const CopyContext = React.createContext<CopyContextType>({
    content: copyEn,
});
