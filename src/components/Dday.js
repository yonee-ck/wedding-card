import React, {useEffect, useState} from "react";
import ddayImg from "../assets/images/dday.jpg";

function Dday(props) {
    const [dDay, setDday] = useState({});
    const weddingDay = new Date(2021, 10, 20, 15, 30);
    const getDateDday = (date1, weddingDay) => {
        const dDay = new Date(weddingDay.getTime() - date1.getTime());
        return {
            year: dDay.getUTCFullYear() - 1970,
            month: dDay.getUTCMonth(),
            day: dDay.getUTCDate() - 1,
            hour: dDay.getUTCHours(),
            minute: dDay.getUTCMinutes(),
            second: dDay.getUTCSeconds()
        };
    };
    const formatDate = (date) => {
        let d = new Date(date),
            month = (d.getMonth() + 1).toString(),
            day = d.getDate().toString(),
            year = d.getFullYear().toString();
        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;
        return [year, month, day].join("-");
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setDday(getDateDday(new Date(), weddingDay));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
            <div>
                <div className='section-date'>
                    <div className='date-title'>November 20th,<br/>2021</div>
                    <div className='date'>
                        <div className='date-format'>
                            <div className='date-data'>{dDay.month}</div>
                            <div>months</div>
                        </div>
                        <div className='date-format'>
                            <div className='date-data'>{dDay.day}</div>
                            <div>days</div>
                        </div>
                        <div className='date-format'>
                            <div className='date-data'>{dDay.hour}</div>
                            <div>hours</div>
                        </div>
                        <div className='date-format'>
                            <div className='date-data'>{dDay.minute}</div>
                            <div>minutes</div>
                        </div>
                        <div className='date-format'>
                            <div className='date-data'>{dDay.second}</div>
                            <div>seconds</div>
                        </div>
                    </div>
                </div>
                <img className='bg bg-opacity' src={ddayImg} alt='dday' />
            </div>
    );
}

export default Dday;