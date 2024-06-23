import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: '',
  tagTypes: [''],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
  }),
  endpoints: (builder) => ({
    get: builder.query<>({
      query: () => ``,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: '' as const, id })),
              '',
            ]
          : [''],
    }),
    add: builder.mutation<>({
      query: () => ({
        url: '',
        method: 'POST',
        body: ,
      }),
      invalidatesTags: [''],
    }),
    update: builder.mutation<>({
      query: () => ({
        url: ``,
        method: 'PUT',
        body: ,
      }),
      invalidatesTags: [''],
    }),
    delete: builder.mutation<>({
      query: () => ({
        url: ``,
        method: 'DELETE',
      }),
      invalidatesTags: [''],
    }),
  }),
})

export const {

} = api
