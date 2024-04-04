'use client';

import { useState, useEffect, useMemo, Fragment, useContext } from 'react';
import { add, sub, isEqual, getYear, getMonth, getDay, getHours, getMinutes, getDate, setMinutes, setHours, format, parseISO } from "date-fns";

import { fullformattedDate } from '../lib/datetimehelpers';
import { ClockIcon, Share } from '../components/Icons';
import { resolveLangStr } from '../lib/handleLanguage';
import { ShareModal } from './Modals';

import { LanguageContext, LanguageData, TimerSet } from './TimerWrapUp'; //get context

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const initalDeadline = add( Date.now(), { days: 1, hours: 1, minutes: 10 });

const Timer = ({ deadline = new Date().toString(), run = true, timeupHandler, language }) => {
    
    const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
    const [time, setTime] = useState(parsedDeadline - Date.now());

    const [stopped, setStopped] = useState( {} ); 
    
    useEffect( () => {
        setStopped(timeupHandler( {
            d: Math.floor(time / DAY),
            h: Math.floor((time / HOUR) % 24),
            m: Math.floor((time / MINUTE) % 60),
            s: Math.floor((time / SECOND) % 60)
        } ) ); 
    } );
        
    useEffect( () => {  
        
        if ( run === true ) {
            const interval = setInterval(
                    () => setTime(parsedDeadline - Date.now()),
                    1000,
                    );         
            return () => clearInterval(interval);
        } 
        
        if ( stopped === true ) {
            setTime( initalDeadline - Date.now() ); 
        }
        
    }, [run]); 
    
    return (
            <div className="timer flex gap-4 md:gap-6 lg:gap-8 text-tdgreen justify-center">
                {Object.entries({
                                Days: time / DAY,
                                Hours: (time / HOUR) % 24,
                                Minutes: (time / MINUTE) % 60,
                                Seconds: (time / SECOND) % 60
                            }).map(([label, value]) => (
                                    <Fragment key={label}>
                                        { Math.floor(value) > 0 &&
                                            <div key={label} className="digit-box">
                                                <div className="digit text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold">{`${Math.floor(value)}`.padStart(2, "0")}</div>
                                                <div className="digitl-label text-center text-xs md:text-sm lg:text-base">{ resolveLangStr( label, language.data, language.lang ) }</div>
                                            </div>
                                        }
                                    </Fragment>
                                ))
                }
            </div>
            );
};

