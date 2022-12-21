import axios, { AxiosError, AxiosInstance } from "axios"
import { API } from "../"
import ApiUsers from "./users"
export default class Api {
    private route: AxiosInstance;
    private isLogged: boolean = false;
    constructor(
        private token?: string
    ) {
        this.route = axios.create({
            baseURL: `https://www.tabnews.com.br/api/v1`,
            headers: {
                Cookie: token? `session_id=${token}; Max-Age=2592000; Path=/; Secure; HttpOnly; Domain=www.tabnews.com.br` : "",
                head: {
                    setContentType: "application/json"
                }
            },
        })

        this.verifyToken()
    }

    private verifyToken() {
        this.route.get("/sessions")
            .then(e => {
                this.isLogged = true
            })
            .catch(e => {
                this.isLogged = false
            })
    }

    public async login(email: string, password: string): Promise<API.Session | AxiosError> {
        return await this.route.post("/sessions", {
                email,
                password,
        })
            .then(e => {
                return e.data
            })
            .catch((e: AxiosError) => e)
    }

    users = () => new ApiUsers(this.route)
}
