<template>
  <div class="download-matrix">
    <div class="bin bin-tendermint">
      <div class="title"><img src="../assets/images/icon-tendermint.png"></div>
      <div class="key-value">
        <div class="key">tendermint <span class="version">0.10.1</span></div>
        <div class="value">
          <btn type="anchor" icon="linux" value="Linux"
            :href="dl('linux', 'tendermint', '0.10.1')"></btn>
          <btn type="anchor"  icon="apple" value="macOS"
            :href="dl('darwin', 'tendermint', '0.10.1')"></btn>
          <btn type="anchor"  icon="windows" value="Windows"
            :href="dl('windows', 'tendermint', '0.10.1')"></btn>
        </div>
      </div>
    </div>
    <div class="bin bin-abci">
      <div class="title"><img src="../assets/images/icon-abci.png"></div>
      <div class="key-value">
        <div class="key">abci <span class="version">0.5.0</span></div>
        <div class="value">
          <btn type="anchor"  icon="linux" value="Linux"
            :href="dl('linux', 'abci', '0.5.0')"></btn>
          <btn type="anchor"  icon="apple" value="macOS"
            :href="dl('darwin', 'abci', '0.5.0')"></btn>
          <btn type="anchor"  icon="windows" value="Windows"
            :href="dl('windows', 'abci', '0.5.0')"></btn>
        </div>
      </div>
    </div>
    <div class="bin bin-basecoin">
      <div class="title"><img src="../assets/images/icon-basecoin.png"></div>
      <div class="key-value">
        <div class="key">basecoin <span class="version">0.6.1</span></div>
        <div class="value">
          <btn type="anchor"  icon="linux" value="Linux"
            :href="dl('linux', 'basecoin', '0.6.1')"></btn>
          <btn type="anchor"  icon="apple" value="macOS"
            :href="dl('darwin', 'basecoin', '0.6.1')"></btn>
          <btn type="anchor"  icon="windows" value="Windows"
            :href="dl('windows', 'basecoin', '0.6.1')"></btn>
        </div>
      </div>
    </div>
    <div class="bin bin-ethermint">
      <div class="title"><img src="../assets/images/icon-ethermint.png"></div>
      <div class="key-value">
        <div class="key">ethermint <span class="version">0.3.0</span></div>
        <div class="value">
          <btn type="anchor"  icon="linux" value="Linux"
            :href="dlEthermintLinux( '0.3.0')"></btn>
          <btn type="anchor"  icon="apple" value="macOS"
            :href="dlEthermintMac('0.3.0')"></btn>
          <btn type="anchor"  icon="windows" value="Windows"
            :href="dlEthermintWindows('0.3.0')"></btn>
        </div>
      </div>
    </div>
    <div class="bin bin-merkleeyes">
      <div class="title"><img src="../assets/images/icon-merkleeyes.png"></div>
      <div class="key-value">
        <div class="key">merkleeyes <span class="version">0.2.2</span></div>
        <div class="value">
          <btn type="anchor"  icon="linux" value="Linux"
            :href="dl('linux', 'merkleeyes', '0.2.2')"></btn>
          <btn type="anchor"  icon="apple" value="macOS"
            :href="dl('darwin', 'merkleeyes', '0.2.2')"></btn>
          <btn type="anchor"  icon="windows" value="Windows"
            :href="dl('windows', 'merkleeyes', '0.2.2')"></btn>
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
      return `https://s3-us-west-2.amazonaws.com/tendermint/binaries/${name}/v${version}/${name}_${version}_${os}_amd64.zip`
    },
    dlEthermintLinux (version) {
      return `https://s3.eu-central-1.amazonaws.com/ethermint/${version}/ethermint_${version}_ethermint-linux-amd64.zip`
    },
    dlEthermintMac (version) {
      return `https://s3.eu-central-1.amazonaws.com/ethermint/${version}/ethermint_${version}_ethermint-darwin-10.6-amd64.zip`
    },
    dlEthermintWindows (version) {
      return `https://s3.eu-central-1.amazonaws.com/ethermint/${version}/ethermint_${version}_ethermint-windows-4.0-amd64.exe.zip`
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
  .download-matrix
    .bin
      .value
        .ni-btn
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
        .ni-btn
          margin-right 0.5rem

@media screen and (min-width: 1024px)
  .download-matrix
    .bin
      .key-value
        padding 0 1.5rem
      .value
        .ni-btn
          margin-right 1rem
          .ni-btn-value
            display inline
</style>
