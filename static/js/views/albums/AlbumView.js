import AbstractView from '../../lib/View/AbstractView.js'
import AppLayout from '../layout/AppLayout.js'
import { u } from '../../lib/Helpers.js'
import { AlbumService, UserService } from '../../services/MemoryServices.js'
import PhotoList from '../photos/PhotoList.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.albumId = params.id
    this.setTitle('Album')
    this.setLayout(AppLayout, 'app-content')
    this.addComponent('#album-photos', new PhotoList({ 'albumId': this.albumId }))
  }

  async getHtml() {
    // Data
    const album = await AlbumService.read(this.albumId)
    const user = await UserService.read(album.userId)
    // Template
    return `
      <h1>Album #${album.id}</h1>
      <h2>${album.title}</h2>
      <p>Author <a href="${u('/users/' + user.id)}" data-link>${user.username}</a></p>
      <div id="album-photos"></div>
    ` 
  }
}
