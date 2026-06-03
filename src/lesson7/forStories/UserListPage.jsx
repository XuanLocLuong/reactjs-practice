import { useContext, useEffect, useState } from "react";
import ThemeContext from "../lesson6/ThemeContext";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../lesson5/UserApi";
import Pagination from "./Pagination";
import UserListView from "./UserListView";

function UserListPage() {

    // Sử dụng useNavigate để điều hướng giữa các trang 
    const navigate = useNavigate();

    // Sử dụng useContext để lấy giá trị theme từ ThemeContext
    const { theme } = useContext(ThemeContext);

    // State để lưu danh sách người dùng và trang hiện tại
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchUsers().then(setUsers);
    }, []);

    const pageSize = 5;
    const start = (page - 1) * pageSize;
    const currentUsers = users.slice(start, start + pageSize);
    const maxPage = Math.ceil(users.length / pageSize);

    return (
        <UserListView
            users={currentUsers}
            currentPage={page}
            maxPage={maxPage}
            onPageChange={setPage}
            onUserClick={(id) =>
                navigate(`/users/${id}`)
            }
            theme={theme}
        />
    );
}
export default UserListPage