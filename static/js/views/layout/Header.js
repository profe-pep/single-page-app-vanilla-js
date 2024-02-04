import AbstractView from '../../lib/AbstractView.js'
import { u } from '../../lib/Helpers.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
  }
  
  async getHtml() {
    return `
      <nav class="nav">
          <a href="${u('/')}"
              class="nav__link" data-link>
              Home
          </a>
          <a href="${u('/stores')}"
              class="nav__link" data-link>
              Stores
          </a>
          <a href="${u('/items')}"
              class="nav__link" data-link>
              Items
          </a>
          <a href="${u('/contact')}"
              class="nav__link" data-link>
              Contact
          </a>
      </nav>
    `   
  }
}
