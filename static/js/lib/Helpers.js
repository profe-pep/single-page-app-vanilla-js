import config from '../config.js'

export function u(url) {
  return `/${config.BASEPATH}${url}`
}

export function randomHexColor(prefix = false) {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return (prefix ? '#' : '') + n.slice(0, 6);
};

export function randomImageUrl(size, color = null) {
  return `https://via.placeholder.com/${size}/${color ? color : this.randomHexColor()}`
};