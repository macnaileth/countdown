'use client';

import { useState, useContext } from 'react';

import { GitHubIcon, QuickRef } from './Icons';
import { InfoModal } from './Modals';
import { LanguageContext, LanguageData } from './TimerWrapUp';
import { resolveLangStr } from '../lib/handleLanguage';

export default function GlobalFooter({ mode = 'full' }) {
          
    const [ status, setStatus ] = useState( 'closed' );
    
    const language = useContext( LanguageContext );  
    const langJSON = useContext( LanguageData );
    
    const mailButtonCSS = "border-b-2 border-transparent hover:border-tdgreen-400 hover:border-bottom transition-all duration-500";
    const defButtonCSS = "border-b-2 border-transparent";    
        
    const closeHandler = () => setStatus( 'closed' );
        
    return (
            <>
                <InfoModal status={ status } handler={ closeHandler } lang={{ set: language.language, data: langJSON }} />
                <footer className={ ( status === 'open' ? "hidden " : "flex ") + ( mode === 'full' ? "justify-between " : "justify-end " ) + "gap-2 items-end pb-6 px-6 opacity-10 hover:opacity-100 transition-opacity duration-500 mt-auto" }>
                    { mode === 'full' && 
                        <div>
                            <button className={ mailButtonCSS }>
                                <span className="text-tdgreen-400 text-xs">mac@tsu-nami.de</span>
                            </button>
                        </div>
                    }
                    <div className="flex gap-2">
                        <button className={ defButtonCSS } onClick={ () => setStatus( 'open' ) }><QuickRef className="fill-tdgreen-400 hover:fill-tdgreen-300 transition-color duration-500"/></button>
                        { mode === 'full' && 
                        <div className={ defButtonCSS }>
                            <a href="https://github.com/macnaileth/countdown" target="_blank" rel="noreferrer noopener">
                                <GitHubIcon className="fill-tdgreen-400 hover:fill-tdgreen-300 transition-color duration-500"/>
                            </a>
                        </div> }
                    </div>
                </footer>
            </>
        );
}
