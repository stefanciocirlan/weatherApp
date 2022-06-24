import { useEffect, useState } from "react";
import { getCurrentTime } from "../../helpers/utils";

export const WeatherCurTime = () => {

    const [currTime, setCurrTime] = useState();

    useEffect(() => {
        setInterval(() => {
            const time = getCurrentTime();
            setCurrTime(time);
        }, 1000)

    }, []);


    return <p className='hour letter-spacing'>Today {currTime}</p>
}