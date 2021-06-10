import { queryCache } from 'react-query'
const apiURL = process.env.REACT_APP_GITHUB_API_URL

async function client(
  endpoint,
  { data, token, headers: customHeaders, ...customConfig } = {}
) {
  const config = {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.github.v3+json',
      ...customHeaders,
    },
    ...customConfig,
  }

  return window
    .fetch(`${apiURL}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        queryCache.clear()
        // refresh the page for them
        window.location.assign(window.location)
        return Promise.reject({ message: 'Please reload.' })
      }
      const data = await response.json()
      if (response.ok) {
        return data
      } else {
        return Promise.reject(data)
      }
    })
}

export { client }
