import MemoryService from '../lib/Service/MemoryService.js'

export default class extends MemoryService {

  static collection = 
    [
      {
        "id": 1,
        "nom": "Mercadona"
      },
      {
        "id": 2,
        "nom": "Lidl"
      },
      {
        "id": 3,
        "nom": "Aldi"
      },
      {
        "id": 4,
        "nom": "Condis"
      }
    ]

  static increment = 4
}
