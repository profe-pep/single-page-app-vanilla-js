import AbstractView from '../../lib/View/AbstractView.js'
import AppLayout from '../layout/AppLayout.js'
import { u } from '../../lib/Helpers.js'
import ItemModel from '../../models/ItemModel.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle('Items')
    this.setLayout(AppLayout, 'app-content')
  }

  async getHtml() {
    // Data
    const items = await ItemModel.all()
    // Template
    return `
      <h1>Items</h1>
      <ul>` +
        items.map(element => {
          return `
            <li>
              <a href="${u('/items/' + element.id)}" data-link>#${element.id} ${element.nom}</a>
            </li>`
        }).join('') +
      `</ul>`
  }
}
