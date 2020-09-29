const regex = {
  'text': /^[a-zA-Z ]{2,30}$/,
  'number': /^[0-9]*$/,
  // eslint-disable-next-line
  'phone': /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
  // eslint-disable-next-line
  'email': /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
}

export const validate = (type, value) => {
  return regex[type].test(value)
}