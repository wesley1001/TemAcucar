import React from 'react-native'
import moment from 'moment'
import Colors from "../Colors"
import Sentence from "./Sentence"

moment.locale('pt-br', {
  relativeTime : {
    future: "Em %s",
    past:   "Há %s",
    s:  "segundos",
    m:  "um minuto",
    mm: "%d minutos",
    h:  "uma hora",
    hh: "%d horas",
    d:  "um dia",
    dd: "%d dias",
    M:  "um mês",
    MM: "%d meses",
    y:  "um ano",
    yy: "%d anos",
  }
})

export default TimeAgo = ({ time, style, lowerCase }) => (
  <Sentence style={[{
    fontSize: 9,
  }, style]}>
    { lowerCase ? moment(time).fromNow().toLowerCase() : moment(time).fromNow() }
  </Sentence>
)
