import AbstractView from '../../lib/View/AbstractView.js'
import AppLayout from '../layout/AppLayout.js'
import { u } from '../../lib/Helpers.js'
import ItemService from '../../services/ItemService.js'
import StoreService from '../../services/StoreService.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
    this.setTitle('Items')
    this.setLayout(AppLayout, 'app-content')
  }

  addEvents() {
    const view = this
    document.querySelector('#item-form').addEventListener("submit", function (e) {
      e.preventDefault()
      const data = new FormData(e.target);
      const obj = Object.fromEntries(data.entries())
      console.log(obj)
      ItemService.create(obj)
      view.refresh()
    });
  }

  async getHtml() {
    // Data
    const items = await ItemService.list()
    const stores = await StoreService.list()
    // Template
    return `
      <h1>Items</h1>
      <ul>` +
        items.map(element => {
          return `
            <li>
              <a href="${u('/items/' + element.id)}" data-link>#${element.id} ${element.nom}</a>
            </li>`
        }).join('') + `
      </ul>
      <h2>Create item</h2>
      <form id="item-form" action="#">
        <input class="input" type="text" name="nom" placeholder="Item name" required />
        <input class="input" type="text" name="unitats" placeholder="Item units" required />
        <select class="input" name="store_id">` +
          stores.map(element => {
            return `<option value="${element.id}">${element.nom}</option>`
          }).join('') + `
        </select>
        <button class="button" type="submit">Send</button>
      <form>
      `
  }
}
