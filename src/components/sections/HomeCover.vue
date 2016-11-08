<template>
  <section id="section-cover">
    <div class="section-container">
      <h1>Tendermint</h1>
      <p class="tagline">Blockchain Consensus</p>
      <p class="introduction">
        Byzantine fault-tolerant replicated state machines in any programming language
      </p>

      <install-tendermint></install-tendermint>

      <p class="source"><i class="fa fa-github"></i> View source on <a href="https://github.com/tendermint/tendermint">GitHub</a></p>

      <!--<connections></connections>-->

    </div><!--container-->
    <a id="home-arrow-down" @click="scrollDown"><i class="fa fa-angle-down"></i></a>
    <div id="scroll-down-here"></div>
  </section>
</template>

<script>
import $ from 'jquery'
import InstallTendermint from '../partials/InstallTendermint.vue'
import Connections from '../partials/Connections.vue'

export default {
  components: {
    InstallTendermint,
    Connections
  },
  methods: {
    scrollDown (event) {
      event.preventDefault()
      $('html, body').animate({
        scrollTop: $('#scroll-down-here').offset().top - 48
      }, 1000)
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../../styles/variables.styl'

#section-cover
  background mcolor url('../../assets/images/home/gradient.jpg') no-repeat center center
  background mcolor
  background-size cover
  width 100vw
  height 100vh
  max-height 178vw
  position relative

  .section-container
    width 100vw
    height 100vh
    max-height 178vw

    display flex
    flex-flow column no-wrap
    align-items center
    justify-content center
    padding 1.5*x 1.5*x 0

  h1
    color lighten(mcolor,90%)
    font-weight 500
    line-height 1
    margin 0 0 0.5*x
    letter-spacing -0.025em
    font-size 2.5*x

  .tagline, .introduction, form
    margin-bottom x

  .tagline
    color lighten(mcolor,50%)
    font-size 0.85*x
    text-transform uppercase
    letter-spacing 0.0625em
    font-weight 400

  .introduction
    color lighten(mcolor,58%)
    line-height 1.25
    text-align center
    max-width 20em

  .source
    color lighten(mcolor,58%)
    font-size 0.85*x
    a
      font-weight 500
      color lighten(mcolor,90%)

  #home-arrow-down
    position absolute
    bottom 0
    left 0
    width 100vw

    font-size x
    line-height 1.5*x
    color lighten(mcolor,50%)
    text-align center

    transition 0.2s ease all
    cursor pointer
    &:hover
      background hsla(0,0,0,0.2)
      color lighten(mcolor,80%)

@media screen and (min-height: 400px)
  #section-cover

    .tagline, .introduction, form
      margin-bottom 1.25*x

    .connections
      display flex

    #home-arrow-down
      font-size 1.5*x
      line-height 2*x

@media screen and (min-width: 360px) and (min-height: 480px)
  #section-cover
    h1
      font-size 3.25*x

    .tagline, .introduction, form
      margin-bottom 2*x

    .tagline, .source
      font-size x

    .introduction
      font-size 1.25*x

@media screen and (min-width: 400px) and (min-height: 480px)
  #section-cover
    .section-container
      padding-left 3*x
      padding-right 3*x

    .introduction
      line-height 1.5

    #home-arrow-down
      font-size 2*x
      line-height 3*x

@media screen and (min-width: 720px) and (min-height: 480px)
  #section-cover
    .introduction
      font-size 1.5*x
</style>
