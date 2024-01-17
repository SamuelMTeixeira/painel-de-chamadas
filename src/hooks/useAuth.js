import { login } from "@/services/auth";

export default function useAuth() {

    const token = localStorage.getItem('token')
    const isAuthenticated = !!token

    return { login, isAuthenticated }
}