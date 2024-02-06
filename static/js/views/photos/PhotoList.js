import AbstractView from '../../lib/View/AbstractView.js'
import AppLayout from '../layout/AppLayout.js'
import { u } from '../../lib/Helpers.js'
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
      const obj = Object.fromEntries(data.entries())
      console.log(obj)
      PhotoService.create(obj)
      view.refresh()
    });
  }

  async getHtml() {
    // Data
    const photos = await PhotoService.list(this.params)
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
      (this.showForm ? `
        <h2>Create photo</h2>
        <form id="item-form" action="#">
          <input class="input" type="text" name="nom" placeholder="Item name" required />
          <input class="input" type="text" name="unitats" placeholder="Item units" required />
          <select class="input" name="store_id">` +
            albums.map(element => {
              return `<option value="${element.id}">${element.title}</option>`
            }).join('') + `
          </select>
          <button class="button" type="submit">Send</button>
        <form>` : ``)
  }
}
