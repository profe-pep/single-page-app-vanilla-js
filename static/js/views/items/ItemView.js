import AbstractView from '../../lib/View/AbstractView.js'
import AppLayout from '../layout/AppLayout.js'
import ItemService from '../../services/ItemService.js'
import StoreService from '../../services/StoreService.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.itemId = params.id
    this.setTitle('Store')
    this.setLayout(AppLayout, 'app-content')
  }

  async getHtml() {
    const item = await ItemService.read(this.itemId)
    const store = await StoreService.read(item.store_id)
    // Template
    return `
      <h1>Item #${item.id}</h1>
      <h2>${item.nom}</h2>
      <h3>${store.nom}</h3>
      <p>${item.unitats} u</p>
    `
  }
}
