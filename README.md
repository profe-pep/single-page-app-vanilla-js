# Vanillin
> Simple-Page App built with Node.js and no dependencies

[![GitHub tag](https://img.shields.io/github/tag/MichaelCurrin/single-page-app-vanilla-js)](https://github.com/MichaelCurrin/single-page-app-vanilla-js/tags/?include_prereleases&sort=semver)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue)](#license)

<p align="center">

[![View site GH Pages](https://img.shields.io/badge/View_site-GH_Pages-green?style=for-the-badge)](https://michaelcurrin.github.io/single-page-app-vanilla-js/)

</p>

_Badges created with [Badge generator](https://michaelcurrin.github.io/badge-generator/badge-generator) tool._


## About

This app works with HTML, CSS and plain JS.

There are no dependencies.

The site is served as static site on [GitHub Pages](https://pages.github.com/).

There is no build step. Just static assets - [index.html](/index.html) and the [static](/static/) directory. Unfortunately, on GH Pages you have to serve from the project root or `docs`, otherwise this app would have been added to a folder like `public` or `frontend`.


## Usage
> How to run locally

Clone this repo or your fork of it.

Start a local dev server in the repo root. See [gist](https://gist.github.com/MichaelCurrin/1a6116a4e0918c8468dc7e1a701a5f95) for ideas.

Open the browser at your localhost URL without a subpath. e.g.

- https://localhost:5500

The pages are served under this subpath, but unfortunately you can't head here directly. Because of how this app's routing works when setup to run for GH Pages.

- http://localhost:8000/single-page-app-vanilla-js/



## Deploy

Just copy this project as fork and deploy to GH Pages using your repo's Settings. There is no build step needed and so no GH Actions workflow.

View the deployed site:

- https://michaelcurrin.github.io/single-page-app-vanilla-js/



## Limitations

There are some limitations. Like refreshing a page or inputting a valid path manually in the address bar will give a error result. So maybe sure to start off from the root page each time and you make a change to the app locally.

Also there is no hot-reloading.

The dev experience could be improved by using an NPM server that handles these features better, though it would not match the intended prod environment of a static site.

## Name

See [Vanillin - Wikipedia](https://en.wikipedia.org/wiki/Vanillin) page.

> It is the primary component of the extract of the vanilla bean


## License

Released under [MIT](/LICENSE).

Forked from [dcode-youtube/single-page-app-vanilla-js](https://github.com/dcode-youtube/single-page-app-vanilla-js) which is licensed under `ISC` (similar to MIT) according to `package.json`.
