<template>
<span class="countdown-string">{{ countdown }}</span>
</template>

<script>
import moment from 'moment'
import countdown from 'countdown'
import 'moment-countdown'

export default {
  data () {
    return {
      countdown: ''
    }
  },
  methods: {
    updateCountdown () {
      this.countdown = moment('2016-10-17').countdown(new Date(), countdown.MONTHS | countdown.DAYS).toString()
    }
  },
  ready () {
    this.updateCountdown()
    setInterval(() => this.updateCountdown(), 1000)
  }
}
</script>
