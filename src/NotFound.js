import Cloud from "./icons/cloud";
import XIcon from "./icons/x-icon";

const NotFound = () => {
    return <div className="error-container">
        <div><Cloud /></div>
        <div class='x-icon-1'>{<XIcon />}</div>
        <div class='x-icon-2'>{<XIcon />}</div>
        <h1>PAGE NOT FOUND.</h1>
    </div>
}


export default NotFound;