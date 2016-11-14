<template>
  <div class="component">
    <section-home-cover></section-home-cover>
    <section-home-benefits></section-home-benefits>
    <!--<section-home-recruiting></section-home-recruiting>-->
  </div>
</template>

<script>
export default {
  name: 'page-index',
  components: {
    SectionHomeCover: require('../sections/HomeCover'),
    SectionHomeBenefits: require('../sections/HomeBenefits.vue'),
    SectionHomeRecruiting: require('../sections/HomeRecruiting.vue')
  }
}
</script>
