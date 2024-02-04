import MemoryService from '../lib/Service/MemoryService.js'

export default class extends MemoryService {

  static collection = 
    [
      {
        "id": 1,
        "nom": "Bike",
        "store_id": 1,
        "unitats": 888
      },
      {
        "id": 2,
        "nom": "Skate",
        "store_id": 1,
        "unitats": 296
      },
      {
        "id": 3,
        "nom": "Surfskate",
        "store_id": 1,
        "unitats": 343
      },
      {
        "id": 4,
        "nom": "Banana",
        "store_id": 2,
        "unitats": 15
      },
      {
        "id": 5,
        "nom": "Orange",
        "store_id": 2,
        "unitats": 168
      },
      {
        "id": 6,
        "nom": "Apple",
        "store_id": 2,
        "unitats": 214
      },
      {
        "id": 7,
        "nom": "Bacon",
        "store_id": 3,
        "unitats": 589
      },
      {
        "id": 8,
        "nom": "Chicken",
        "store_id": 3,
        "unitats": 250
      },
      {
        "id": 9,
        "nom": "Sausage",
        "store_id": 3,
        "unitats": 538
      }
    ]

  static increment = 9
}
