import { useQuery } from 'react-query'
import { client } from './github-api-client'
const username = process.env.REACT_APP_GITHUB_USERNAME

const useUser = (u = username) =>
  useQuery({
    queryKey: ['user', username],
    queryFn: () => client(`users/${username}`),
  })

const useRepos = (u = username) =>
  useQuery({
    queryKey: ['userRepos', username],
    queryFn: () => client(`users/${username}/repos`),
  })

export { useUser, useRepos }
