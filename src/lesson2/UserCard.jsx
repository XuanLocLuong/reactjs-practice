//component with props
import {useContext} from "react";
import ThemeContext from "../lesson6/ThemeContext.jsx";

function UserCard(props) {
    const {name, avatarUrl, birthday, phone, email} = props;

    const {theme} = useContext(ThemeContext);

    return (
        <div style={{
            backgroundColor: theme === "dark" ? "#333" : "#f9f9f9",
            color: theme === "dark" ? "#fff" : "#000",
        }}>
            <h1>Name: {name}</h1>
            <img src={avatarUrl} alt="avatar" />
            <p>Birthday: {birthday}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
        </div>
    )
}
export default UserCard;