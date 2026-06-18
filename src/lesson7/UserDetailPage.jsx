import { useContext, useEffect, useState } from "react";
import ThemeContext from "../lesson6/ThemeContext";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUserById } from "./UserApi.jsx";
import UserCard from "../lesson2/UserCard.jsx";

function UserDetailPage() {

    // Sử dụng useParams để lấy tham số id từ URL
    const {id} = useParams();
    // Sử dụng useContext để lấy giá trị theme từ ThemeContext
    const { theme } = useContext(ThemeContext);
    // Sử dụng useNavigate để điều hướng giữa các trang
    const navigate = useNavigate();
    // State để lưu thông tin người dùng
    const [user, setUser] = useState(null);

    // Fetch thông tin người dùng khi component được mount
    useEffect(() => {
        fetchUserById(id).then(setUser);
    }, [id]);
    
    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div
            style={{
                backgroundColor: theme === "dark" ? "#333" : "#f9f9f9",
                padding: "10px",
                margin: "10px",
            }}>
            <button onClick={() => navigate("/users")} style={{ marginBottom: "10px" }}>
                Back to Users
            </button>
            <UserCard name={user.name} email={user.email} phone={user.phone}/>
        </div>
    )
}
export default UserDetailPage;