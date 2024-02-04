import Layout from '../../lib/AbstractLayout.js'
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
    this.addSection('app-header', header)
    this.addViewToSection(new Header(), 'app-header')
    // Dynamic content
    let content = this.createSection('div', {
      'id': 'app-content',
      'class': 'content'
    })
    this.addSection('app-content', content)
    // Footer
    let footer = this.createSection('footer', {
      'id': 'app-footer',
      'class': 'footer'
    })
    this.addSection('app-footer', footer)
    this.addViewToSection(new Footer(), 'app-footer')
  }
}