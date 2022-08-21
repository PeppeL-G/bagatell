# @bagatell/editor
Contains a Vue component functioning as a GUI editor for a Bagatell app.

## Publish instructions
To publish a new version of this npm package:

1. `cd editor`
2. `code package.json`
3. Update `"@bagatell/core": "^X.Y.Z"` if needed
4. Update `"@bagatell/web-components": "^X.Y.Z"` if needed
5. Update `"version": "X.Y.Z"`
6. Save
7. `npm install`
8. `npm run build`
9. `npm publish --access public`