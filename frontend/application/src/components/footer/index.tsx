import {useState} from "react";
import '../../App.css'

export const Footer = () => {
    const [title] = useState('fin');
    return (<div className="App-header">{title}</div>)
}