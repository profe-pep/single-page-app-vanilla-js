import AbstractView from '../../lib/View/AbstractView.js'
import AppLayout from '../layout/AppLayout.js'
import { u } from '../../lib/Helpers.js'
import StoreService from '../../services/StoreService.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle('Stores')
    this.setLayout(AppLayout, 'app-content')
  }

  async getHtml() {
    // Data
    const stores = await StoreService.list()
    // Template
    return `
      <h1>Stores</h1>
      <ul>` +
        stores.map(element => {
          return `
            <li>
              <a href="${u('/stores/' + element.id)}" data-link>#${element.id} ${element.nom}</a>
            </li>`
        }).join('') +
      `</ul>`
  }
}
