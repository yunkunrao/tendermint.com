<template lang="pug">
.download-links
  .bin.bin-tendermint
    .title
      img(src='../assets/images/icon-tendermint.png')
    .key-value
      .key
        | tendermint 
        span.version 0.10.3
      .value
        btn(type='anchor', icon='linux', value='Linux', :href="dl('linux', 'tendermint', '0.10.3')")
        btn(type='anchor', icon='apple', value='macOS', :href="dl('darwin', 'tendermint', '0.10.3')")
        btn(type='anchor', icon='windows', value='Windows', :href="dl('windows', 'tendermint', '0.10.3')")
  .bin.bin-abci
    .title
      img(src='../assets/images/icon-abci.png')
    .key-value
      .key
        | abci 
        span.version 0.5.0
      .value
        btn(type='anchor', icon='linux', value='Linux', :href="dl('linux', 'abci', '0.5.0')")
        btn(type='anchor', icon='apple', value='macOS', :href="dl('darwin', 'abci', '0.5.0')")
        btn(type='anchor', icon='windows', value='Windows', :href="dl('windows', 'abci', '0.5.0')")
  .bin.bin-basecoin
    .title
      img(src='../assets/images/icon-basecoin.png')
    .key-value
      .key
        | basecoin 
        span.version 0.6.1
      .value
        btn(type='anchor', icon='linux', value='Linux', :href="dl('linux', 'basecoin', '0.6.1')")
        btn(type='anchor', icon='apple', value='macOS', :href="dl('darwin', 'basecoin', '0.6.1')")
        btn(type='anchor', icon='windows', value='Windows', :href="dl('windows', 'basecoin', '0.6.1')")
  .bin.bin-ethermint
    .title
      img(src='../assets/images/icon-ethermint.png')
    .key-value
      .key
        | ethermint 
        span.version 0.4.0
      .value
        btn(type='anchor', icon='linux', value='Linux', :href='dlEthermintLinux()')
        btn(type='anchor', icon='apple', value='macOS', :href='dlEthermintDarwin()')
        btn(type='anchor', icon='windows', value='Windows', :href='dlEthermintWindows()')
  .bin.bin-merkleeyes
    .title
      img(src='../assets/images/icon-merkleeyes.png')
    .key-value
      .key
        | merkleeyes 
        span.version 0.2.4
      .value
        btn(type='anchor', icon='linux', value='Linux', :href="dl('linux', 'merkleeyes', '0.2.4')")
        btn(type='anchor', icon='apple', value='macOS', :href="dl('darwin', 'merkleeyes', '0.2.4')")
        btn(type='anchor', icon='windows', value='Windows', :href="dl('windows', 'merkleeyes', '0.2.4')")
</template>

<script>
import Btn from '@nylira/vue-button'
export default {
  name: 'download-links',
  components: {
    Btn
  },
  methods: {
    dl (os, name, version) {
      return `https://s3-us-west-2.amazonaws.com/tendermint/binaries/${name}/v${version}/${name}_${version}_${os}_amd64.zip`
    },
    dlEthermintLinux () {
      return 'https://s3-us-west-2.amazonaws.com/tendermint/binaries/ethermint/0.4.0/ethermint_0.4.0_linux-amd64.zip'
    },
    dlEthermintDarwin () {
      return 'https://s3-us-west-2.amazonaws.com/tendermint/binaries/ethermint/0.4.0/ethermint_0.4.0_darwin-10.6-amd64.zip'
    },
    dlEthermintWindows () {
      return 'https://github.com/tendermint/ethermint/releases/download/v0.4.0/ethermint_0.4.0_windows-4.0-amd64.zip'
    }
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
        font-weight 300

    .value
      display flex
      .ni-btn
        max-width 8rem
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
