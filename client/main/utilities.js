import format from 'format-number'

export const toFormData = (data) => {
  const formData = {}

  for (let key in data) {
    const value = data[key]
    if (value === null) {
      formData[key] = ''
    } else {
      formData[key] = value.toString()
    }
  }
  return formData
}

export const parseToFloat = (value) => {
  return value ? parseFloat(value) : null
}

export const parseToInt = (value) => {
  return value ? parseInt(value) : null
}

export const formatToArray = (value) => {
  if (value instanceof Array) {
    return value
  }
  return []
}

export const formatCurrency = format({round: 2})
