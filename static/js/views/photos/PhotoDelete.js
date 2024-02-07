import AbstractView from '../../lib/View/AbstractView.js'
import AppLayout from '../layout/AppLayout.js'
import { PhotoService } from '../../services/MemoryServices.js'
import { router } from '../../index.js'
import { u } from '../../lib/Helpers.js'

export default class extends AbstractView {
  constructor(params, showForm = true) {
    super(params)
    this.setTitle('Delete photo')
    this.setLayout(AppLayout, 'app-content')
  }

  addEvents() {
    document.querySelector('#delete-photo-form').addEventListener("submit", function (e) {
      e.preventDefault()
      const data = new FormData(e.target);
      const photo = Object.fromEntries(data.entries())
      console.log(photo)
      PhotoService.delete(photo.id)
      alert("Photo successfully deleted")
      console.log('Back to photos list')
      router.navigateTo(u('/photos'))
    });
    document.querySelector('#delete-photo-cancel').addEventListener("click", function (e) {
      e.preventDefault()
      console.log('Back to photos list')
      router.navigateTo(u('/photos'))
    })
  }

  async getHtml() {
    // Data
    const photo = await PhotoService.read(this.params.id)
    // Template
    return `
      <h1>Photo #${photo.id}</h1>
      <img src="${photo.url}" width="300px" height="300px" />
      <p>Are you sure you want to delete it?</p>
      <form id="delete-photo-form">
        <input type="hidden" name="id" value="${photo.id}" required />
        <button class="button button-danger" type="submit">Confirm</button>
        <button class="button button-cancel" type="reset" id="delete-photo-cancel">Cancel</button>
      </form>
      `
  }
}
