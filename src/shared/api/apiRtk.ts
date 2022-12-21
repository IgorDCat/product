import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {LOCALSTORAGE_USER_KEY} from '@/shared/const/localstorage';

export const apiRtk = createApi({
    reducerPath: 'apiRtk',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(LOCALSTORAGE_USER_KEY) || '';
            if(token) {
                headers.set('Authorization', token);
            }
            return headers;
        }
    }),
    endpoints: () => ({}),
})

