<template>
  <div class="page-about split-page">
    <div class="page-header">
      <h1>About</h1>
      <p>Tendermint's mission: to bring simplicity, security, and speed to the world&rsquo;s blockchains.</p>
    </div>

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
import { mapGetters } from 'vuex'
import CardPerson from './CardPerson'
export default {
  name: 'page-about',
  components: {
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
