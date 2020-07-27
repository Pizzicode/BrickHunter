module.exports = {
  pages: {
    popup: {
      template: 'public/browser-extension.html',
      entry: './src/popup/main.js',
      title: 'Popup'
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/background.js'
        }
      }
    },
    manifestTransformer: (manifest) => {
      if (process.env.BROWSER === 'chrome') {
        manifest.permissions.push('pageCapture')
      }
      return manifest
    }
  }
}