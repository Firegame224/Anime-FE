export type Anime = {
    mal_id: string
    title: string
    images: {
        webp: {
            large_image_url: string
        }
    }
    episodes: number
    synopsis: string
    genres: genre[]
    aired: {
        prop: {
            from: {
                day: string
                month: string
                year: string
            }
            to: {
                day: string
                month: string
                year: string
            }
        }
    }
    score: number
    type: string
    source: string
    scored_by: number
    status: string
    trailer: {
        embed_url: string
    }
}

export type genre = {
    mal_id: string
    name: string
}

export type Character = {
    mal_id: string
    character: {
        name : string
        url : string
        images: {
            webp: {
                image_url: string
            }
        }
    }
    role : string
    favorites : number
}