# [McHacks 7](https://2020.mchacks.ca)

[![Netlify Status](https://api.netlify.com/api/v1/badges/29fc0619-7608-47de-8105-727d647ba4aa/deploy-status)](https://app.netlify.com/sites/mchacks7/deploys)

This repository contains the code behind the static site of McHacks 7.

## Setup

1. Make sure you have [node](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/lang/en/) installed.
2. Run `yarn global add gatsby-cli` to install Gatsby CLI locally.
3. Run `yarn` to install dependencies.
4. Run `gatsby develop` to start dev server! 🚀

## Scripts

**Start the development server:**

`yarn start` or `gatsby develop`

**Build the website:**

`yarn build` or `gatsby build`

**Start the production server:**

`yarn serve` or `gatsby serve`

**Format code:**

`yarn format`

## Contributing

> Want to contribute to the McHacks site?

See our [contributing guide](https://github.com/hackmcgill/mchacks7/blob/develop/docs/CONTRIBUTING.md).

## Deployment

We are using Netlify to compile and host our code. When a PR is created, Netlify builds the site and generates a deploy preview to confirm everything is working as expected. Once code is merged to `master` branch, Netlify will promote the code to production at `2020.mchacks.ca`. Netlify also handles the SSL certificate for this site.

### Domains

The primary domain for this site `mchacks.ca` is registered with the HackMcGill Namecheap and DNS is with Cloudflare. The secondary domain `mchacks.io` is registered with Cloudflare. `2020.mchacks.ca` and `2020.mchacks.io` have CNAME records pointing to `mchacks7.netlify.com`.
