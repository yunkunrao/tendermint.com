<template>
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
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
@require '../../styles/variables.styl'

.connections
  display flex
  justify-content center
  
  a
    background hsla(mhue,msat,mlit - 20%,0.1)
    transition 0.2s ease all
    &:hover
      background hsla(mhue,msat,mlit - 20%,0.5)
      color lighten(mcolor,80%)

    i.fa
      color lighten(mcolor,50%)

@media screen and (min-height: 400px)
  .connections
    a
      margin x*0.25
      width 2.5*x
      line-height 2.5*x
      color lighten(mcolor,58%)
      text-align center

@media screen and (min-width: 360px) and (min-height: 480px)
  .connections
    a
      margin 0.333*x
      width 3*x
      line-height 3*x
      font-size 1.20*x

@media screen and (min-width: 400px) and (min-height: 480px)
  .connections
    a
      width 3.5*x
      line-height 3.5*x
      font-size 1.5*x
</style>
