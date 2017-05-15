<template>
  <section class="section-home-cover">
    <img class="section-home-logo" src="../assets/images/logo-blue-alpha-2048.png">
    <div class="section-container">
      <section-home-cover-alert></section-home-cover-alert>
      <h1>Tendermint</h1>
      <p class="tagline">Blockchain Consensus</p>
      <p class="introduction">Byzantine fault-tolerant replicated state machines in any programming language</p>
      <div class="btns">
        <btn
          type="link"
          to="/download"
          size="lg"
          icon="cloud-download"
          theme="tendermint"
          value="Download">
        </btn>
        <btn
          type="link"
          to="/intro"
          size="lg"
          icon="question"
          theme="alpha-black"
          value="Learn More">
        </btn>
      </div>
      <p class="source"><i class="fa fa-github"></i> View source code on <a href="https://github.com/tendermint/tendermint">GitHub</a></p>
    </div>
  </section>
</template>

<script>
import SectionHomeCoverAlert from './SectionHomeCoverAlert.vue'
import Btn from '@nylira/vue-button'
export default {
  components: {
    SectionHomeCoverAlert,
    Btn
  }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.section-home-cover
  background mcolor
  position relative
  border-bottom 1px solid lighten(mcolor, 10%)
  margin-top -3rem

  .section-container
    margin-top 3rem
    padding 2*x 1.5*x
    position relative
    z-index 5

  h1
    color lighten(mcolor,90%)
    font-weight 700
    line-height 1
    font-size 2.75*x
    margin-bottom 0.5*x

  .tagline
    color lighten(mcolor,50%)
    font-size x
    text-transform uppercase
    letter-spacing 0.075em
    font-weight 500
    margin-bottom 2*x

  .introduction
    color lighten(mcolor,70%)
    max-width 20*x
    font-size 1.25*x
    margin-bottom 3*x

  .btns
    margin-bottom x
    .ni-btn
      width 100%
      margin-bottom 0.5*x
      max-width 18*x

  .source
    color lighten(mcolor,50%)
    i.fa
      padding-right 0.25rem
    a
      color lighten(mcolor,70%)

.section-home-logo
  display none

@media screen and (min-width: 360px)
  .section-home-cover .section-container
    padding 3*x 1.75*x

@media screen and (min-width: 414px)
  .section-home-cover .section-container
    padding 3*x 2.25*x

    h1
      font-size 3*x
    .tagline
      font-size 1.095*x

@media screen and (min-width: 768px)
  .section-home-cover .section-container
    padding 4*x 2*x
    max-width 640px
    margin-left auto
    margin-right auto

    .introduction
      font-size 1.5*x
      max-width 28*x

    .btns
      margin-bottom 1.5*x
      display flex
      flex-flow row nowrap
      max-width 32*x
      .ni-btn
        margin 0
        margin-right x

  .section-home-cover
    overflow hidden
    
  .section-home-logo
    display block
    width 80vw
    height 80vw
    position absolute
    top -2.5vw
    right -20vw
    opacity 0.15

@media screen and (min-width: 1024px)
  .section-home-cover .section-container
    max-width 900px
    .tagline
      margin-bottom 3*x
    .introduction
      margin-bottom 4*x

  .section-home-logo
    top -7.5vw
    right -20vw

@media screen and (min-width: 1280px)
  .section-home-cover .section-container
    padding 5*x 2*x 6*x
    max-width 1080px

  .section-home-logo
    width 70vw
    height 70vw

@media screen and (min-width: 1680px)
  .section-home-logo
    top -15vw
    right -15vw
</style>
