import AbstractView from '../../lib/View/AbstractView.js'
import AppLayout from '../layout/AppLayout.js'
import { u } from '../../lib/Helpers.js'
import { PhotoService } from '../../services/Services.js'
import PhotoForm from './PhotoForm.js'

export default class extends AbstractView {
  constructor(params, showForm = true) {
    super(params)
    this.setTitle('Photos')
    this.setLayout(AppLayout, 'app-content')
    this.addComponent('#create-photo-form', new PhotoForm(params))
    this.showForm = showForm
  }

  async getHtml() {
    // Data
    const photos = await PhotoService.list(this.params, 1, 100)
    // Template
    return `
      <h1>Photos</h1>
      <ul class="gallery">` +
        photos.map(element => {
          return `
            <li>
              <a href="${u('/photos/' + element.id + '/view')}" data-link>
                <img src="${element.thumbnailUrl}" title="${element.title}"/>
              </a>
            </li>`
        }).join('') + `
      </ul>` + 
      (this.showForm 
        ? `
        <h2>Create photo</h2>
        <div id="create-photo-form"></div>` 
        : ``)
  }
}
