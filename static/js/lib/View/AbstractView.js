export default class {
  constructor(params) {
    this.params = params
    this.components = {}
  }

  setTitle(title) {
    document.title = title
  }

  setLayout(layout, sectionId) {
    this.layout = new layout()
    this.layout.addViewToSection(this, sectionId)
  }

  addComponent(selector, view) {
    if (!this.components[selector]) {
      // View must not have layout!
      view.layout = false
      this.components[selector] = view
    } else {
      throw 'Component already added'
    }    
  }

  addEvents() {

  }

  async getHtml() {
    return ''
  }

  async render(root) {
    // Render view (with or without layout)
    let template = this.layout ? this.layout : this
    document.querySelector(root).innerHTML = await template.getHtml()
    // Render components
    for (const selector in this.components) {
      await this.components[selector].render(selector)
    }
    // Add events after render
    template.addEvents()
    // Save last root selector to allow view refresh
    this.root = root
  }

  async refresh() {
    await this.render(this.root)
  }
}