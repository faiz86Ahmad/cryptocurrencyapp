import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const cryptoApiHeaders = {
    'X-RapidAPI-Key': '7d0137058dmsh59b5f634f61a489p113a43jsn4529b3ea8de7',  
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',

}


const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) =>({url,headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath:"cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=> createRequest(`/coins?limit=${count}`)
        }),
        getCryptosDetails:builder.query({
            query:(coinId)=> createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod}) => createRequest(`coin/${coinId}/history?timePeriod=${timePeriod}`),
            
          }),
        
    })
});

export const {useGetCryptosQuery,useGetCryptosDetailsQuery,useGetCryptoHistoryQuery} = cryptoApi;




