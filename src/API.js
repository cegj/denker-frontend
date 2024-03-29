export const API_URL = 'https://#'
export const API_USER_IMAGE_URL = 'https://#/public/imgs/user/'
export const API_DENKE_IMAGE_URL = 'https://#/public/imgs/denke/'

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

export function USER_SEARCH(query){
  return {
    url: `${API_URL}/user/search?q=${query}`,
    options: {
      method: 'GET',
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


export function GET_DENKE_LIKES(id){
  return {
    url: `${API_URL}/like/denke/${id}`,
    options: {
      method: 'GET'
    }
  }
}

export function POST_LIKE(id, token){
  return {
    url: `${API_URL}/like/${id}`,
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  }
}

export function DELETE_LIKE(id, token){
  return {
    url: `${API_URL}/like/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  }
}

export function GET_FOLLOWINGS(id){
  return {
    url: `${API_URL}/follow/followings/${id}`,
    options: {
      method: 'GET'
    }
  }
}

export function GET_FOLLOWERS(id){
  return {
    url: `${API_URL}/follow/followers/${id}`,
    options: {
      method: 'GET'
    }
  }
}

export function POST_FOLLOW(id, token){
  return {
    url: `${API_URL}/follow/${id}`,
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  }
}

export function DELETE_FOLLOW(id, token){
  return {
    url: `${API_URL}/follow/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  }
}

export function DELETE_DENKE(id, token){
  return {
    url: `${API_URL}/denke/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  }
}