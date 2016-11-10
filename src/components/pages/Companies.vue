<template>
  <div class="component">
    <section id="section-top">
      <div class="section-container">
        <div class="article-wrapper">
          <h1>Companies Using Tendermint</h1>
          <p>These companies are building upon Tendermint to achieve their core business goals.</p>
        </div>
      </div>
    </section>

    <section class="section-default">
      <div class="section-container">
        <div class="section-content">
          <company v-for="company in companies" :company="company"></company>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Company from '../partials/Company.vue'

export default {
  components: {
    Company
  },
  computed: {
    ...mapGetters({
      companies: 'allCompanies'
    })
  },
  mounted () {
    document.title = 'Companies Using Tendermint - Tendermint'
  }
}
</script>


<style lang="stylus" scoped>
@require '../../styles/variables.styl'
</style>
