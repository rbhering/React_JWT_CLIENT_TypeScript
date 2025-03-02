import User from "../interfaces/User";

export default function AuthHeader() {
    const user : User = JSON.parse(localStorage.getItem("user")?.toString() ?? ''); 

    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
    } else {
        return {};
    }
}