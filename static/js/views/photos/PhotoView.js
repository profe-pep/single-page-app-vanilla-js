import AbstractView from '../../lib/View/AbstractView.js'
import AppLayout from '../layout/AppLayout.js'
import { u } from '../../lib/Helpers.js'
import { PhotoService, AlbumService } from '../../services/MemoryServices.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.photoId = params.id
    this.setTitle('Photo')
    this.setLayout(AppLayout, 'app-content')
  }

  async getHtml() {
    const photo = await PhotoService.read(this.photoId)
    const album = await AlbumService.read(photo.albumId)
    // Template
    return `
      <h1>Photo #${photo.id}</h1>
      <img src="${photo.url}" width="300px" height="300px" />
      <h2>${photo.title}</h2>
      <p>From album <a href="${u('/albums/' + album.id)}" data-link>${album.title}</a></p>
      <a class="button button" href="${u('/photos/' + photo.id + '/edit')}" data-link>Edit</a>
      <a class="button button-danger" href="${u('/photos/' + photo.id + '/delete')}" data-link>Delete</a>
    `
  }
}
