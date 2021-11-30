// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type CategoryAliasType = {
  alias: string,
  resolved: string,
}

type CategoryType = {
  error: boolean,
  categories: string [],
  categoryAliases: CategoryAliasType[],
  timestamp: number,
}
type JokeType = {
  category: string,
  type: string,
  joke?: string,
  setup?: string,
  delivery?: string,
  flags: {
    nsfw: boolean,
    religious: boolean,
    political: boolean,
    racist: boolean,
    sexist: boolean,
    explicit: boolean,
  },
  id: number,
  safe: true,
  lang: string,
}
type JokesObjType = {
  error: boolean,
  amount: number,
  jokes: JokeType [],

}
type ParamType = {
  id:string,
  type:string
}

// Define a service using a base URL and expected endpoints
export const categoriesApi = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://v2.jokeapi.dev/' }),
  endpoints: (builder) => ({

    getResCategories: builder.query<CategoryType, undefined>({
      query: () => 'categories',
    }),
    getTenJokes: builder.query<JokesObjType, string>({
      query: (category) => `joke/${category}?amount=10`,
    }),
    getTheJoke: builder.query<JokeType, ParamType>({
      query: ({ type, id }) => `joke/Any?type=${type}&idRange=${id}`,
    }),
  }),
});

export const { reducer } = categoriesApi;
// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetResCategoriesQuery, useGetTenJokesQuery, useGetTheJokeQuery } = categoriesApi;
