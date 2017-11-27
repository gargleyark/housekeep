module.exports = {
  parseFormData: (data) => {
    data.hours = data.hours && parseFloat(data.hours)
    data.date = data.yy && data.mm && data.dd && `${data.yy}-${data.mm}-${data.dd}`
    return (data.postCode && data.hours && data.date && data || undefined)
  },
  parseConfirmationData: (data) => {
    return (data.day && data.startTime && data.endTime && data.hours && data || undefined)
  },
  parseBookingData: (data) => {
    if (data.day && data.startTime && data.endTime && data.hours && data.id) {
      return {
        day: data.day,
        startTime: {
          start: decodeURIComponent(data.startTime),
          end: decodeURIComponent(data.endTime)
        },
        visitDuration: data.hours,
        propertyId: data.id
      }
    }
  }
}
