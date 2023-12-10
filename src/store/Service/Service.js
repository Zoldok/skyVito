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
      onQueryStarted: async (arg, { queryFulfilled }) => {
        const result = await queryFulfilled;
        return result;
      },
    }),
    refreshToken: builder.mutation({
      query: ({ access_token, refresh_token }) => ({
        url: 'auth/login',
        method: 'PUT',
        body: { access_token, refresh_token },
      }),
      onError: (error) => {
        console.error('Error refreshing token:', error);
        // Дополнительные действия по обработке ошибки обновления токена
        // Например, редирект на страницу входа, очистка хранилища и т. д.
        // Возвращаемое значение из этой функции будет передано в место вызова mutation
        return { error: 'Token refresh failed' }; 
      },
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