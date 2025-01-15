import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-dailly-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '09/01/2025', receipt: 1561 },
    { date: '10/01/2025', receipt: 1061 },
    { date: '11/01/2025', receipt: 2342 },
    { date: '12/01/2025', receipt: 1546 },
    { date: '13/01/2025', receipt: 3551 },
    { date: '14/01/2025', receipt: 1560 },
    { date: '15/01/2025', receipt: 970 },
  ])
})
