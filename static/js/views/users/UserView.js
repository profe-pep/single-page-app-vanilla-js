import AbstractView from '../../lib/View/AbstractView.js'
import AppLayout from '../layout/AppLayout.js'
import UserService from '../../services/Memory/UserService.js'
import AlbumService from '../../services/Memory/AlbumService.js'
import AlbumList from '../albums/AlbumList.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.userId = params.id
    this.setTitle('Profile')
    this.setLayout(AppLayout, 'app-content')
  }
  
  async getHtml() {
    const user = await UserService.read(this.userId)
    const albumListView = new AlbumList({ 'userId': this.userId })
    const albumsHTML = await albumListView.getHtml()
    // Template
    return `
      <h1>${user.username} profile</h1>
      <p>${user.name}</p>
      <p>${user.email}</p>
      <p>${user.website}</p>
      ${albumsHTML}
    `
  }
}
