<template>
  <div id="viz-atom-split">
    <!--<div class="title">Genesis Day Atom Distribution</div>-->
    <div class="split">
      <span class="bar" v-bind:style="{ width: prefunders + '%' }"></span>
      <span class="key">Prefund: {{ prefunders }}%</span>
      <span class="atoms">{{ delimit(prefunders / 100 * atoms) }} atoms</span>
    </div>
    <div class="split">
      <span class="bar" v-bind:style="{ width: cosmos + '%' }"></span>
      <span class="key">Cosmos: ({{ cosmos }}%)</span>
      <span class="atoms">{{ delimit(cosmos / 100 * atoms) }} atoms</span>
    </div>
    <div class="split">
      <span class="bar" v-bind:style="{ width: crowdfunders + '%' }"></span>
      <span class="key">Crowdfund: ({{ crowdfunders }}%)</span>
      <span class="atoms">{{ delimit(crowdfunders / 100 * atoms) }} atoms</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      atoms: 20000000,
      prefunders: 5,
      cosmos: 20,
      crowdfunders: 75
    }
  },
  methods: {
    delimit (num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'

#viz-atom-split
  margin 1.5rem 0
  margin-left -1.5rem

  div
    margin-bottom 1rem
    padding 1rem

    position relative
    display flex
    background #fff
    justify-content center

    border 1px solid bc

    &.title
      font-weight 500

    .key, .atoms
      position relative
      z-index 10

    .key
      font-weight 400

    .atoms
      flex 1
      text-align right

    .bar
      position absolute
      top 0
      left 0
      bottom 0
      background bc

@media screen and (min-width: 768px)
  #viz-atom-split
    margin-left 0
</style>
