import {useState} from "react";
import '../../App.css'
export const Header = () => {
    const [title, setTitle] = useState('title');

    return (<div className="App-header">{title}</div>)
}