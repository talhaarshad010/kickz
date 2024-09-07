import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react';
import {API_BASE_URL, PRODUCTS_API_BASE_URL} from '../../assets/config/urls';

export const Products = createApi({
  reducerPath: 'productsd',
  baseQuery: fetchBaseQuery({baseUrl: PRODUCTS_API_BASE_URL}),
  endpoints: builder => ({
    getAllproducts: builder.query({
      query: () => '/products',
    }),
  }),
});

export const {useGetAllproductsQuery} = Products;
