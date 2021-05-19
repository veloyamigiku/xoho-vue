export const fromStringStyleToObject = (stringStyle) => {
  if (stringStyle === undefined) {
    return
  }
  const stringStyleParts = stringStyle.split(';')
  var objectStyle = {}
  stringStyleParts.forEach(function (stringStylePart) {
    if (stringStylePart === '') {
      return
    }
    const stringPropValue = stringStylePart.split(':')
    objectStyle[stringPropValue[0].trim()] = stringPropValue[1].trim()
  })
  return objectStyle
}

export const fromHexColorToRGBColor = (hexColor) => {
  const rgb1 = hexColor.match(/^#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/)
  if (rgb1 && rgb1[1] && rgb1[2] && rgb1[3]) {
    const r = parseInt(rgb1[1], 16)
    const g = parseInt(rgb1[2], 16)
    const b = parseInt(rgb1[3], 16)
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
  }
  const rgb2 = hexColor.match(/^#([a-fA-F0-9]{1})([a-fA-F0-9]{1})([a-fA-F0-9]{1})/)
  if (rgb2 && rgb2[1] && rgb2[2] && rgb2[3]) {
    const r = parseInt(rgb2[1] + rgb2[1], 16)
    const g = parseInt(rgb2[2] + rgb2[2], 16)
    const b = parseInt(rgb2[3] + rgb2[3], 16)
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
  }
  return null
}
