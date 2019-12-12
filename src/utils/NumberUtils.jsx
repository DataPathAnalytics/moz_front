import Intl from 'intl'
import en_US from 'intl/locale-data/jsonp/en-US'
import _ from 'lodash'

export const parseNumber = (value) => {
  if (_.isString(value)) {
    const number = value.replace(/[^\d-\\.]/g, '')
    return _.isEmpty(number) ? null : _.toNumber(number)
  } else if (_.isNumber(value)) {
    return value
  }

  return null
}

export const parseCurrency = (value) => {
  return parseNumber(value)
}

export const prepareToFormat = (value) => {
  return _.isNumber(value) ? value : parseNumber(value)
}

export const toCurrencyFormat = (value, minFractionDigits = 0, maxFractionDigits = 2) => {
  let preparedValue = prepareToFormat(value)

  return Intl.NumberFormat(en_US, {
    minimumFractionDigits: minFractionDigits,
    maximumFractionDigits: maxFractionDigits,
  }).format(preparedValue)
}