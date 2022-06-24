import React from "react";
import Cloud from "./icons/cloud";
import '../src/styles/error.css';
import XIcon from "./icons/x-icon";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {

        return { hasError: true };
    }


    componentDidCatch() {
        console.error("ERRORE")
    }

    render() {
        if (this.state.hasError) {

            return <div className="error-container">
                <div><Cloud /></div>
                <div className='x-icon-1'>{<XIcon />}</div>
                <div className='x-icon-2'>{<XIcon />}</div>
                <h1>Something went wrong.</h1>
            </div>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;