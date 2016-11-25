<template>
  <div class="page-bounties split-page">
    <div class="page-header">
      <h1>Bounties</h1>
      <p>Get paid in BTC by working on Tendermint-based projects.</p>
    </div>
    <section class="section-default page-content">
      <div class="section-container">
        <div class="section-content">
          <card-bounty v-for="bounty in bounties" :bounty="bounty"></card-bounty>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardBounty from './CardBounty'
export default {
  name: 'page-bounties',
  components: {
    CardBounty
  },
  computed: {
    ...mapGetters({
      bounties: 'allBounties'
    })
  },
  mounted () {
    document.title = 'Bounties - Tendermint'
  }
}
</script>
