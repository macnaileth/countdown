'use client';

import { createContext, useContext, useState } from 'react';

import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";

import * as langData from '../data/langData.json';

export const LanguageContext = createContext({ language: 'de', setLanguage: () => {} });
export const LanguageData = createContext( langData );

const TimerWrapUp = ({ children }) => {
    
    const [ language, setLanguage ] = useState( 'de' );
    const value = { language, setLanguage };
    
    console.log( 'parent lang: ', language );
    
    return  (
                <>
                    <LanguageContext.Provider value={ value }>
                        <GlobalHeader value={ value } />
                            { children }
                        <GlobalFooter value={ value } /> 
                    </LanguageContext.Provider >
                </>
            );
};

export default TimerWrapUp;
