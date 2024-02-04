import AbstractView from '../../lib/View/AbstractView.js'
import AppLayout from '../layout/AppLayout.js'
import ItemModel from '../../models/ItemModel.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.itemId = params.id
    this.setTitle('Store')
    this.setLayout(AppLayout, 'app-content')
  }

  async getHtml() {
    const item = await ItemModel.get(this.itemId)
    // Template
    return `
      <h1>Item #${item.id}</h1>
      <h2>${item.nom}</h2>
      <h3>${item.store.nom}</h3>
      <p>${item.unitats} u</p>
    `
  }
}
