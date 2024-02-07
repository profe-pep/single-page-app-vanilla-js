# Photo gallery SPA
> Single-Page App (SPA)

[![GitHub tag](https://img.shields.io/github/tag/jmirinformatica/2daw-m12-p2-s4-examples)](hhttps://github.com/jmirinformatica/2daw-m12-p2-s4-examples/tags)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)

[![Hosted with GH Pages](https://img.shields.io/badge/Hosted_with-GitHub_Pages-blue?logo=github&logoColor=white)](https://pages.github.com/)

_Badges created with [Badge Generator](https://github.com/badges/shields)._

## Preview

[![View site GH Pages](https://img.shields.io/badge/View_site-GH_Pages-2ea44f?style=for-the-badge)](https://jmirinformatica.github.io/2daw-m12-p2-s4-examples/)

## About

Photo gallery SPA built with Vanilla JS and rebuilt with frameworks for learning purposes:

 * `master` developed with Vanilla JS and [GH Pages](https://pages.github.com/) support (forked from [michaelcurrin/single-page-app-vanilla-js](https://michaelcurrin.github.io/single-page-app-vanilla-js/))
 * [`a-vanillajs`](/jmirinformatica/2daw-m12-p2-s4-examples/tree/a-vanilla) extends `master` branch with [{JSON} Placeholder](https://jsonplaceholder.typicode.com/) free fake REST API services
 * [`b-alpinejs`](/jmirinformatica/2daw-m12-p2-s4-examples/tree/b-alpinejs) developed with [Alpine.js](https://alpinejs.dev/) microframework
 * [`c-preact`](/jmirinformatica/2daw-m12-p2-s4-examples/tree/c-preact) developed with [Preact](https://preactjs.com/) framework

## Vanillin fork

This repo is forked from [michaelcurrin/single-page-app-vanilla-js](https://michaelcurrin.github.io/single-page-app-vanilla-js/).

The `master` and `a-vanillajs` branches work with HTML, CSS and plain JS like original repo.

There are no dependencies. You don't even need Node.

The site is served as static site on [GitHub Pages](https://pages.github.com/). There is no build step. Just static assets - [index.html](/index.html) and the [static](/static/) directory. Unfortunately, on GH Pages you have to serve from the project root or `docs`, otherwise this app would have been added to a folder like `public` or `frontend`.

### Usage

> How to run locally

Clone this repo or your fork of it.

Start a local dev server in the repo root - see this [gist](https://gist.github.com/MichaelCurrin/1a6116a4e0918c8468dc7e1a701a5f95) for ideas.

For example: [![Live Server](https://img.shields.io/badge/VSC-Live_Server-blue?logo=visualstudiocode)](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

Open the browser at your localhost URL _without_ a subpath. e.g.

- https://localhost:5500

The pages are served under this subpath. But unfortunately you cannot go there directly, because of how this app's routing works, when set up to run for GH Pages as subpath. If you set up with Netlify then you don't need the subpath.

### Notes

#### Limitations

There are some limitations. 

Like refreshing a page or inputting a valid path manually in the address bar will give a error result. So maybe sure to start off from the root page each time and you make a change to the app locally. Some routing on a local static server (in SPA mode) or Netlify config can fix this.

There is no hot-reloading with a basic static server but some provide this option for you.

#### What's new?

The fork includes some changes and new features:

* The **configuration** has been moved to `config.js` file.
* There is a new **service layer** independent from **view layer**
* The original **library** (`lib.js` file) has been extended (see `lib` folder):

  * `Service\ApiService.js` integrates REST API services (used in `a-vanillajs` branch)
  * `Service\MemoryService.js` implements memory persistence (used in `master` branch)
  * `View\AbstractLayout.js` creates view layout with sections
  * `View\AbstractView.js` creates view with optional layout, components and events
  * `Helpers.js` includes link helper and more
  * `Router.js` includes router creation with `router`, `navigateTo` and `refresh` methods


## Alpine JS

TODO

## Preact

TODO

## License

`a-vanilla` branch is forked from [michaelcurrin/single-page-app-vanilla-js](https://michaelcurrin.github.io/single-page-app-vanilla-js/) which is licensed under [MIT](/LICENSE). 

Other branches mantain same license. 
