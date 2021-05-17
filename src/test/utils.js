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
