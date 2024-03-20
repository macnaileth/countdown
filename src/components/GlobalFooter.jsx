import { GitHubIcon, QuickRef } from './Icons';

export default function GlobalFooter() {

    const mailButtonCSS = "border-b-2 border-transparent hover:border-tdgreen-400 hover:border-bottom transition-all duration-500";
    const defButtonCSS = "border-b-2 border-transparent";
        
    return (
            <footer className="flex justify-between gap-2 items-end pb-6 px-6 opacity-10 hover:opacity-100 transition-opacity duration-500 mt-auto">
                <div>
                    <button className={ mailButtonCSS }>
                        <span className="text-tdgreen-400 text-xs">mac@tsu-nami.de</span>
                    </button>
                </div>
                <div className="flex gap-2">
                    <button className={ defButtonCSS }><QuickRef className="fill-tdgreen-400 hover:fill-tdgreen-300 transition-color duration-500"/></button>
                    <button className={ defButtonCSS }><GitHubIcon className="fill-tdgreen-400 hover:fill-tdgreen-300 transition-color duration-500"/></button>
                </div>
            </footer>
        );
}
