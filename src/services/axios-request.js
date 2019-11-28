import axios from 'axios';

const UserService = axios.create({
    baseURL: 'https://minifilmweb.firebaseio.com'
});
export default UserService;


export const apiKey = "AIzaSyDiLgqR6XO6veXsAchBJKDdSA1b4KHZrEE";
