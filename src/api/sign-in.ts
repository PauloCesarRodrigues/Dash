import { api } from '@/lib/axios'

export interface sigInBody {
  email: string
}

export async function signIn({ email }: sigInBody) {
  await api.post('/authenticate', { email })
}
