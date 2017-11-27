module.exports = {
  parseFormData: (data) => {
    return (data.postCode && data.hours && data.date && data || undefined)
  }
}
