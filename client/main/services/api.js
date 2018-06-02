import * as api from '../configs/api'

const submit = async (method, path, data, contentType = 'application/json') => {
  const request = {
    method: method,
    credentials: 'include'
  }

  if (data) {
    if (contentType.indexOf('json') !== -1) {
      request.body = JSON.stringify(data)
      request.headers = {
        'Content-Type': contentType
      }
    }
    if (contentType.indexOf('form-data') !== -1) {
      let formData = new FormData()
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key])
      })
      request.body = formData
    }
  }
  const response = await fetch(api.SERVER + path, request)
  if (response.status === 204) {
    return
  }

  const responseJson = await response.json()

  if (responseJson.error) {
    const error = new Error('Server return error')
    error.response = responseJson
    throw error
  }

  return responseJson
}

export const getUserInfo = async () => {
  return submit('GET', api.PATH_USER)
}