import Layout from '../../lib/AbstractLayout.js'
import Header from './Header.js'
import Footer from './Footer.js'

export default class extends Layout {
  constructor(root) {
    super(root)
    // Header
    this.addSection('app-header')
    this.addViewToSection(new Header(), 'app-header')
    // Dynamic content
    let content = this.createSection('div', {
      'id': 'app-content',
      'class': 'content'
    })
    this.addSection('app-content', content)
    // Footer
    this.addSection('app-footer')
    this.addViewToSection(new Footer(), 'app-footer')
  }
}