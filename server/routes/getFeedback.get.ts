import { genUrl } from "../utils";

export default defineEventHandler(async event => {
  const { limit, pageNo } = getQuery(event);


  try {
    const url = genUrl('/get_feedback');
    const res = $fetch(url, {
      method: 'GET',
      params: {
        limit,
        pageNo
      }
    })
  } catch (error) {
    return 
  }

})
