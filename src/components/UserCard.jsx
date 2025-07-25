import './UserCard.css';

function UserCard({ name, email }) {
  return (
    <div className="user-card">
      <h4>{name}</h4>
      <p>{email}</p>
    </div>
  );
}

export default UserCard;
