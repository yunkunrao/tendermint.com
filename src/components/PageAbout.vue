<template>
  <page-split>
    <page-header
      title="About"
      subtitle="All In Bits, Inc. is currently working full time on bringing <a href='https://cosmos.network'>Cosmos</a> to reality.<br><br><a href='/careers'>We are hiring!</a>"
      type="split"
      slot="header"
      theme="tendermint">
    </page-header>
    <ni-section>
      <card-person
        v-for="person in teamMembers"
        :key="person.name"
        :person="person">
      </card-person>
    </ni-section>
    <ni-section>
      <card-person
        v-for="person in advisors"
        :key="person.name"
        :person="person">
      </card-person>
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
