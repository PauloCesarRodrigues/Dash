import { http, HttpResponse } from 'msw'

import { SigInBody } from '../sign-in'

export const signInMock = http.post<never, SigInBody>(
  '/authenticate',
  async ({ request }) => {
    const { email } = await request.json()

    if (email === 'johndoe@mock.com') {
      return new HttpResponse(null, {
        status: 200,
        headers: { 'Set-Cookie': 'auth=sample-jwt' },
      })
    }

    return new HttpResponse(null, { status: 401 })
  },
)
