import AbstractView from '../../lib/View/AbstractView.js'
import AppLayout from '../layout/AppLayout.js'
import { u, randomImageUrl, randomHexColor } from '../../lib/Helpers.js'
import PhotoService from '../../services/Memory/PhotoService.js'
import AlbumService from '../../services/Memory/AlbumService.js'

export default class extends AbstractView {
  constructor(params, showForm = true) {
    super(params)
    this.setTitle('Photos')
    this.setLayout(AppLayout, 'app-content')
    this.showForm = showForm
  }

  addEvents() {
    const view = this
    document.querySelector('#item-form').addEventListener("submit", function (e) {
      e.preventDefault()
      const data = new FormData(e.target);
      const photo = Object.fromEntries(data.entries())
      console.log(photo)
      let color = randomHexColor()
      photo['url'] = randomImageUrl(600, color)
      photo['thumbnailUrl'] = randomImageUrl(150, color)
      PhotoService.create(photo)
      view.refresh()
    });
  }

  async getHtml() {
    // Data
    const photos = await PhotoService.list(this.params, 1, 100)
    const albums = await AlbumService.list()
    // Template
    return `
      <h1>Photos</h1>
      <ul class="gallery">` +
        photos.map(element => {
          return `
            <li>
              <a href="${u('/photos/' + element.id)}" data-link><img src="${element.thumbnailUrl}" title="${element.title}"/></a>
            </li>`
        }).join('') + `
      </ul>` + 
      (this.showForm 
        ? `
        <h2>Create photo</h2>
        <form id="item-form" action="#">
          <input class="input" type="text" name="title" placeholder="Photo title" required />
        ` + 
        (this.params.albumId 
          ? `
            <input type="hidden" name="albumId" value="${this.params.albumId }" required />
          `
          : `
            <select class="input" name="albumId">` +
            albums.map(element => {
              return `<option value="${element.id}">Album #${element.id} '${element.title}'</option>`
            }).join('') + `
            </select>`) +
          `<button class="button" type="submit">Send</button>
        <form>` 
        : ``)
  }
}
