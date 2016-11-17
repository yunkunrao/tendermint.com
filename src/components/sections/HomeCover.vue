<template>
  <section id="section-cover">
    <div class="section-container">
      <img src="../../assets/images/logo-blue-alpha-2048.png"l id="home-logo">
      <h1>Tendermint</h1>
      <p class="tagline">Blockchain Consensus</p>
      <p class="introduction">Byzantine fault-tolerant replicated state machines in any programming language</p>
      <install-tendermint></install-tendermint>
      <p class="source"><i class="fa fa-github"></i> View source on <a href="https://github.com/tendermint/tendermint">GitHub</a></p>
    </div><!--container-->
  </section>
</template>

<script>
import InstallTendermint from '../partials/InstallTendermint.vue'

export default {
  components: {
    InstallTendermint
  }
}
</script>

<style lang="stylus" scoped>
@require '../../styles/variables.styl'

#section-cover
  background mcolor
  position relative
  border-bottom 1px solid lighten(mcolor, 10%)

  .section-container
    margin-top 2.4*x
    padding 4*x 1.5*x

  h1
    color lighten(mcolor,90%)
    font-weight 400
    line-height 1
    font-size 2.75*x
    margin-bottom 0.5*x

  .tagline
    color lighten(mcolor,50%)
    font-size x
    text-transform uppercase
    letter-spacing 0.05em
    font-weight 500
    margin-bottom 2*x

  .introduction
    color lighten(mcolor,70%)
    max-width 20*x
    font-size 1.25*x
    margin-bottom 3*x

  .install-tendermint
    margin-bottom x

  .source
    color lighten(mcolor,50%)
    a
      color lighten(mcolor,70%)

#home-logo
  display none

@media screen and (min-height: 400px)
  #section-cover .section-container
    margin-top 3*x

@media screen and (min-width: 360px)
  #section-cover .section-container
    padding 4*x 1.75*x

@media screen and (min-width: 400px)
  #section-cover .section-container
    padding 5*x 2.25*x

    h1
      font-size 3*x
    .tagline
      font-size 1.095*x

@media screen and (min-width: 720px)
  #section-cover .section-container
    padding 5*x 2*x
    max-width 640px
    margin-left auto
    margin-right auto

    .introduction
      font-size 1.5*x
      max-width 28*x

    .install-tendermint
      margin-bottom 1.5*x

    .source
      font-size 1.25*x

  #section-cover
    overflow hidden
    
  #home-logo
    display block
    width 80vw
    height 80vw
    position absolute
    top -2.5vw
    right -20vw
    opacity 0.15

@media screen and (min-width: 960px)
  #section-cover .section-container
    padding 6.5*x 2*x
    max-width 900px
    .tagline
      margin-bottom 3*x
    .introduction
      margin-bottom 4*x

  #home-logo
    top -7.5vw
    right -20vw

@media screen and (min-width: 1200px)
  #section-cover .section-container
    padding 8*x 2*x
    max-width 1080px

  #home-logo
    width 70vw
    height 70vw

@media screen and (min-width: 1800px)
  #home-logo
    top -15vw
    right -15vw


</style>
