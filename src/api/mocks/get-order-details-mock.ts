import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@mock.com',
      phone: '11541515612',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'Pizza peperoni' },
        quantity: 3,
      },
      {
        id: 'order-item-2',
        priceInCents: 3000,
        product: { name: 'Pizza Mussarela' },
        quantity: 1,
      },
    ],
    totalInCents: 6000,
  })
})
