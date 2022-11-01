import { useContext } from 'react';
import GlobalContext from './../context/GlobalContext';
import  dayjs  from 'dayjs';
import logo from './../assets/logo.png';

export default function CalendarHeader(){
    const {monthIndex, setMonthIndex} = useContext(GlobalContext);
    function handlePrevMonth(){
        setMonthIndex(monthIndex - 1);
    }
    function handleNextMonth(){
        setMonthIndex(monthIndex + 1);
    }
    function handleReset(){
        setMonthIndex(
            monthIndex === dayjs().month()
            ? monthIndex + Math.random()
            : dayjs().month()
        );
    }
    return(
        <header className='px-4 py-2 flex items-center'>
            <img src={logo} alt="calendar" className='mr-2 w-12 h-12'/>
                <h1 className='mr-18 text-x1 text-gray-500 fond-bold'>
                    Calendar
                </h1>
            <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
                Today
            </button>
            <button onClick={handlePrevMonth}>
                <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
                    chevron-left
                </span>
            </button>
            <button onClick={handleNextMonth}>
                <span className='ml-4 text-x1 text-gray-500 font-bold'>
                    {dayjs(new Date(dayjs().year(), monthIndex)).format(
                        "MMMM-YYYY"
                    )}
                </span>
            </button>
        </header>
    );
}