import AbstractService from './AbstractService.js'

export default class extends AbstractService {

  static urlEndpoint
  static resource
  
  static async list(filters = {}, page = 1, pageSize = 50) {
    const query = '?' + new URLSearchParams(filters).toString()
    const response = await fetch(`${this.urlEndpoint}/${this.resource}${query}`)
    const collection = await response.json()
    // Work-around when API has no pagination
    if (collection.length > pageSize) {
      return collection.slice((page - 1) * pageSize, page * pageSize);
    } else {
      return collection
    }
  }

  static async create(data) {
    const response = await fetch(`${this.urlEndpoint}/${this.resource}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    return await response.json()
  }

  static async read(id) {
    const response = await fetch(`${this.urlEndpoint}/${this.resource}/${id}`)
    return await response.json();
  }

  static async update(id, data) {
    const response = await fetch(`${this.urlEndpoint}/${this.resource}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    return await response.json()
  }

  static async delete(id) {
    const response = await fetch(`${this.urlEndpoint}/${this.resource}/${id}`, {
      method: 'DELETE',
    });
    return await response.json()
  }

}
