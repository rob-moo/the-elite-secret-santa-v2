import {useState} from "react";
import '../../App.css'

export const Footer = () => {
    const [title] = useState('');
    return (<div className="App-footer">{title}</div>)
}