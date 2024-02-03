import config from '../config.js'

export function u(url) {
  return `/${config.BASEPATH}${url}`
}