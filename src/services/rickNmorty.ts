// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type CategoryType = {
  category:string,
  type:string,
  joke:string,
}
type CategoryJokesType = {
  error:boolean,
  amount: number,
  jokes: CategoryType [],
  id: number,
}
type Character = {
  id: number
  name: string
  status: string
}

type AllCharactersResponse = {
  info: {
    count:number,
  }
  results: Character []
}
// Define a service using a base URL and expected endpoints
export const rickNMortyApi = createApi({
  reducerPath: 'rickAndMorty',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({

    getAllCharacters: builder.query<AllCharactersResponse, undefined>({
      query: () => 'character',
    }),
    getCharactersById: builder.query<Character, number>({
      query: (id) => `character/${id}`,
    }),
  }),
});

export const { reducer } = rickNMortyApi;
// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetCharactersByIdQuery, useGetAllCharactersQuery } = rickNMortyApi;
