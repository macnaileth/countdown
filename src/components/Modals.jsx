'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link'; 
import { usePathname } from 'next/navigation';
import { formatISO, getMonth, getDate, getYear, getHours, getMinutes, getSeconds } from "date-fns";

import { resolveLangStr } from '../lib/handleLanguage';
import { fullformattedDate } from '../lib/datetimehelpers';
import { Copy, OpenBrowser } from './Icons';

const linkCSS = "border-b-2 border-signalred-300 hover:pb-0.5 hover:border-signalred-500 text-tdgrey hover:border-bottom transition-all duration-150";

const ModalWrapper = ({ children, status='closed', handler }) => {
  return (
            <div className={ status === 'closed' ? 'hidden' : 'absolute top-0 left-0' } >
                <div className={ ( status === 'closed' ? 'opacity-0' : 'opacity-90' ) + " fixed w-full h-full top-0 flex bg-tdgreen-400 transition-all duration-300" }></div>
                <div className="fixed w-full h-full top-0 flex place-content-center text-tdgreen-400">
                    <div className="absolute modalbox shadow bg-white p-6 border-2 border-tdgreen-400 rounded top-1/4">
                        <button 
                            onClick={ handler }
                            className="absolute right-3 top-2 hover:text-tdgreen-300 transition-color duration-300">
                            &#x2715;
                        </button>
                        { children }
                    </div>
                </div>
            </div>                        
         );
};

export const InfoModal = ({ status='closed', handler, lang }) => {
  return (
            <ModalWrapper status={ status } handler={ handler }> 
                <h1 className="text-4xl font-bold">{ resolveLangStr('about', lang.data, lang.set) }</h1>
                <p>{ resolveLangStr('intro', lang.data, lang.set) }</p>
                <p>
                    { resolveLangStr('builton', lang.data, lang.set) }&nbsp; 
                    <a className={ linkCSS } href="https://nextjs.org/" target="_blank" rel="noreferrer noopener">next.js</a> &nbsp;  
                    <a className={ linkCSS } href="https://date-fns.org/" target="_blank" rel="noreferrer noopener">date-fns</a>.</p>
                <p>{ resolveLangStr('basedon', lang.data, lang.set) }&nbsp; 
                    <a className={ linkCSS } href="https://dev.to/yuridevat/how-to-create-a-timer-with-react-7b9" target="_blank" rel="noreferrer noopener">Luke Shiru</a>
                </p>
                <p>{ resolveLangStr('matomonocookies', lang.data, lang.set) }</p>
                <p>{ resolveLangStr('info', lang.data, lang.set) }:&nbsp;
                    <a className={ linkCSS } href="https://tsu-nami.de/" target="_blank" rel="noreferrer noopener">www.tsu-nami.de</a>
                </p>
                <p>{ resolveLangStr('kofi', lang.data, lang.set) }
                    <span className="text-signalred-400">❤️</span>
                    <a className={ linkCSS } href="https://ko-fi.com/tsu_nami" target="_blank" rel="noreferrer noopener">ko-fi</a>.
                </p>          
            </ModalWrapper>
  );    
};

export const ShareModal = ({ status='closed', handler, lang, sharetimer }) => {
    
    const pathname = usePathname();
    const [ sharelink, setSharelink ] = useState( '' );
    const [ copied, setCopied ] = useState( false );
    
    const dateObj = { 
        year: getYear( sharetimer ),
        month: getMonth( sharetimer ),
        day: getDate( sharetimer ),
        hours: getHours( sharetimer ),
        minutes: getMinutes( sharetimer ),
        seconds: getSeconds( sharetimer )
    };
    const dateString = new Date( dateObj.year, dateObj.month, dateObj.day, dateObj.hours, dateObj.minutes, dateObj.seconds );
    const ISOString = formatISO( dateString );
    const TZclearedISO = ISOString.substring( 0, ISOString.length - 6 );
    
    useEffect ( () => setSharelink( window.location.origin + ( pathname === '/' ? '' : pathname ) + '?timer=' + TZclearedISO + '&lang=' + lang.set ) );
    
    return (
                <ModalWrapper status={ status } handler={ handler }> 
                    <h1 className="text-4xl font-bold">{ resolveLangStr('share', lang.data, lang.set) }</h1>
                    <p>{ resolveLangStr('shareinfo', lang.data, lang.set) }</p>
                    <div className="flex gap-1 w-full">
                        <div className="flex grow border-2 whitespace-nowrap overflow-hidden border-tdgreen-400">
                            <div className="grow ps-2 pt-2 pb-1 rounded whitespace-nowrap overflow-hidden text-ellipsis">
                                { sharelink }
                            </div>
                            <div className={ "pt-2 pb-1 px-2 text-right bg-white transition-opacity duration-700 ease-in " + ( copied === true ? "opacity-100" : "opacity-0" ) }>&#10003;</div>
                        </div>
                        <div className="pt-2 pb-0">
                            <button onClick={ () => { 
                                navigator.clipboard.writeText( sharelink )
                                        .then( setCopied( true ) )
                                        .then( setTimeout( () => { setCopied( false ); }, 1000 ) ); 
                                } 
                            }>
                                <Copy className="fill-tdgreen-400 hover:fill-tdgreen-300 transition-color duration-500"/>
                            </button>
                        </div>
                        <div className="pt-2 pb-0">
                            <a href={ sharelink } target="_blank" rel="noopener noreferrer">
                                <OpenBrowser className="fill-tdgreen-400 hover:fill-tdgreen-300 transition-color duration-500"/>
                            </a>
                        </div>                        
                    </div> 
                </ModalWrapper>
    );    
};
