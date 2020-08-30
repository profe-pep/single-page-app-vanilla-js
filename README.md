# Vanillin
> Simple-Page App built with Node.js and no dependencies


## About

This app works with HTML, CSS and plain JS.

There are no dependencies.

There is no build step. Just static assets - [index.html](/index.html) and the [static](/static/) directory.

The site is served as static assets on GitHub Pages. Unfortunately on GH Pages you have to serve from the project root or `docs`, otherwise this app would have been added to a folder like `public` or `frontend`.


## Usage
> How to run locally

Clone this repo or your fork of it.

Start a local dev server in the repo root. See [gist](https://gist.github.com/MichaelCurrin/1a6116a4e0918c8468dc7e1a701a5f95) for ideas.

Open the browser at your localhost URL without a subpath. e.g.

- https://localhost:5500

And then click the Dashboard button to get to:

- http://localhost:8000/single-page-app-vanilla-js/

Note you can't skip straight to the second URL because of how this app's routing works when setup to run for GH Pages.


## Deploy

Just copy this project as fork and deploy to GH Pages using your repo's Settings. There is no build step needed and so no GH Actions workflow.


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
