export default function (constants) {
  return {
    created: function () {
      for (const [key, value] of Object.entries(constants)) {
        this[key] = value
      }
    }
  }
}
