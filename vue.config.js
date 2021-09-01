module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "Attention Pleeeease!!",
        appId: "com.uucyan.attention-pleeeease",
        copyright: "Copyright © 2021 uucyan",
        mac: {
          icon: 'src/assets/app.icns',
          target: 'dmg',
        },
        win: {
          icon: 'src/assets/app.ico',
          target: [
            {
              target: 'zip',
              arch: ['x64'],
            }
          ]
        }
      }
    }
  }
}
