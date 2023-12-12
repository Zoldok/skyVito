import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react'

export const Api = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8090/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('access_token')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getAds: builder.query({
      query: () => 'ads',
    }),
    getAdsId: builder.query({
      query: (adId) => `ads/${adId}`,
    }),
    getUserInfo: builder.query({
      query: () => `user`,
      onError: (error) => {
        if (error.status === 401) {
          // Обработка ошибки авторизации
console.log(error);
        } else {
          throw error;
           // Проброс остальных ошибок для дальнейшей обработки
        }
      },
    }),
    refreshToken: builder.mutation({
      query: ({ access_token, refresh_token }) => ({
        url: 'auth/login',
        method: 'PUT',
        body: { access_token, refresh_token },
      }),
      // onError: (error) => {
      //   if (error.status === 401) {
        // console.log(error);
      //     //
      //   } else {
      //     throw error; 
      //   }
      // },
      transformResponse: (response) => {
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('refresh_token', response.refresh_token);
        return response;
      },
    }),
  }),
});



export const { useGetAdsQuery, useGetAdsIdQuery, useGetUserInfoQuery, useRefreshTokenMutation } = Api
// builder.mutation:POST, PUT или DELETE