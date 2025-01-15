import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza01', amount: 32 },
    { product: 'Pizza02', amount: 28 },
    { product: 'Pizza03', amount: 22 },
    { product: 'Pizza04', amount: 17 },
    { product: 'Pizza05', amount: 15 },
  ])
})