export const TimeMachine = () => {
    
    const language = useContext( LanguageContext );  
    const langJSON = useContext( LanguageData );
    const timerSetup = useContext( TimerSet );
    
    const [run, setRun] = useState( false ); //stopper
    const [deadline, setDeadline ] = useState(); //deadline
    const [advanced, setAdvanced] = useState( false ); //use advanced setup
    const [ status, setStatus ] = useState( 'closed' ); //modal
    
    const timerDate = new Date( timerSetup );
    
    useEffect( () => { 
        setDeadline( timerSetup === null ? initalDeadline : timerSetup ); 
        setRun( timerSetup === null ? false : true );
    }, [] ); 
    
    const closeHandler = () => setStatus( 'closed' );
    
    const timeUp = ( timer ) => {
        if ( timer.d <= 0 && timer.h <= 0 && timer.m <= 0 && timer.s <= 0 ) {
            console.log( 'Time is up!' );
            run === true ? setRun( false ) : null;
            return true;
        }
        return false;
    }; 

    const TimeSetButton = ({ intervall = 1, unit = 'min', base = 0 }) => {
        
        const triggerButton = () => ( setDeadline( add( Date.now(), { minutes: intervall + base }), setAdvanced( false ) ) );

        return ( 
                    <button 
                        onClick={ () => triggerButton() }
                        className="border-2 bg-tdgreen-400 border-tdgreen-400 p-1 rounded text-white hover:bg-tdgreen-300 hover:border-tdgreen-300">
                        { intervall.toString().padStart(2, "0") + ' ' + unit }
                    </button> 
               );

    };  
    
    const AddSubButton = ({ addsub = '-', units }) => {
        
        const triggerAddSub = () => setDeadline( addsub === '+' ? add( deadline, units ) : addsub === '-' ? sub( deadline, units ) : null );

        return ( 
                    <button onClick={ () => triggerAddSub() } className="px-1 hover:opacity-75">{ addsub }</button>
               );

    };     
    
    const AdvancedSetup = () => {
        
        const months = { 
            0: resolveLangStr( 'Jan', langJSON, language.language ), 
            1: resolveLangStr( 'Feb', langJSON, language.language ), 
            2: resolveLangStr( 'Mar', langJSON, language.language ), 
            3: resolveLangStr( 'April', langJSON, language.language ), 
            4: resolveLangStr( 'Mai', langJSON, language.language ), 
            5: resolveLangStr( 'Jun', langJSON, language.language ), 
            6: resolveLangStr( 'Jul', langJSON, language.language ), 
            7: resolveLangStr( 'Aug', langJSON, language.language ), 
            8: resolveLangStr( 'Sep', langJSON, language.language ), 
            9: resolveLangStr( 'Okt', langJSON, language.language ), 
            10: resolveLangStr( 'Nov', langJSON, language.language ), 
            11: resolveLangStr( 'Dez', langJSON, language.language ) 
        };
        
        return (
                <div id="advanced-setup" className="flex flex-col justify-left gap-2">
                    <div className="bg-tdgreen-500 border-tdgreen-500 hover:border-tdgreen-300 hover:bg-tdgreen-300 p-1 rounded text-white text-center">
                        <button 
                            onClick={ () => setDeadline( initalDeadline ) }
                            className="text-center px-1 pt-1">
                            Reset
                        </button>
                    </div>
                    <div className="flex bg-tgreen border-tgreen p-1 rounded text-white text-center">
                        <div className="">
                            { getYear( deadline ) <= getYear( initalDeadline ) ? <span className="p-1"></span> : <AddSubButton units={{ years: 1 }} /> }
                        </div>
                        <div className="w-4/5 grow"><span className="p-2">{ getYear( deadline ) }</span></div>
                        <div className=""><AddSubButton addsub="+" units={{ years: 1 }}/></div>                      
                    </div>                     
                    <div className="flex bg-tgreen border-tgreen p-1 rounded text-white text-center">
                        <div className="">
                            { getMonth( deadline ) <= getMonth( initalDeadline ) ? <span className="p-1"></span> : <AddSubButton units={{ months: 1 }} /> }
                        </div>
                        <div className="w-4/5 grow"><span className="p-2">{ months[getMonth( deadline )]  }</span></div>
                        <div className=""><AddSubButton addsub="+" units={{ months: 1 }}/></div>                      
                    </div>                       
                    <div className="flex bg-tgreen border-tgreen p-1 rounded text-white text-center">
                        <div className="">
                            { getDate( deadline ) < getDate( initalDeadline ) ? <span className="p-1"></span> : <AddSubButton units={{ days: 1 }}/> }
                        </div>
                        <div className="w-4/5 grow"><span className="p-2">{ getDate( deadline ).toString().padStart(2, "0") }</span></div>
                        <div className=""><AddSubButton units={{ days: 1 }} addsub="+"/></div>                      
                    </div>                      
                    <div className="flex bg-tgreen border-tgreen p-1 rounded text-white text-center">
                        <div className="">
                            { getHours( deadline ) <= getHours( Date.now() ) ? <span className="p-1"></span> : <AddSubButton units={{ hours: 1 }}/> }
                        </div> 
                        <div className="w-4/5 grow"><span className="p-2">{ getHours( deadline ).toString().padStart(2, "0") }</span></div>
                        <div className=""><AddSubButton units={{ hours: 1 }} addsub="+"/></div>                      
                    </div>                    
                    <div className="flex bg-tgreen border-tgreen p-1 rounded text-white text-center">
                        <div className="">
                            { getMinutes( deadline ) <= getMinutes( Date.now() ) ? <span className="p-1"></span> : <AddSubButton units={{ minutes: 1 }}/> }
                        </div>
                        <div className="w-4/5 grow"><span className="p-2">{ getMinutes( deadline ).toString().padStart(2, "0") }</span></div>
                        <div className=""><AddSubButton units={{ minutes: 1 }} addsub="+"/></div>                      
                    </div>
                </div>
                );
    };
    
    return (
            <>
                <div className="flex flex-col justify-center">
                    <div className={ "flex gap-2 mb-4 w-full text-xs md:text-sm lg:text-base justify-center " + ( run === true ? ' md:justify-center' : ' md:justify-end') }>
                        { run === false && timerSetup === null &&
                            <div className="quicksetup hidden md:flex gap-2">
                                <TimeSetButton intervall={ 30 }/>
                                <TimeSetButton intervall={ 15 }/>
                                <TimeSetButton intervall={ 10 }/>
                                <TimeSetButton intervall={ 5 }/>
                                <TimeSetButton />
                            </div> 
                        }
                        <div className="border-2 border-tdgreen-400 p-1 rounded">
                            { timerSetup === null ? fullformattedDate( deadline || '' ) : fullformattedDate( timerDate ) }<ClockIcon rotate={ run === true ? true : false } className="inline pb-0.5 " />
                        </div>
                        { run === false && timerSetup === null &&
                            <div className="fullsetup flex gap-2">
                                <button 
                                    onClick={ () => setAdvanced(advanced === true ? false : true) }
                                        className="border-2 bg-tgreen border-tgreen p-1 rounded text-white rounded hover:bg-tdgreen-300 hover:border-tdgreen-300">
                                        { advanced === true ? 
                                            <span className="inline">&#x2715;</span> :
                                            <>
                                                <span className="inline">...</span>
                                            </>
                                        }
                                </button> 
                            </div>
                        }                        
                        { advanced && <div className="mb-4 flex opacity-95 border-2 border-tdgreen-400 justify-end absolute mt-10 bg-white rounded p-2"><AdvancedSetup /></div> }
                    </div> 
                    { run ? <Timer deadline={ deadline || initalDeadline } run={ run } timeupHandler={ timeUp } language={{ lang: language.language, data: langJSON }} /> : 
                            <div className="digit text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-center mt-2">{ resolveLangStr( 'stopped', langJSON, language.language ) }</div> }
                    { timerSetup === null &&
                    <div className="self-center flex gap-2 mt-2">
                        <button 
                            className="mt-2 border bg-tdgreen-400 border-tdgreen-400 text-white pb-2 pt-3 ps-3 pe-3 rounded hover:bg-tdgreen-300 hover:border-tdgreen-300"
                            onClick={ () => ( setRun(run ? false : true), setAdvanced( false ) ) } >
                                { !run ? resolveLangStr( 'start', langJSON, language.language ) : resolveLangStr( 'stop', langJSON, language.language ) }
                        </button>
                        { run === false &&
                            <>
                                <button 
                                    onClick={ () => setStatus( 'open' ) }
                                    className="mt-2 border bg-tgreen border-tgreen text-white pb-2 pt-2 ps-3 pe-3 rounded hover:bg-tdgreen-300 hover:border-tdgreen-300">
                                    <Share className="fill-white"/>
                                </button>   
                            </>
                        }
                    </div>
                    }
                </div>
                { timerSetup === null &&
                    <ShareModal 
                        status={ status } 
                        lang={{ set: language.language, data: langJSON }} 
                        handler={ closeHandler } 
                        sharetimer={ deadline || initalDeadline } 
                    />
                }
            </>
    );
};

