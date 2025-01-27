export default class {
  constructor() {
    this.sections = {}
  }

  createSection(tag = 'div', attributes = {}) {
    let element = document.createElement(tag)
    for (const attr in attributes) {
      if (attr == 'class') {
        element.className = attributes[attr]
      } else {
        element.setAttribute(attr, attributes[attr])
      }
    }
    return element
  }

  addSection(selector, parent = null) {
    if (!this.sections[selector]) {
      this.sections[selector] = {
        parent: parent,
        childs: []
      }
    } else {
      throw 'Section already added'
    }
  }

  addViewToSection(view, selector) {
    if (this.sections[selector]) {
      this.sections[selector].childs.push(view)
    } else {
      throw 'Section does not exists'
    }
  }

  addEvents() {
    for (let s in this.sections) {
      for (let v = 0; v < this.sections[s].childs.length; v++) {
        this.sections[s].childs[v].addEvents()
      }
    }
  }

  async getHtml() {
    let html = ''
    for (let s in this.sections) {
      let parent = this.sections[s].parent
      // Render section start tag
      if (parent) {
        var str = parent.outerHTML
        html += str.substr(0, str.indexOf('>') + 1)
      }
      // Render section views
      for (let v = 0; v < this.sections[s].childs.length; v++) {
        html += await this.sections[s].childs[v].getHtml()
      }
      // Render section end tag
      if (parent) {
        html += `</${parent.tagName}>`
      }
    }
    return html
  }
}
