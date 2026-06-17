//component with props
function UserCard(props) {
    const {name, avatarUrl, birthday} = props;
    return (
        <div>
            <h1>Name: {name}</h1>
            <img src={avatarUrl} alt="avatar" />
            <p>Birthday: {birthday}</p>
        </div>
    )
}
export default UserCard;