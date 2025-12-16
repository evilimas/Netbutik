import axios from 'axios';
import { useEffect, useState } from 'react';

const displayLogedUser = async () => {
  try {
    const response = await axios.get('http://localhost:8000/pets/auth/user', {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching logged user:', error);
    return null;
  }
};

const UserName = () => {
  const [username, setUsername] = useState<string | null>(null);
  useEffect(() => {
    const fetchUsername = async () => {
      const userData = await displayLogedUser();
      if (userData && userData.username) {
        setUsername(userData.username);
      }
    };
    fetchUsername();
  }, []);
  return username;
};

export { displayLogedUser, UserName };
