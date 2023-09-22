import { getTokenFromCookie } from '../utils'

export default defineEventHandler(event => {

  let token = getTokenFromCookie(event);


  if (!token) {
    return { redirect: '/login' }
  }
})
