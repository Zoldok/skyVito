import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
          console.log(error)
        } else {
          throw error // Проброс остальных ошибок
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
      //     // Обработка ошибки авторизации при обновлении токена

      //   } else {
      //     throw error; // Проброс остальных ошибок
      //   }
      // },
      transformResponse: (response) => {
        localStorage.setItem('access_token', response.access_token)
        localStorage.setItem('refresh_token', response.refresh_token)
        return response
      },
    }),
    addAds: builder.mutation({
      query: ({ title, description, price }) => ({
        url: `ads?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(
          description
        )}&price=${encodeURIComponent(price)}`,
        method: 'POST',
      }),
    }),
    delAdsId: builder.mutation({
      query: ({ adId }) => {
        return { url: `ads/${adId}`, method: 'DELETE' }
      },
    }),
    editAds: builder.mutation({
      query: ({ title, description, price, id }) => ({
        url: `ads/${id}`,
        method: 'PATCH',
        body: {
          title: title,
          description: description,
          price: price,
        },
      }),
    }),
    addImgAds: builder.mutation({
      query: ({ id, file }) => ({
        url: `ads/${id}/image`,
        method: 'POST',
        body: file,
      }),
    }),
    // delImgAds: builder.mutation({
    //   query: (idAds) => ({
    //     url: `ads/${idAds}/image`,
    //     method: 'DELETE',
    //     body: '',
    //   }),
    // }),
    delImgAds: builder.mutation({
      query: (data) => {
        const url = data.image.url
        return {
          url: `ads/${data.id}/image?file_url=${url}`,
          method: 'DELETE',
        }
      },
    }),
    userUpdate: builder.mutation({
      query: (updatedUserData) => ({
        url: 'user',
        method: 'PATCH',
        body: updatedUserData,
      }),
    }),
    uploadUserAvatar: builder.mutation({
      query: (formData) => ({
        url: 'user/avatar',
        method: 'POST',
        body: formData,
      })
    }),
  }),
})

export const {
  useGetAdsQuery,
  useGetAdsIdQuery,
  useGetUserInfoQuery,
  useRefreshTokenMutation,
  useAddAdsMutation,
  useDelAdsIdMutation,
  useEditAdsMutation,
  useAddImgAdsMutation,
  useDelImgAdsMutation,
  useUserUpdateMutation,
  useUploadUserAvatarMutation,
} = Api
// builder.mutation:POST, PUT или DELETE
