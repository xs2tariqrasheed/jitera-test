import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  username: string;
}

export const fetchUsers = async (): Promise<Array<User>> =>
  (await axios.get("https://jsonplaceholder.typicode.com/users")).data;
