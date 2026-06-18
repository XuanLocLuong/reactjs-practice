import {useContext, useEffect, useState} from "react";
import UserCard from "../lesson2/UserCard.jsx";
import ThemeContext from "../lesson6/ThemeContext.jsx";

function UserDetail() {
    const { theme } = useContext(ThemeContext);
    // const {name, email, phone} = props;

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const userId = 1;
    useEffect(() => {
        const fetchUser = async () => {
            try{
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
                const data = await response.json();
                setUser(data);
                setLoading(false);
            }catch(err){
                console.log(err);
                setLoading(false);
            }
        }
        fetchUser();
    }, [])

    if(loading){
        return <div>Loading...</div>;
    }

    return (
        <div
            style={{
                backgroundColor: theme === "dark" ? "#333" : "#f9f9f9",
                color: theme === "dark" ? "#fff" : "#000",
                padding: "10px",
                margin: "10px",
            }}>
            <UserCard name={user.name} phone={user.phone} email={user.email} />
        </div>
    )
}
export default UserDetail;