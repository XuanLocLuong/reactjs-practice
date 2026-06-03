import Pagination from "../Pagination";

function UserListView({
    users,
    currentPage,
    maxPage,
    onPageChange,
    onUserClick,
    theme
}) {

    return (
        <div
            style={{
                backgroundColor:
                    theme === "dark"
                        ? "#222"
                        : "#fff",

                color:
                    theme === "dark"
                        ? "#fff"
                        : "#000",

                padding: "20px",
            }}
        >
            <h1>User List</h1>

            {
                users.map(user => (
                    <div
                        key={user.id}
                        style={{
                            cursor: "pointer",
                            marginBottom: "10px",
                        }}
                        onClick={() =>
                            onUserClick(user.id)
                        }
                    >
                        {user.name}
                    </div>
                ))
            }

            <Pagination
                currentPage={currentPage}
                maxPage={maxPage}
                onPageChange={onPageChange}
            />
        </div>
    );
}

export default UserListView;