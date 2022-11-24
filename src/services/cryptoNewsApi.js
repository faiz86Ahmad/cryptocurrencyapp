import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const CryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '7d0137058dmsh59b5f634f61a489p113a43jsn4529b3ea8de7',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}


const baseUrl='https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) =>({url,headers:CryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath:"cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints:(builder)=>({
        getCryptosNews:builder.query({
            query:({ newsCategory, count })=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});

export const {useGetCryptosNewsQuery} = cryptoNewsApi;





















// const options = {
//     method: 'GET',
//     url: 'https://bing-news-search1.p.rapidapi.com/news',
//     params: {safeSearch: 'Off', textFormat: 'Raw'},
//     headers: {
//       'X-BingApis-SDK': 'true',
//       'X-RapidAPI-Key': '7d0137058dmsh59b5f634f61a489p113a43jsn4529b3ea8de7',
//       'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//     }
//   };
  