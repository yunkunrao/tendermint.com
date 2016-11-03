<template>
  <form id="install-tendermint">
    <div class="input-group">
      <router-link class="btn btn-primary btn-large" :to="'/intro/getting-started/install'">
        <i class="fa fa-cloud-download"></i> Install
      </router-link>
    </div>
  </form>
</template>

<style lang="stylus" scoped>
@require '../../styles/variables.styl'

#install-tendermint
  max-width 20*x
  width 100%

  background hsla(0,0,0,.25)
  padding 0.25*x
  margin 0 auto

  display flex
  flex-flow column no-wrap

  .input-group
    margin 0.25*x
    flex 1

    .btn
      vertical-align top
      width 100%

@media screen and (min-width: 480px) and (max-height: 480px)
  #install-tendermint
    flex-flow row no-wrap
    max-width 30*x
</style>
