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
      <card-person
        v-for="person in ppl('aib')"
        :key="person.name"
        :person="person">
      </card-person>
    </ni-section>
    <ni-section>
      <div slot="title">Advisors</div>
      <card-person
        v-for="person in ppl('advisors')"
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
    ...mapGetters(['allPeople'])
  },
  mounted () {
    document.title = 'About - Tendermint'
  },
  methods: {
    ppl (tag) { return this.allPeople.filter(p => p.tags.includes(tag)) }
  }
}
</script>
