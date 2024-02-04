import AbstractView from '../../lib/View/AbstractView.js'
import AppLayout from '../layout/AppLayout.js'
import StoreService from '../../services/StoreService.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.storeId = params.id
    this.setTitle('Store')
    this.setLayout(AppLayout, 'app-content')
  }

  async getHtml() {
    // Data
    const store = await StoreService.read(this.storeId)
    // Template
    return `
      <h1>Store #${store.id}</h1>
      <h2>${store.nom}</h2>
    `
  }
}
