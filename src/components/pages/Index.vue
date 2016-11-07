<template>
  <div class="component">
    <section-home-cover></section-home-cover>
    <section-home-benefits></section-home-benefits>
    <section-home-recruiting></section-home-recruiting>
  </div>
</template>

<script>
import SectionHomeCover from '../sections/HomeCover'
import SectionHomeBenefits from '../sections/HomeBenefits'
import SectionHomeRecruiting from '../sections/HomeRecruiting'

export default {
  name: 'page-index',
  head: {
    title: {
      inner: 'Byzantine fault-tolerant replicated state machines in any programming language'
    }
  },
  components: {
    SectionHomeCover,
    SectionHomeBenefits,
    SectionHomeRecruiting
  }
}
</script>
