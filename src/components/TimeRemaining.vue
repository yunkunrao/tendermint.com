<template>
  <div class="ni-time-remaining" v-if="fuzzy === true">
    is starting soon
  </div>
  <div class="ni-time-remaining" :title="date" v-else-if="days > 1">
    {{ label }} {{ days }} days
  </div>
  <div class="ni-time-remaining" :title="date" v-else-if="hours > 1">
    {{ label }} {{ hours }} hours
  </div>
  <div class="ni-time-remaining" :title="date" v-else-if="minutes > 1">
    {{ label }} {{ minutes }} minutes
  </div>
  <div class="ni-time-remaining" :title="date" v-else-if="seconds > 1">
    {{ label }} {{ seconds }} seconds
  </div>
  <div class="ni-time-remaining" :title="date" v-else>
    has ended
  </div>
</template>

<script>
export default {
  name: 'ni-time-remaining',
  computed: {
    label () {
      if (this.started) return 'is live for'
      else return 'will begin in'
    },
    usableDate () {
      return Math.trunc(Date.parse(this.date) / 1000)
    },
    seconds () {
      return (this.usableDate - this.now) % 60
    },
    minutes () {
      return Math.trunc((this.usableDate - this.now) / 60) % 60
    },
    hours () {
      return Math.trunc((this.usableDate - this.now) / 60 / 60) % 24
    },
    days () {
      return Math.trunc((this.usableDate - this.now) / 60 / 60 / 24)
    }
  },
  data () {
    return {
      now: Math.trunc((new Date()).getTime() / 1000)
    }
  },
  mounted () {
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000)
    }, 1000)
  },
  props: ['date', 'fuzzy', 'started']
}
</script>
