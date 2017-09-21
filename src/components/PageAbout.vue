<template>
  <page-split>
    <page-header
      title="About"
      subtitle="We are currently working full time on bringing <a href='https://cosmos.network'>Cosmos</a> to reality.<br><br><a href='/careers'>We are hiring!</a>"
      type="split"
      slot="header"
      theme="tendermint">
    </page-header>
    <ni-section>
      <div slot="title">Team</div>
      <div class="people">
        <card-person
          group="aib"
          v-for="person in ppl('aib')"
          :key="person.slug"
          :person="person">
        </card-person>
      </div>
    </ni-section>
  </page-split>
</template>

<script>
import { mapGetters } from 'vuex'
import CardPerson from './CardPerson'
import NiSection from './NiSection'
import PageHeader from '@nylira/vue-page-header'
import PageSplit from '@nylira/vue-page-split'
export default {
  name: 'page-about',
  components: {
    CardPerson,
    NiSection,
    PageHeader,
    PageSplit
  },
  computed: {
    ...mapGetters(['allPeople'])
  },
  mounted () {
    document.title = 'About - Tendermint'
  },
  methods: {
    ppl (tag) { return this.allPeople.filter(p => p.groups[tag]) }
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.people
  max-width 960px

@media screen and (min-width: 720px)
  .people
    display flex
    flex-flow row wrap

    .person-wrapper
      flex 0 0 50%

@media screen and (min-width: 960px)
  .people
    margin 0 auto
    .person-wrapper
      flex 0 0 33.333%
</style>
