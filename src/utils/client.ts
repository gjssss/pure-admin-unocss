import type { paths } from '../../types/schema'
import createClient from 'openapi-fetch'

export const client = createClient<paths>({ baseUrl: 'admin' })
