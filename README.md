# Philips Hue App

Control your Philips Hue bridge from your browser

# Development

Your development environment requires:

 - node version 14 or up
 - yarn version 1.22 or up
 
**(Required)** Authenticate with npm:

1. Create a [personal access token](https://github.com/settings/tokens) with the `repo` and `read:packages` scopes.

2. Run:
   ```bash
   npm login --registry=https://npm.pkg.github.com --scope=@superscreenpi
   ```

Update dependencies: `yarn install`

Format code: `yarn clean`
