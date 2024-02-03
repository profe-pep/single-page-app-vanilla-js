import AbstractView from '../../lib/AbstractView.js'
import { u } from '../../lib/Helpers.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
  }
  
  async getHtml() {
    return `
      <header id="app-header" class="header">
        <nav class="nav">
            <a href="${u('/')}"
                class="nav__link" data-link>
                Home
            </a>
            <a href="${u('/posts')}"
                class="nav__link" data-link>
                Posts
            </a>
            <a href="${u('/contact')}"
                class="nav__link" data-link>
                Settings
            </a>
        </nav>
      </header>
    `   
  }
}
