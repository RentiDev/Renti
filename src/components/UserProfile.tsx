import { useEffect, useState } from 'react';
import getCurrentUser from 'src/actions/getCurrentUser';

type User = {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  hashedPassword: string | null;
  favoriteIds: string[];
};

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchCurrentUser() {
      try {
        const user = await getCurrentUser();
        setCurrentUser(user);
      } catch (error) {
        // Handle the error here, e.g., log the error or show an error message
        console.error('Error fetching current user:', error);
      }
    }

    fetchCurrentUser().catch((error) => {
      // Handle any uncaught rejections here, if necessary
      console.error('Unhandled promise rejection:', error);
    });
  }, []);

  return (
    <div>
      {currentUser && <div>Hi {currentUser.name}</div>}
    </div>
  );
}

export default UserProfile;
