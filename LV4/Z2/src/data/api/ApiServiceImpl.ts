import axios from "axios";
import User from "../model/User";

class ApiServiceImpl {
    public static async getUsers(): Promise<User[]> {
        const users = await axios.get('https://5e510330f2c0d300147c034c.mockapi.io/users');
        return users.data;
    }
}

export default ApiServiceImpl;