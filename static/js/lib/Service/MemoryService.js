import AbstractService from './AbstractService.js'

export default class extends AbstractService {

  static collection = []
  static increment = 0
  
  static async list(filters={}, page=1, pageSize=50) {
    // Filter
    const filteredCollection = this.collection.filter(function (item) {
      for (const attr in filters) {
        if (item[attr] != filters[attr])
          return false
      } 
      return true
    });
    // Pagination
    return filteredCollection.slice((page - 1) * pageSize, page * pageSize);
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
        for (const attr in data) {
          this.collection[i][attr] = data[attr]
        }
        return data
      }
    }
    return null
  }

  static async delete(id) {
    for (let i = 0; i < this.collection.length; i++) {
      let element = this.collection[i];
      if (element.id == id) {
        delete this.collection[i]
        return true
      }
    }
    return false
  }

}
