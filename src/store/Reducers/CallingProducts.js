import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react';
import {API_BASE_URL} from '../../assets/config/urls';

/// RTK QUERRY ///
// export const ProductsManagement = createApi({
//   reducerPath: 'products',
//   baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
//   endpoints: builder => ({
//     getAllproducts: builder.query({
//       query: () => '/products',
//     }),

// })

export const ProductsManagement = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),
  endpoints: builder => ({
    getAllproducts: builder.query({
      query: () => '/products',
    }),

    Login: builder.mutation({
      query: userData => ({
        url: '/UserLogin',
        method: 'POST',
        headers: 'content-type: application/json',
        body: userData,
      }),
    }),

    Signup: builder.mutation({
      query: userData => ({
        url: '/UserSignup',
        method: 'POST',
        headers: 'content-type: application/json',
        body: userData,
      }),
    }),
  }),
});

export const {useGetAllproductsQuery, useLoginMutation, useSignupMutation} =
  ProductsManagement;
