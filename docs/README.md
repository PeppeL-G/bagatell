# Docs
Contains a VuePress 2 app with documentation for how to use the Bagatell framework.

## Publish instructions
To publish a new version of this app to GitHub Pages:

1. `cd docs`
2. `code package.json`
3. Update `"@bagatell/core": "^X.Y.Z"` if needed
4. Update `"@bagatell/web-components": "^X.Y.Z"` if needed
4. Update `"@bagatell/editor": "^X.Y.Z"` if needed
6. Save
7. `npm install`
8. `npm run deploy`