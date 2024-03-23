import Link from 'next/link'; 
import { resolveLangStr } from '../lib/handleLanguage';

const linkCSS = "border-b-2 border-signalred-300 hover:pb-0.5 hover:border-signalred-500 text-tdgrey hover:border-bottom transition-all duration-150";

const InfoModal = ({ status='closed', handler, lang }) => {
  return (
            <div className={ status === 'closed' ? 'hidden' : 'block' } >
                <div className={ ( status === 'closed' ? 'opacity-0' : 'opacity-90' ) + " fixed w-full h-full top-0 flex bg-tdgreen-400 transition-all duration-300" }></div>
                <div className="fixed w-full h-full top-0 flex place-content-center text-tdgreen-400">
                    <div className="absolute modalbox shadow bg-white p-6 border-2 border-tdgreen-400 rounded top-1/4">
                        <button 
                            onClick={ handler }
                            className="absolute right-3 top-2 hover:text-tdgreen-300 transition-color duration-300">
                            &#x2715;
                        </button>
                        <h1 className="text-4xl font-bold">{ resolveLangStr( 'about', lang.data, lang.set ) }</h1>
                        <p>{ resolveLangStr( 'intro', lang.data, lang.set ) }</p>
                        <p>
                            { resolveLangStr( 'builton', lang.data, lang.set ) }&nbsp; 
                            <a className={ linkCSS } href="https://nextjs.org/" target="_blank" rel="noreferrer noopener">next.js</a> //&nbsp;  
                            <a className={ linkCSS } href="https://date-fns.org/" target="_blank" rel="noreferrer noopener">date-fns</a>.</p>
                        <p>{ resolveLangStr( 'basedon', lang.data, lang.set ) }&nbsp; 
                            <a className={ linkCSS } href="https://dev.to/yuridevat/how-to-create-a-timer-with-react-7b9" target="_blank" rel="noreferrer noopener">Luke Shiru</a>
                        </p>
                        <p>{ resolveLangStr( 'matomonocookies', lang.data, lang.set ) }</p>
                        <p>{ resolveLangStr( 'info', lang.data, lang.set ) }:&nbsp;
                            <a className={ linkCSS } href="https://tsu-nami.de/" target="_blank" rel="noreferrer noopener">www.tsu-nami.de</a>
                        </p>
                        <p>{ resolveLangStr( 'kofi', lang.data, lang.set ) }
                            <span className="text-signalred-400">&#x2764;</span>
                            <a className={ linkCSS } href="https://ko-fi.com/tsu_nami" target="_blank" rel="noreferrer noopener">ko-fi</a>.
                        </p>
                    </div>
                </div>
            </div>
  );    
};
export default InfoModal;
