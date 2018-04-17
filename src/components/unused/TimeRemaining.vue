<template>
  <div class="ni-time-remaining" v-if="fuzzy === true">
    is starting soon
  </div>
  <div class="ni-time-remaining" :title="date" v-else-if="countingDown">
    {{ label }} 
    <template v-if="days > 0">{{ days }}d</template>
    <template v-if="hours > 0">{{ hours }}h</template>
    <template v-if="minutes > 0">{{ minutes }}m</template>
    <template v-if="seconds > 0">{{ seconds }}s</template>
  </div>
  <div class="ni-time-remaining" :title="date" v-else>
    has ended
  </div>
</template>

<script>
export default {
  name: "ni-time-remaining",
  computed: {
    countingDown() {
      return (
        this.days > 0 || this.hours > 0 || this.minutes > 0 || this.seconds > 0
      )
    },
    label() {
      if (this.started) return "is live for"
      else return "will begin in"
    },
    usableDate() {
      return Math.trunc(Date.parse(this.date) / 1000)
    },
    seconds() {
      return (this.usableDate - this.now) % 60
    },
    minutes() {
      return Math.trunc((this.usableDate - this.now) / 60) % 60
    },
    hours() {
      return Math.trunc((this.usableDate - this.now) / 60 / 60) % 24
    },
    days() {
      return Math.trunc((this.usableDate - this.now) / 60 / 60 / 24)
    }
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000)
    }
  },
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000)
    }, 1000)
  },
  props: ["date", "fuzzy", "started"]
}
</script>
