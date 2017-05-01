<template>
  <div class="download-matrix">
    <div class="bin bin-tendermint">
      <div class="title"><img src="../assets/images/icon-tendermint.png"></div>
      <div class="key-value">
        <div class="key">tendermint <span class="version">0.9.2</span></div>
        <div class="value">
          <btn icon="linux" value="Linux"
            @click.native="dl('linux', 'tendermint', '0.9.2')"></btn>
          <btn icon="apple" value="macOS"
            @click.native="dl('darwin', 'tendermint', '0.9.2')"></btn>
          <btn icon="windows" value="Windows"
            @click.native="dl('windows', 'tendermint', '0.9.2')"></btn>
        </div>
      </div>
    </div>
    <div class="bin bin-abci">
      <div class="title"><img src="../assets/images/icon-abci.png"></div>
      <div class="key-value">
        <div class="key">abci <span class="version">0.4.1</span></div>
        <div class="value">
          <btn icon="linux" value="Linux"
            @click.native="dl('linux', 'abci', '0.4.1')"></btn>
          <btn icon="apple" value="macOS"
            @click.native="dl('darwin', 'abci', '0.4.1')"></btn>
          <btn icon="windows" value="Windows"
            @click.native="dl('windows', 'abci', '0.4.1')"></btn>
        </div>
      </div>
    </div>
    <div class="bin bin-basecoin">
      <div class="title"><img src="../assets/images/icon-basecoin.png"></div>
      <div class="key-value">
        <div class="key">basecoin <span class="version">0.4.0</span></div>
        <div class="value">
          <btn icon="linux" value="Linux"
            @click.native="dl('linux', 'basecoin', '0.4.0')"></btn>
          <btn icon="apple" value="macOS"
            @click.native="dl('darwin', 'basecoin', '0.4.0')"></btn>
          <btn icon="windows" value="Windows"
            @click.native="dl('windows', 'basecoin', '0.4.0')"></btn>
        </div>
      </div>
    </div>
    <div class="bin bin-merkleeyes">
      <div class="title"><img src="../assets/images/icon-merkleeyes.png"></div>
      <div class="key-value">
        <div class="key">merkleeyes <span class="version">0.1.0</span></div>
        <div class="value">
          <btn icon="linux" value="Linux"
            @click.native="dl('linux', 'merkleeyes', '0.1.0')"></btn>
          <btn icon="apple" value="macOS"
            @click.native="dl('darwin', 'merkleeyes', '0.1.0')"></btn>
          <btn icon="windows" value="Windows"
            @click.native="dl('windows', 'merkleeyes', '0.1.0')"></btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from '@nylira/vue-button'
export default {
  name: 'download-matrix',
  components: {
    Btn
  },
  methods: {
    dl (os, name, version) {
      let href = `https://s3-us-west-2.amazonaws.com/tendermint/binaries/${name}/v${version}/${name}_${version}_${os}_amd64.zip`
      window.location.href = href
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.download-matrix
  font-family sans
  font-size 1rem

  .bin
    border-top 1px solid bc
    display flex
    .title
      img
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
      margin-bottom 0.75em
      .ni-btn-wrapper
        max-width 8rem
        flex 1
        margin-right 0.25rem
        .ni-btn-value
          display none
        &:last-of-type
          margin-right 0

    &.bin-tendermint .title
      background #52b234
    &.bin-abci .title
      background #3378f7
    &.bin-basecoin .title
      background #5d1ef5
    &.bin-merkleeyes .title
      background #aa2cf6

@media screen and (min-width: 360px)
  .download-matrix
    .bin
      .value
        .ni-btn-wrapper
          margin-right 0.375rem

@media screen and (min-width: 768px)
  .download-matrix
    .bin
      .title
        img
          width 6rem
          height 6rem
      .key-value
        padding 0 1rem
      .value
        .ni-btn-wrapper
          margin-right 0.5rem

@media screen and (min-width: 1024px)
  .download-matrix
    .bin
      .key-value
        padding 0 1.5rem
      .key
        margin-top 0.25rem
      .value
        .ni-btn-wrapper
          margin-right 1rem
          .ni-btn-value
            display inline
</style>
