import Layout from '../../lib/View/AbstractLayout.js'
import Header from './Header.js'
import Footer from './Footer.js'

export default class extends Layout {
  constructor(root) {
    super(root)
    // Header
    let header = this.createSection('header', {
      'id': 'app-header',
      'class': 'header'
    })
    this.addSection(header.id, header)
    this.addViewToSection(new Header(), header.id)
    // Dynamic content
    let content = this.createSection('div', {
      'id': 'app-content',
      'class': 'content'
    })
    this.addSection(content.id, content)
    // Footer
    let footer = this.createSection('footer', {
      'id': 'app-footer',
      'class': 'footer'
    })
    this.addSection(footer.id, footer)
    this.addViewToSection(new Footer(), footer.id)
  }
}