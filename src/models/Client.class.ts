import { PostFeatures } from "../";

export class Client {
    constructor(
        public id: string,
        public username: string,
        public features: string[] | (ClientFeatures & PostFeatures)[],
        public tabcoins: number,
        public tabcash: number,

        public created_at: Date,
        public updated_at: Date | null,
    ) {  }
}

export enum ClientFeatures {
    CREATE_SESSION = "create:session",
    READ_SESSION = "read:session",
    READ_USER_LIST = "read:user:list",
    UPDATE_USER = "update:user",
    BAN_USER = "ban:user",
    CREATE_MIGRATION = "create:migration",
    READ_MIGRATION = "read:migration",
}