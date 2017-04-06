import config from './config'
import moment from 'moment-timezone'

const state = {
  started: false,
  ended: false,
  startDate: '',
  endDate: '',
  pdtStartDate: '',
  localStartDate: ''
}

const mutations = {
  refreshTimers (state) {
    if (Date.now() >= moment(state.startDate).valueOf()) {
      state.started = true
      let utcEndDate = moment.utc(config.state.START_DATETIME)
        .add(config.state.ENDS_AFTER, 'days').valueOf()
      state.endDate = moment(utcEndDate).local()
    }
    if (Date.now() >= moment(state.endDate).valueOf()) {
      state.ended = true
    }
  },
  calcStartDate (state) {
    state.startDate = moment(moment.utc(config.state.START_DATETIME)).local()
  },
  calcEndDate (state) {
    if (Date.now() >= moment(state.startDate).valueOf()) {
      state.started = true
    }

    if (state.started) {
      let utcEndDate = moment.utc(config.state.START_DATETIME)
        .add(config.state.ENDS_AFTER, 'days').valueOf()
      state.endDate = moment(utcEndDate).local()
    } else {
      state.endDate = state.startDate
    }
  },
  calcPdtStartDate (state) {
    let utc = moment.utc(config.state.START_DATETIME)
    let pdt = moment(utc).tz(config.state.TIMEZONE)
    state.pdtStartDate = pdt.format('LLL z')
  },
  calcLocalStartDate (state) {
    let utc = moment.utc(config.state.START_DATETIME)
    let local = moment(utc).local()
    state.localStartDate = moment(local).format('LLL z')
  }
}

export default {
  state,
  mutations
}
