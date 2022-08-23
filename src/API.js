export const API_URL = 'https://denkerapi.herokuapp.com'
export const API_USER_IMAGE_URL = 'https://denkerapi.herokuapp.com/public/imgs/user/'
export const API_DENKE_IMAGE_URL = 'https://denkerapi.herokuapp.com/public/imgs/denke/'

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

export function POST_DENKE(token, formData){
  return {
    url: `${API_URL}/denke/create`,
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token
      },
      body: formData
    }
  }
}

export function GET_DENKES(token){
  return {
    url: `${API_URL}/denke`,
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        cache: 'no-store'
      }
    }
  }
}

export function GET_USER_DENKES(id){
  return {
    url: `${API_URL}/denke/user/${id}`,
    options: {
      method: 'GET',
      headers: {
        cache: 'no-store'
      }
    }
  }
}

export function GET_USER_BY_ID(id){
  return {
    url: `${API_URL}/user/${id}`,
    options: {
      method: 'GET',
      headers: {
        cache: 'no-store'
      }
    }
  }
}

export function GET_DENKE(id){
  return {
    url: `${API_URL}/denke/${id}`,
    options: {
      method: 'GET',
      headers: {
        cache: 'no-store'
      }
    }
  }
}

export function GET_REPLIES(id){
  return {
    url: `${API_URL}/denke/replies/${id}`,
    options: {
      method: 'GET',
      headers: {
        cache: 'no-store'
      }
    }
  }
}