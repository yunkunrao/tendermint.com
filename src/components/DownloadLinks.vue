<template lang="pug">
.download-links
  .bin.bin-tendermint
    .title
      img(src='../assets/images/icon-tendermint.png')
    .key-value
      .key tendermint
      .value
        btn(type='anchor', icon='github', value='View Releases' target="_blank"
          href="https://github.com/tendermint/tendermint/releases")
  .bin.bin-abci
    .title
      img(src='../assets/images/icon-abci.png')
    .key-value
      .key abci
      .value
        btn(type='anchor', icon='github', value='View Releases' target="_blank"
          href="https://github.com/tendermint/abci/releases")
  .bin.bin-ethermint
    .title
      img(src='../assets/images/icon-ethermint.png')
    .key-value
      .key ethermint
      .value
        btn(type='anchor', icon='github', value='View Releases' target="_blank"
          href='https://github.com/tendermint/ethermint/releases')
</template>

<script>
import Btn from '@nylira/vue-button'
export default {
  name: 'download-links',
  components: {
    Btn
  }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.download-links
  font-family sans
  font-size 1rem

  .bin
    border-top 1px solid bc
    margin-bottom 1rem
    display flex
    .title
      img
        display block
        width 4em
        height 4em
        margin 0

    .key-value
      flex 1
      padding 0 0.75em
      background c-app-fg

    .key
      font-weight bold
      line-height 3rem
      .version
        color light

    .value
      display flex
      .ni-btn
        max-width 16rem
        flex 1
        margin-right 0.25rem
        .ni-btn-value
          display none
        &:last-of-type
          margin-right 0

@media screen and (min-width: 360px)
  .download-links
    .bin
      .value
        .ni-btn
          margin-right 0.375rem

@media screen and (min-width: 768px)
  .download-links
    .bin
      .title
        img
          width 6rem
          height 6rem
      .key-value
        padding 0 1rem
      .value
        .ni-btn
          margin-right 0.5rem

@media screen and (min-width: 1024px)
  .download-links
    .bin
      .key-value
        padding 0 1.5rem
      .value
        .ni-btn
          margin-right 1rem
          .ni-btn-value
            display inline
</style>
