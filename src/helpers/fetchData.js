import { DEFAULT_POSITION } from "./constants";

const fetchData = async (latlong = DEFAULT_POSITION) => {
    try {
        if (latlong.lat) {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latlong.lat}&lon=${latlong.lng}&appid=76e52ab3dac16c2cdd001704cf9f85f6`)
            const resp = await response.json();
            return resp;
        }
    } catch (err) {
        console.err(err)
    }

}

export default fetchData;