import { Logo } from './Icons';

const LanguageSwitch = () => {
  return (
            <label className="flex items-center relative w-max cursor-pointer select-none border-2 rounded-full border-tdgreen-400">
                <input type="checkbox" className="switch-input appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full bg-tdgreen-400" />
                <span className="absolute text-xs uppercase right-1 text-white pt-1 pe-1">EN</span>
                <span className="absolute text-xs uppercase right-8 text-white pt-1">DE</span>
                <span className="w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-white" />
            </label>
  );    
};

export default function GlobalHeader() {
    return (
            <header className="flex justify-between p-4 opacity-10 hover:opacity-100 transition-opacity duration-500">
                <div className="ps-1"><Logo size="small" width="120px"/></div>
                <div><LanguageSwitch /></div>
            </header>
        );
}
