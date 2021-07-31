import { baseURL } from '../env.js'

// @ts-ignore
// eslint-disable-next-line no-undef
export const api = axios.create({
  baseURL: baseURL,
  timeout: 8000,
  withCredentials: true
})
// @ts-ignore
// eslint-disable-next-line no-undef
export const giphyApi = axios.create({
  baseURL: 'api.giphy.com/v1/gifs/random',
  timeout: 8000
})

//  GqEyiW3wP1mPExti9eCOsuVfpdgOjSom
// giphyStories
