declare module APIArticle {
    interface HomeServerInputOptions {
        uid: string
    }

    interface HomeServerResponse {
        uid: string
        username: string
        phone: string
        email: string
    }
}
