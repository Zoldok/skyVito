import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Api = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8090/' }),
  endpoints: (builder) => ({

    getObj: builder.query({
      query: () => 'ads',
    }),
  }),
});

export const {  useGetObjQuery } = Api;
