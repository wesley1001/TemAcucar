export function parseError(response) {
  const contentType = response.headers.get('content-type')
  if (contentType.match(/application\/json/)) {
    return JSON.parse(response._bodyText)
  } else {
    return {
      id: `${response.status}`,
      message: response._bodyText,
    }
  }
}
