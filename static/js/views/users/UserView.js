import AbstractView from '../../lib/View/AbstractView.js'
import AppLayout from '../layout/AppLayout.js'
import { AlbumService, UserService } from '../../services/MemoryServices.js'
import AlbumList from '../albums/AlbumList.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.userId = params.id
    this.setTitle('Profile')
    this.setLayout(AppLayout, 'app-content')
    this.addComponent('#user-albums', new AlbumList({ 'userId': this.userId }))
  }

  async getHtml() {
    const user = await UserService.read(this.userId)
    // Template
    return `
      <h1>${user.username} profile</h1>
      <p>${user.name}</p>
      <p>${user.email}</p>
      <p>${user.website}</p>
      <div id="user-albums"></div>
    `
  }
}
