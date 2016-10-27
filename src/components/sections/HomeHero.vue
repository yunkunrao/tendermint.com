<template>
  <div id="home-hero">
    <section id="section-hero">
      <div class="section-container">
        <h1>Tendermint</h1>
        <p class="tagline">Blockchain Consensus</p>
        <p class="introduction">
          Byzantine fault-tolerant replicated state machines in any programming language
        </p>

        <email-signup></email-signup>

        <div class="connections">
          <a href="https://www.facebook.com/tendermint">
            <i class="fa fa-footbook"></i></a>
          <a href="https://github.com/tendermint/tendermint">
            <i class="fa fa-github"></i></a>
          <a href="https://www.linkedin.com/company/tendermint">
            <i class="fa fa-linkedout"></i></a>
          <a href="http://forum.tendermint.com:3000/">
            <i class="fa fa-slick"></i></a>
          <a href="https://twitter.com/tendermint_team">
            <i class="fa fa-twatter"></i></a>
        </div><!--connections-->

      </div><!--container-->
      <a id="home-arrow-down" @click="scrollDown"><i class="fa fa-angle-down"></i></a>
    </section>
    <div id="scroll-down-here"></div>
  </div>
</template>

<script>
import $ from 'jquery'
import EmailSignup from '../partials/EmailSignup'

export default {
  components: {
    EmailSignup
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

#section-hero
  background mcolor url('../../assets/images/home/gradient.jpg') no-repeat center center
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
    font-size 0.75*x
    text-transform uppercase
    letter-spacing 1px
    font-weight 400
    i.fa
      color lighten(mcolor,25%)

  .introduction
    color lighten(mcolor,58%)
    line-height 1.25
    text-align center
    max-width 20em

  .connections
    display none

  #home-arrow-down
    position absolute
    bottom 0
    left 0
    width 100vw

    font-size x
    line-height 1.5*x
    color lighten(mcolor,50%)
    text-align center

  .connections a, #home-arrow-down
    background hsla(mhue,msat,mlit - 20%,0.1)
    transition 0.2s ease all
    &:hover
      background hsla(mhue,msat,mlit - 20%,0.5)
      color lighten(mcolor,80%)

@media screen and (min-height: 400px)
  #section-hero

    .tagline, .introduction, form
      margin-bottom 1.25*x

    .connections
      display flex
      a
        margin x*0.25
        width 2.5*x
        line-height 2.5*x
        color lighten(mcolor,58%)
        text-align center

    #home-arrow-down
      font-size 1.5*x
      line-height 2*x

@media screen and (min-width: 360px) and (min-height: 480px)
  #section-hero
    h1
      font-size 3.25*x

    .tagline, .introduction, form
      margin-bottom 2*x

    .tagline
      font-size x

    .introduction
      font-size 1.25*x

    .connections
      a
        margin 0.333*x
        width 3*x
        line-height 3*x
        font-size 1.20*x

@media screen and (min-width: 400px) and (min-height: 480px)
  #section-hero
    .section-container
      padding-left 3*x
      padding-right 3*x

    .introduction
      line-height 1.5

    .connections
      a
        width 3.5*x
        line-height 3.5*x
        font-size 1.5*x

    #home-arrow-down
      font-size 2*x
      line-height 3*x

@media screen and (min-width: 720px) and (min-height: 480px)
  #section-hero
    .introduction
      font-size 1.5*x
</style>
