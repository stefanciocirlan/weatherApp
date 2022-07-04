import { DEFAULT_POSITION } from "./constants";

const fetchData = async (latlong = DEFAULT_POSITION) => {
   
    const requestOptions = {
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body:JSON.stringify({lat:latlong?.lat, lon:latlong?.lng})
    };

    try {
        if (latlong.lat) {
            const response = await fetch(`http://localhost:8080/readApiData`, requestOptions);
            const resp = await response.json();
            console.log(resp);
            return resp;
        }
    } catch (err) {
        console.error(err)
    }

}

export default fetchData;