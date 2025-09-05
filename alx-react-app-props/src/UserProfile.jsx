import { useContext } from 'react';
import UserContext from './UserContext';
import UserInfo from './UserInfo';

function ProfilePage() {
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Welcome, {userData.name}!</p>
      <UserInfo />
    </div>
  );
}

export default ProfilePage;
