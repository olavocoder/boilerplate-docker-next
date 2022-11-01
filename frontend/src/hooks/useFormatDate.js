const transformMonth = (value) => {
  let month = ''
  if (value === '01') month = 'Janeiro'
  if (value === '02') month = 'Fevereiro'
  if (value === '03') month = 'Março'
  if (value === '04') month = 'Abril'
  if (value === '05') month = 'Maio'
  if (value === '06') month = 'Junho'
  if (value === '07') month = 'Julho'
  if (value === '08') month = 'Agosto'
  if (value === '09') month = 'Setembro'
  if (value === '10') month = 'Outubro'
  if (value === '11') month = 'Novembro'
  if (value === '12') month = 'Dezembro'

  return month
}

const UseFormatDate = (value, type) => {
  if (!value) return null
  let dateNumber

  try {
    const clearDate = value.split([' '])
    dateNumber = new Date(clearDate[0]).toLocaleDateString('pt-BR')
  } catch (e) {
    console.warn(`Invalid date format ${value}`, e)
    return ''
  }

  const dateText = dateNumber.toString().split(['/'])
  const day = dateText[0] !== undefined ? dateText[0] : ''
  const month = dateText[1] !== undefined ? transformMonth(dateText[1]) : ''
  const year = dateText[2] !== undefined ? dateText[2] : ''

  if (type === 'mon yy') {
    const date = month.substring(0, 3) + ' ' + year.substring(2, 4)
    return date
  }

  if (type === 'month yy') {
    const date = month + ' ' + year.substring(2, 4)
    return date
  }

  if (type === 'month yyyy') {
    const date = month + ' ' + year
    return date
  }

  if (type === 'day mon yy') {
    const date = day + ' ' + month.substring(0, 2) + ' ' + year.substring(2, 4)
    return date
  }
}

export default UseFormatDate
