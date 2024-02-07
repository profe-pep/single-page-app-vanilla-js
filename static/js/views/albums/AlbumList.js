import AbstractView from '../../lib/View/AbstractView.js'
import AppLayout from '../layout/AppLayout.js'
import { u } from '../../lib/Helpers.js'
import { AlbumService } from '../../services/MemoryServices.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle('Albums')
    this.setLayout(AppLayout, 'app-content')
  }

  async getHtml() {
    // Data
    const albums = await AlbumService.list(this.params)
    // Template
    return `
      <h1>Albums</h1>
      <ul>` +
        albums.map(element => {
          return `
            <li>
              <a href="${u('/albums/' + element.id)}" data-link>#${element.id} ${element.title}</a>
            </li>`
        }).join('') +
      `</ul>`
  }
}
