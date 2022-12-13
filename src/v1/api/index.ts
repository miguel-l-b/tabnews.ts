import axios from "axios"
import { Session } from "../models/api/Session"

export default class Api {
    private route;
    constructor(
        private token?: string
    ) {
        this.route = axios.create({
            baseURL: `https://www.tabnews.com.br/api/v1`,
            headers: {
                Cookie: token? `session_id=${token}` : "",
                head: {
                    setContentType: "application/json"
                }
            },
        });
    }

    public async login(email: String, password: String): Promise<Session> {
        return await this.route.post("/session", {
            email,
            password,
        }).then(e => {
            const { data } = e;
            return {
                id: data.id,
                token: data.token,
                expires_at: new Date(data.expires_at),
                created_at: new Date(data.created_at),
                updated_at: new Date(data.updated_at),
            }
        })
        .catch(e => {
            console.log(e)
            throw new Error(e)
        });
    }
}