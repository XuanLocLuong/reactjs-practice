import { useEffect, useState } from "react";
import UserDetail from "./UserDetail";

function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        //hàm fetch dữ liệu người dùng từ API
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
                setLoading(false);
            }
            catch (error) {
                console.error('Error fetching users:', error);
                setLoading(false);
            }
        };

        //gọi hàm fetchUsers khi component được mount
        fetchUsers();
    }, []);

    if(loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <UserDetail name={user.name} email={user.email} phone={user.phone} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default UserList