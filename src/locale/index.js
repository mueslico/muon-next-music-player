/* eslint-disable camelcase */
import LOCALE from '../config/locale'
import en_US from './en_US'
import zh_CN from './zh_CN'
import ko_KR from './ko_KR'

const locale = {
  [LOCALE.en_US]: en_US,
  [LOCALE.zh_CN]: zh_CN,
  [LOCALE.ko_KR]: ko_KR,
}

export default locale
