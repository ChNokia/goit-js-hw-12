'use strict'

import axios from 'axios'

const BASE_URL = "https://pixabay.com/api/";
export const IMAGES_PER_PAGE = 15;

export async function fetchData(page = 1, searchParams) {
    const { data } = await axios(BASE_URL, {
        params: {
            key: import.meta.env.VITE_API_KEY,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            per_page: 15,
            page,
            q: searchParams,
        }
    });
    return data;
}
