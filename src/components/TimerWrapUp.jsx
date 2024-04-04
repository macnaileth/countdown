'use client';

import { createContext, useContext, useState } from 'react';
import { useSearchParams } from 'next/navigation'

import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";

import * as langData from '../data/langData.json';

export const LanguageContext = createContext({ language: 'de', setLanguage: () => {} });
export const LanguageData = createContext( langData );
export const TimerSet = createContext( null );

const TimerWrapUp = ({ children }) => {
    
    const searchParams = useSearchParams();
    const paramTimer = searchParams.get( 'timer' );
    const paramLang = searchParams.get( 'lang' );
    
    const [ language, setLanguage ] = useState( 
            paramLang === null ? 'de' : langData.langs.includes( paramLang ) ? paramLang : 'de' );
    const value = { language, setLanguage };
    
    
    console.log( 'timer value: ' + paramTimer + ', lang value: ' +  paramLang );
    console.log( 'parent lang: ', language );
    
    return  (
                <>
                    <LanguageContext.Provider value={ value }>
                        <TimerSet.Provider value={ paramTimer ? paramTimer : null }>
                            <GlobalHeader value={ value } mode={ paramTimer ? 'reduced' : 'full' } />
                                { children }
                            <GlobalFooter value={ value } mode={ paramTimer ? 'reduced' : 'full' } /> 
                        </TimerSet.Provider>
                    </LanguageContext.Provider >
                </>
            );
};

export default TimerWrapUp;
