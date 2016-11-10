<template>
  <div class="component">
    <section id="section-top">
      <div class="section-container">
        <div class="article-wrapper">
          <h1></i>About Tendermint</h1>
          <p>Our mission is to bring simplicity, security, and speed to the world&rsquo;s blockchains.</p>
        </div>
      </div>
    </section>

    <section class="section-default section-team-portraits">
      <div class="section-container">
        <header class="section-header">
          <h2>The Team</h2>
        </header>
        <div class="section-content">
          <person v-for="person in teamMembers" :person="person"></person>
        </div>
      </div>
    </section>

    <section class="section-default section-portraits">
      <div class="section-container">
        <header class="section-header">
          <h2>The Advisors</h2>
        </header>
        <div class="section-content">
          <person v-for="person in teamMembers" :person="person"></person>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Person from '../partials/Person.vue'

export default {
  components: {
    Person
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
  methods: {
    avatarSrc (slug) {
      return require('../../assets/images/people/' + slug + '.jpg')
    }
  },
  mounted () {
    document.title = 'About - Tendermint'
  }
}
</script>


<style lang="stylus" scoped>
@require '../../styles/variables.styl'

.section-team-portraits
  .section-content
    display flex
    flex-flow column nowrap
</style>
