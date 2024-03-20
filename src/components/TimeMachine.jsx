'use client';

import { useState, useEffect, useMemo, Fragment } from 'react';
import { add, sub, isEqual, getYear, getMonth, getDay, getHours, getMinutes, getDate, setMinutes, setHours } from "date-fns";

import { fullformattedDate } from '../lib/datetimehelpers';
import { ClockIcon } from '../components/Icons';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const initalDeadline = add( Date.now(), { days: 1, hours: 1, minutes: 10 });

const Timer = ({ deadline = new Date().toString(), run = true, timeupHandler }) => {
    
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
                                                <div className="digitl-label text-center text-xs md:text-sm lg:text-base">{label}</div>
                                            </div>
                                        }
                                    </Fragment>
                                ))
                }
            </div>
            );
};

export const TimeMachine = () => {
    
    const [run, setRun] = useState( false ); //stopper
    const [deadline, setDeadline ] = useState();
    const [advanced, setAdvanced] = useState( false ); //use advanced setup
    
    useEffect( () => { setDeadline( initalDeadline ); }, [] );    
    
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
        
        const months = { 0: 'Jan', 1: 'Feb', 2: 'Mar', 3: 'April', 4: 'Mai', 5: 'Jun', 6: 'Jul', 7: 'Aug', 8: 'Sep', 9: 'Okt', 10: 'Nov', 11: 'Dez' };
        
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
                        { run === false &&
                            <div className="quicksetup hidden md:flex gap-2">
                                <TimeSetButton intervall={ 30 }/>
                                <TimeSetButton intervall={ 15 }/>
                                <TimeSetButton intervall={ 10 }/>
                                <TimeSetButton intervall={ 5 }/>
                                <TimeSetButton />
                            </div> 
                        }
                        <div className="border-2 border-tdgreen-400 p-1 rounded">
                            { fullformattedDate( deadline || '' ) }<ClockIcon className="inline pb-0.5"/>
                        </div>
                        { run === false &&
                            <div className="fullsetup flex gap-2">
                                <button 
                                    onClick={ () => setAdvanced(advanced === true ? false : true) }
                                        className="border-2 bg-tgreen border-tgreen p-1 rounded text-white">
                                        { advanced === true ? 
                                            <span className="inline">x</span> :
                                            <>
                                                <span className="inline">...</span>
                                            </>
                                        }
                                </button> 
                            </div>
                        }                        
                        { advanced && <div className="mb-4 flex opacity-95 border-2 border-tdgreen-400 justify-end absolute mt-10 bg-white rounded p-2"><AdvancedSetup /></div> }
                    </div> 
                    { run ? <Timer deadline={ deadline || initalDeadline } run={ run } timeupHandler={ timeUp } /> : 
                            <div className="digit text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-center">timer stopped</div> }
                    <div className="self-center mt-2">
                        <button 
                            className="mt-2 border bg-tdgreen-400 border-tdgreen-400 text-white pb-2 pt-3 ps-3 pe-3 rounded hover:bg-tdgreen-300 hover:border-tdgreen-300"
                            onClick={ () => ( setRun(run ? false : true), setAdvanced( false ) ) } >
                            { !run ? 'Start' : 'Stop' }
                        </button>
                    </div>
                </div>
            </>
    );
};

