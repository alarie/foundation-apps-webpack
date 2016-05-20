# foundation-apps-webpack

Pretty shameless copy of [gowravshekar/font-awesome-webpack](https://github.com/gowravshekar/font-awesome-webpack).



## Usage

1. Define loaders as described in the link above
2. Import it in your JS code:

```
// loads complete foundation-apps styles
@import 'foundation-apps-webpack'

// loads your custom configuration
@import 'foundation-apps-webpack!./path/to/foundation-apps.config.js'

// or as entry point in your webpack config:
module.exports = {
  entry: [
    "foundation-apps-webpack!./path/to/foundation-apps.config.js",
    "your-existing-entry-point"
  ]
};
```

**Note**: If you provide your own config via the `!./path/to/foundation-apps.config.js` option, you **HAVE** to also create a 
`foundation-apps.config.scss` file at the same location. The file may remain empty, or you can override foundation app variables in there.

## Configuration

See the `foundation-apps.config.js` file for possible configurations.
