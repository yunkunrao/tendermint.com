<template>
  <div class="page-split page-about">
    <page-header
      title="About"
      subtitle="Tendermint's mission: to bring simplicity, security, and speed to the world&rsquo;s blockchains."
      type="split"
      theme="tendermint">
    </page-header>

    <div class="page-content">
    <section class="section-default section-team-portraits">
      <div class="section-container">
        <div class="section-content">
          <card-person v-for="person in teamMembers" :person="person"></card-person>
        </div>
      </div>
    </section>

    <section class="section-default section-portraits">
      <div class="section-container">
        <div class="section-content">
          <card-person v-for="person in advisors" :person="person"></card-person>
        </div>
      </div>
    </section>
    </div>
  </div>
</template>

<script>
import PageHeader from '@nylira/vue-page-header'
import { mapGetters } from 'vuex'
import CardPerson from './CardPerson'
export default {
  name: 'page-about',
  components: {
    PageHeader,
    CardPerson
  },
  computed: {
    teamMembers () {
      return this.people.filter(p => p.category === 'member')
    },
    advisors () {
      return this.people.filter(p => p.category === 'advisor')
    },
    ...mapGetters({
      people: 'allPeople'
    })
  },
  mounted () {
    document.title = 'About - Tendermint'
  }
}
</script>
