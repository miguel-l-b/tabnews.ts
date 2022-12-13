export class Post {
    constructor(
        public id: string,
        public parent_id: string | null,
        public owner_username: string,
        public owner_id: string,
        public slug: string,
        public title: string,
        public body: string,
        public status: string,
        public source_url: string,
        public tabcoins: number,
        public children_deep_count: number,

        public created_at: Date,
        public updated_at: Date | null,
        public published_at: Date | null,
        public deleted_at: Date | null,
    ) {  }
}

export enum PostFeatures {
    CREATE_CONTENT = "create:content",
    CREATE_CONTENT_TEXTROOT = "create:content:text_root",
    CREATE_CONTENT_TEXTCHILD = "create:content:text_child",
    UPDATE_CONTENT = "update:content",
    UPDATE_CONTENT_OTHERS = "update:content:others",
}