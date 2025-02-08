export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: '/auth/login',
        REGISTER: '/auth/register',
        LOGOUT: '/auth/logout',
    },
    BLOG: {
        GET_ALL: '/posts',
        GET_BY_ID: (id: string) => `/posts/${id}`,
        CREATE: '/posts',
        UPDATE: (id: string) => `/posts/${id}`,
        DELETE: (id: string) => `/posts/${id}`,
    },
} as const; 