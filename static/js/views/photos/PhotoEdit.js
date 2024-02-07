import AbstractView from '../../lib/View/AbstractView.js'
import AppLayout from '../layout/AppLayout.js'
import { PhotoService } from '../../services/MemoryServices.js'
import PhotoForm from './PhotoForm.js'

export default class extends AbstractView {
  constructor(params, showForm = true) {
    super(params)
    this.setTitle('Edit photo')
    this.setLayout(AppLayout, 'app-content')
    this.addComponent('#edit-photo-form', new PhotoForm(params))
  }

  async getHtml() {
    // Data
    const photo = await PhotoService.read(this.params.id)
    // Template
    return `
      <h1>Photo #${photo.id}</h1>
      <img src="${photo.url}" width="300px" height="300px" />
      <h2>Edit photo</h2>
      <div id="edit-photo-form"></div>
      `
  }
}
