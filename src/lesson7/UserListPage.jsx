import { useContext, useEffect, useState } from "react";
import ThemeContext from "../lesson6/ThemeContext";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "./UserApi.jsx";
import Pagination from "./Pagination";

function UserListPage() {

    // Sử dụng useNavigate để điều hướng giữa các trang 
    const navigate = useNavigate();

    // Sử dụng useContext để lấy giá trị theme từ ThemeContext
    const { theme } = useContext(ThemeContext);

    // State để lưu danh sách người dùng và trang hiện tại
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);

    //lấy danh sách người dùng
    useEffect(() => {
        fetchUsers().then(setUsers);
    }, []);


    const pageSize = 5;
    const start = (page - 1) * pageSize;
    const currentUsers = users.slice(start, start + pageSize);
    const maxPage = Math.ceil(users.length / pageSize);

    return (
        <div
            style={{
                backgroundColor: theme === "dark" ? "#222" : "#fff",
                color: theme === "dark" ? "#fff" : "#000",
                padding: "20px",
            }}>
            <h1>User List</h1>
            {currentUsers.map(user => (
                <div 
                    key={user.id}
                    style={{
                        cursor: "pointer",
                        marginBottom: "10px",
                    }}
                    onClick={() => navigate(`/users/${user.id}`)}
                >
                    {user.name}
                </div>
            ))}
            <Pagination
                currentPage={page}
                maxPage={maxPage}
                onPageChange={setPage}
            />  
        </div>
    );
}
export default UserListPage