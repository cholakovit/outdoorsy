// Redux toolkit
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const outdoorsyApi = createApi({
  reducerPath: "outdoorsyApi",

  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_OUTDOORSY_LOCAL }),

  tagTypes: ["Items"],
  
  endpoints: (builder) => ({
    getRentels: builder.query({
      query: (searchData: any) => {
        let search: string;
        if (searchData.searchString.length > 2) {
          //search = `?_page=${searchData.page}&_limit=${searchData.itemsPerPage}&keywords=${searchData.searchString}`
          search = `?keywords=${searchData.searchString}`;
        } else {
          //search = `?_page=${searchData.page}&_limit=${searchData.itemsPerPage}`
          search = ``;
        }

        return search;
      },
      providesTags: ["Items"],
    }),
  }),
});

export const { useGetRentelsQuery } = outdoorsyApi;
