function UserDetail(props) {
    const {name, email, phone} = props;
    return (
        <div>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    )
}
export default UserDetail;