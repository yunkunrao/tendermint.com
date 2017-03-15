<template>
  <div class="page-companies">
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
          <card-company
            v-for="company in companies"
            :company="company.name"
            :key="company.title">
          </card-company>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardCompany from './CardCompany'
export default {
  components: {
    CardCompany
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
