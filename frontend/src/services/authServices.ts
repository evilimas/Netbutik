// import axios from 'axios';
// import { useEffect, useState } from 'react';

// const displayLogedUser = async () => {
//   try {
//     const response = await axios.get('http://localhost:8000/pets/auth/user', {
//       withCredentials: true,
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching logged user:', error);
//     return null;
//   }
// };

// const UserName = () => {
//   const [username, setUsername] = useState<string | null>(null);
//   useEffect(() => {
//     const fetchUsername = async () => {
//       const userData = await displayLogedUser();
//       if (userData && userData.username) {
//         setUsername(userData.username);
//       }
//     };
//     fetchUsername();
//   }, []);
//   return username;
// };

// const checkAuth = async () => {
//   try {
//     const res = await fetch('http://localhost:8000/pets/auth/me');

//     if (!res.ok) {
//       console.warn('Unexpected response:', res.status);
//       return false;
//     }

//     const user = await res.json();
//     if (!user.isLoggedIn) {
//       return false;
//     }
//     return user.name;
//   } catch (err) {
//     console.log(err, 'Auth check failed');
//     return false;
//   }
// };

export async function logout() {
  try {
    const res = await fetch('http://localhost:8000/pets/auth/logout/');
    window.location.href = '/';
  } catch (err) {
    console.log('failed to log out', err);
  }
}

// export { displayLogedUser, UserName, checkAuth };
