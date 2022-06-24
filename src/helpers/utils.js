export function camelCaseString(string) {
    try {
        const stringArray = string.split(' ');
        const mappedArray = stringArray.map(item => {
            const restString = item.slice(1, item.length);
            const firstLetter = item.at(0).toUpperCase();
            return firstLetter + restString;
        });
        return mappedArray.join(' ');
    } catch (err) {
        console.error('Empty string given!')
    }

}


export function getCurrentTime() {

    const hour = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();

    return `${convertTime(hour)}:${convertTime(min)}:${convertTime(sec)}`;

}

const convertTime = (time) => {
    return time.toString().length == 1 ? `0${time}` : time;
}

