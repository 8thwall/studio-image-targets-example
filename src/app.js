const onxrloaded = () => {
  XR8.XrController.configure({
    imageTargetData: [
      require('../image-targets/22_Element_Air.json'),
      require('../image-targets/23_Element_Water.json'),
      require('../image-targets/25_Element_Earth.json'),
      require('../image-targets/bmo-bites.json'),
      require('../image-targets/toggle-slam.json'),
      require('../image-targets/waves.json'),
    ],
  })
}
window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)

