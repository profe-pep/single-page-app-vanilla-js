import { u } from './lib/Helpers.js'
import createRouter from './lib/Router.js'

import Home from './views/Home.js'
import AlbumList from './views/albums/AlbumList.js'
import AlbumView from './views/albums/AlbumView.js'
import PhotoList from './views/photos/PhotoList.js'
import PhotoView from './views/photos/PhotoView.js'
import PhotoEdit from './views/photos/PhotoEdit.js'
import PhotoDelete from './views/photos/PhotoDelete.js'
import UserView from './views/users/UserView.js'
import Contact from './views/Contact.js'

const routes = [
  { path: u('/'), view: Home },
  { path: u('/albums'), view: AlbumList },
  { path: u('/albums/:id'), view: AlbumView },
  { path: u('/photos'), view: PhotoList },
  { path: u('/photos/:id/view'), view: PhotoView },
  { path: u('/photos/:id/edit'), view: PhotoEdit },
  { path: u('/photos/:id/delete'), view: PhotoDelete },
  { path: u('/users/:id'), view: UserView },
  { path: u('/contact'), view: Contact }
]

export const router = createRouter('#app', routes)