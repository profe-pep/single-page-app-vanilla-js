import ApiService from '../../lib/Service/ApiService.js'
import config from '../../config.js'

export default class extends ApiService {

  static urlEndpoint = config.API_URL_ENDPOINT
  static resource = 'users'
  
  static factory() {
    return {
      "id": 0,
      "name": "",
      "username": "",
      "email": "",
      "address": {
        "street": "",
        "suite": "",
        "city": "",
        "zipcode": "",
        "geo": {
          "lat": "",
          "lng": ""
        }
      },
      "phone": "",
      "website": "",
      "company": {
        "name": "",
        "catchPhrase": "",
        "bs": ""
      }
    }
  }
}