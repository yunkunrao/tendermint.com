<template>
  <div class="component">
    <section-home-cover></section-home-cover>
    <section-home-benefits></section-home-benefits>
    <section-home-resources></section-home-resources>
    <section-home-recruiting></section-home-recruiting>
  </div>
</template>

<script>
import SectionHomeCover from '../sections/HomeCover'
import SectionHomeBenefits from '../sections/HomeBenefits'
import SectionHomeResources from '../sections/HomeResources'
import SectionHomeRecruiting from '../sections/HomeRecruiting'

export default {
  components: {
    SectionHomeCover,
    SectionHomeBenefits,
    SectionHomeResources,
    SectionHomeRecruiting
  }
}
</script>
