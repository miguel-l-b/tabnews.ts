import { AxiosInstance } from "axios";

export default class ApiUsers {
    constructor(
        private route: AxiosInstance
    ) {  }

    async list(): Promise<any> {
        return await this.route.get("/users")
    }

    async getUser(username: string) {
        return await this.route.get(`/users/${username}`)
            .then(e => e.data)
            .catch(e => e)
    }
}
