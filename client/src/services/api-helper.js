import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export const getAllGames = async () => {
  const resp = await api.get('/games')
  return resp.data
}
export const getOneGame = async (gameId) => {
  const resp = await api.get(`/games/${gameId}`)
  return resp.data
}
export const getUserGames = async (userId) => {
  const resp = await api.get(`/users/${userId}/games`)
  return resp.data
}
export const getUserGame = async (userId, gameId) => {
  const resp = await api.get(`/users/${userId}/games/${gameId}`)
  return resp.data
}
export const postGame = async (userId, gameData) => {
  const resp = await api.post(`/users/${userId}/games`, gameData)
  return resp.data
}
export const putGame = async (userId, gameId, gameData) => {
  const resp = await api.put(`/users/${userId}/games/${gameId}`, gameData)
  return resp.data
}
export const deleteGame = async (userId, gameId) => {
  const resp = await api.delete(`/users/${userId}/games/${gameId}`)
  return resp.data
}
export const postReview = async (userId, gameId, reviewData) => {
  const resp = await api.post(`/users/${userId}/games/${gameId}/reviews`, reviewData)
  return resp.data
}
export const putReview = async (userId, gameId, reviewId, reviewData) => {
  const resp = await api.put(`/users/${userId}/games/${gameId}/review/${reviewId}`, reviewData)
  return resp.data
}
export const deleteReview = async (userId, gameId, reviewId) => {
  const resp = await api.delete(`/users/${userId}/games/${gameId}/review/${reviewId}`)
  return resp.data
}