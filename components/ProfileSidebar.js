export default function ProfileSidebar({ user }) {
  return (
    <div className="profile-sidebar">
      <img src={user.profilePhoto || '/default-avatar.png'} alt="Profile" />
      <h3>{user.username}</h3>
      <button onClick={() => (window.location.href = '/profile')}>Edit Profile</button>
      <style jsx>{`
        .profile-sidebar {
          background: #1e293b;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
        }
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}
