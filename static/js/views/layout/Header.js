import AbstractView from '../../lib/View/AbstractView.js'
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
          <a href="${u('/albums')}"
              class="nav__link" data-link>
              Albums
          </a>
          <a href="${u('/photos')}"
              class="nav__link" data-link>
              Photos
          </a>
          <a href="${u('/contact')}"
              class="nav__link" data-link>
              Contact
          </a>
      </nav>
    `   
  }
}
