<template>
  <div class="page-index">
    <section-home-cover></section-home-cover>
    <section-home-benefits></section-home-benefits>
    <section-home-careers></section-home-careers>
  </div>
</template>

<script>
import SectionHomeCover from './SectionHomeCover'
import SectionHomeBenefits from './SectionHomeBenefits'
import SectionHomeCareers from './SectionHomeCareers'
export default {
  name: 'page-index',
  components: {
    SectionHomeCover,
    SectionHomeBenefits,
    SectionHomeCareers
  },
  head: {
    title () {
      return {
        inner: 'Tendermint',
        separator: '-',
        complement: 'Blockchain Consensus'
      }
    }
  }
}
</script>
