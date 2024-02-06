import AbstractView from '../../lib/View/AbstractView.js'
import { randomImageUrl, randomHexColor } from '../../lib/Helpers.js'
import { router } from '../../index.js'
import PhotoService from '../../services/Memory/PhotoService.js'
import AlbumService from '../../services/Memory/AlbumService.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle('Photo form')
  }
  
  addEvents() {
    const view = this
    document.querySelector('#item-form').addEventListener("submit", function (e) {
      e.preventDefault()
      const data = new FormData(e.target);
      const photo = Object.fromEntries(data.entries())
      console.log(photo)
      if (photo.id) {
        // Update
        PhotoService.update(photo)
      } else {
        // Create
        let color = randomHexColor()
        photo['url'] = randomImageUrl(600, color)
        photo['thumbnailUrl'] = randomImageUrl(150, color)
        PhotoService.create(photo)
      }
      router.refresh()
    });
  }

  async getHtml() {
    // Data
    const albums = await AlbumService.list()
    const photo = this.params.id 
      ? await PhotoService.list(this.params.id) 
      : PhotoService.factory()

    // Template
    return `
      <form id="item-form" action="#">` +
      (photo.id
        ? `<input type="hidden" name="id" value="${photo.id}" required />`
        : ``) + 
        `<input type="text" class="input" name="title" value="${photo.title}" required />` +
      (this.params.albumId 
        ? `
          <input type="hidden" name="albumId" value="${this.params.albumId }" required />
        `
        : `
          <select class="input" name="albumId">` +
          albums.map(element => {
            return `
              <option value="${element.id}" ${element.id==photo.albumId ? 'selected' : ''}>
                Album #${element.id} '${element.title}'
              </option>`
          }).join('') + `
          </select>`) +
        `<button class="button" type="submit">Send</button>
      <form>
    `
  }
}
