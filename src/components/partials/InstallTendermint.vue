<template>
  <btn class="install-tendermint"
    btn-icon="cloud-download" btn-text="Install Tendermint" btn-size="large">
  </btn>
</template>

<script>
import $ from 'jquery'
export default {
  components: {
    Btn: require('./Btn')
  },
  mounted () {
    let self = this
    $('.install-tendermint').click(function () {
      console.log('nav!')
      self.$router.push('/intro/getting-started/install')
    })
  }
}
</script>

<style lang="stylus" scoped>
@require '../../styles/variables.styl'

.install-tendermint
  max-width 17*x
</style>
