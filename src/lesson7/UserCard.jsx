function UserCard({name, email, phone, theme}) {
    return (
        <div
            style={{
                backgroundColor: theme === "dark" ? "#333" : "#f9f9f9",
                padding: "10px",
                margin: "10px",
                color: theme === "dark" ? "#fff" : "#000",
            }}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    )
}
export default UserCard;