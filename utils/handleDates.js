const dayjs = require('dayjs').default
const weekday = require('dayjs/plugin/weekday').default

dayjs.extend(weekday)

export function formatDate(date, dateFormat = 'YYYYMMDD') {
  return dayjs(date).format(dateFormat)
}

const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
export function getWeekday(date) {
  const index = dayjs(date).weekday()
  return weekdays[index]
}

export function addDays(date, days = 1) {
  const day = dayjs(date).add(days, 'day')
  return new Date(day.toDate())
}

export function subDays(date, days = 1) {
  const day = dayjs(date).subtract(days, 'day')
  return new Date(day.toDate())
}

export function getYearRange() {
  const minDate = dayjs().subtract(6, 'month').date(1)
  const maxDate = dayjs().add(7, 'month').date(1).subtract(1, 'day')
  return {
    minDate: minDate.toDate().getTime(),
    maxDate: maxDate.toDate().getTime()
  }
}
