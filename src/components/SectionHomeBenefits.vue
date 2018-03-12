<template lang="pug">
ni-section.ni-section-dark.section-home-benefits
  .blocks
    .block
      i.fa.fa-server
      .text
        .key Byzantine Fault-Tolerant
        .value Tendermint tolerates up to one third of your machines failing arbitrarily. This includes explicitly malicious behaviour.
    .block
      i.fa.fa-clone
      .text
        .key State Machine Replication
        .value Tendermint can replicate deterministic state machines written in any programming language.
    .block
      i.fa.fa-lock
      .text
        .key Secure P2P
        .value Gossip protocols and peer discovery are secured via Tendermint's authenticated encryption system.
    .block
      i.fa.fa-bolt
      .text
        .key Lightning Fast
        .value Tendermint supports thousands of transactions per second.
    .block
      i.fa.fa-cloud-upload
      .text
        .key Easy to Deploy
        .value Use mintnet to deploy your app to any cloud provider supported by docker-machine.
    .block
      i.fa.fa-code
      .text
        .key 100% Open Source
        .value All of Tendermint's source code is licensed under Apache 2.0. Check it out on #[a(:href='links.tm.github.organization', target='_blank') GitHub].
</template>

<script>
import {mapGetters} from 'vuex'
import NiSection from './NiSection'
export default {
  name: 'section-home-benefits',
  components: {
    NiSection
  },
  computed: {
    ...mapGetters(['links'])
  }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.section-home-benefits
  border-bottom 1px solid lighten(mcolor, 10%) !important
  .blocks
    padding-top x

  .block
    display flex
    margin-bottom 2*x
    padding 0 x

    i.fa
      font-size 1.5*x
      display block

      width 3*x
      height 3*x
      color lighten(mcolor,50%)

      display flex
      justify-content center
      align-items center

    .text
      flex 1
      padding 0 x

    .key
      margin 0 0 0.5*x
      font-weight 500
      font-size 1.125*x

@media screen and (min-width: 360px)
  .section-home-benefits
    .block
      i.fa
        width 3.5*x
        height 3.5*x
        font-size 1.75*x

      .text
        padding 0 1.5*x

@media screen and (min-width: 414px)
  .section-home-benefits
    .block
      i.fa
        width 4*x
        height 4*x
        font-size 2*x

@media screen and (min-width: 768px)
  .section-home-benefits
    .blocks
      padding-top 2*x
    .block
      max-width 640px
      margin-left auto
      margin-right auto
      margin-bottom 3*x

      i.fa
        font-size 3*x
        width 5*x
        height 5*x

      .key
        font-size 1.25*x

@media screen and (min-width: 1024px)
  .section-home-benefits
    .blocks
      padding-top 3*x
      display flex
      flex-flow row wrap
      max-width 900px
      margin 0 auto
    .block
      flex 0 0 50%
      margin-bottom 4.5*x
      padding 0 x
      i.fa
        font-size 3*x
        width 5*x
        height 5*x
      .key
        font-size 1.5*x
        margin-bottom x

      .value
        font-size 1.25*x

@media screen and (min-width: 1280px)
  .section-home-benefits
    .blocks
      max-width 1080px
</style>
