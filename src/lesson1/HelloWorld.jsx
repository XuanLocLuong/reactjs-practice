//create simple component
import {useContext} from "react";
import ThemeContext from "../lesson6/ThemeContext.jsx";

const HelloWord = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <div style={{
            backgroundColor: theme === "dark" ? "#333" : "#f9f9f9",
            color: theme === "dark" ? "#fff" : "#000",
        }}>
            <h1>Hello, World!</h1>
            <p>This is the first lesson about ReactJS</p>
        </div>
    )
}
export default HelloWord;