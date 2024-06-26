import { useContext, useState } from 'react';

import { Logo } from './Icons';

import { LanguageContext } from './TimerWrapUp';

const LanguageSwitch = () => {
  
  const { language, setLanguage } = useContext( LanguageContext );
    
  return (
            <label className="flex items-center relative w-max cursor-pointer select-none border-2 rounded-full border-tdgreen-400">
                <input 
                    checked={ language === 'de' ? true : false }
                    onChange={ ( e ) => e.target.checked ? setLanguage('de') : setLanguage('en') } 
                    type="checkbox" 
                    className="switch-input appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full bg-tdgreen-400" />
                <span className="absolute text-xs uppercase right-1 text-white pt-1 pe-1">EN</span>
                <span className="absolute text-xs uppercase right-8 text-white pt-1">DE</span>
                <span className="w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-white" />
            </label>
  );    
};

export default function GlobalHeader({ mode = 'full' }) {
        
    return (
                <header className="flex justify-between p-4 opacity-10 hover:opacity-100 transition-opacity duration-500">
                    <div className={ mode === 'full' ? 'ps-1' : 'ps-4' }>
                        <a href="https://tsu-nami.de/" target="_blank" rel="noreferrer noopener">
                            <Logo size="small" width={ mode === 'full' ? '120px' : '80px' }/>
                        </a>
                    </div>
                    { mode === 'full' ? <div><LanguageSwitch /></div> : '' }
                </header>
        );
}
