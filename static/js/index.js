import { u } from './lib/Helpers.js'
import createRouter from './lib/Router.js'

import Home from './views/Home.js'
import StoresList from './views/stores/StoresList.js'
import ItemsList from './views/items/ItemsList.js'
import Contact from './views/Contact.js'

const routes = [
  { path: u('/'), view: Home },
  { path: u('/stores'), view: StoresList },
  { path: u('/items'), view: ItemsList },
  { path: u('/contact'), view: Contact }
]

export const router = createRouter('#app', routes)