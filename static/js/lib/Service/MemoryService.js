import AbstractService from './AbstractService.js'

export default class extends AbstractService {

  static collection = []
  static increment = 0
  
  static async list() {
    return this.collection
  }

  static async create(data) {
    this.increment += 1
    data.id = this.increment
    this.collection.push(data)
    return data
  }

  static async read(id) {
    for (let i = 0; i < this.collection.length; i++) {
      let element = this.collection[i];
      if (element.id == id) {
        return element
      }
    }
    return null
  }

  static async update(id, data) {
    for (let i = 0; i < this.collection.length; i++) {
      let element = this.collection[i];
      if (element.id == id) {
        this.collection[i] = data
        return data
      }
    }
    return null
  }

  static async delete(id) {
    for (let i = 0; i < this.collection.length; i++) {
      let element = this.collection[i];
      if (element.id == id) {
        delete collection[i]
        return true
      }
    }
    return false
  }

}
