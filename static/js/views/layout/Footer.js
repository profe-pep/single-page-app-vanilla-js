import AbstractView from '../../lib/AbstractView.js'
import { u } from '../../lib/Helpers.js'

export default class extends AbstractView {
  constructor(params) {
    super(params)
  }
  
  async getHtml() {
    return `
      <footer id="app-footer" class="footer">
        <p>Problemes, suggeriments? Ves al nostre <a href="${u('/contact')}">formulari de contacte</a>.</p>
      </footer>
    `
  }
}
