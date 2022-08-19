export const API_URL = 'https://denkerapi.herokuapp.com'

export function POST_CREATE_USER(formData){
  return {
    url: `${API_URL}/user/create`,
    options: {
      method: 'POST',
      body: formData
    }
  }
}

export function POST_LOGIN(body){
  return {
    url: `${API_URL}/user/login`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }
  }
}

export function GET_USER(token){
  return {
    url: `${API_URL}/user`,
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  }
}