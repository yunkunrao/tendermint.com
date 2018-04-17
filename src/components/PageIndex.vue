<template>
  <div class="page-index">
    <section-home-cover></section-home-cover>
    <section-home-benefits></section-home-benefits>
  </div>
</template>

<script>
import SectionHomeCover from "./SectionHomeCover"
import SectionHomeBenefits from "./SectionHomeBenefits"
export default {
  name: "page-index",
  components: {
    SectionHomeCover,
    SectionHomeBenefits
  },
  head: {
    title() {
      return {
        inner: "Tendermint",
        separator: "-",
        complement: "Blockchain Consensus"
      }
    }
  }
}
</script>
