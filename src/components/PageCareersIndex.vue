<template lang="pug">
page-split.page-careers-index
  page-header(
    title='Careers'
    subtitle="Join us at Tendermint to build and improve <a href='https://cosmos.network'>Cosmos</a> and Tendermint.<br><br>Jobs here are constantly updated. If your specialty is unlisted, we encourage you to still apply."
    type='split'
    slot='header'
    theme='tendermint')

  ni-section(v-if='technical.length > 0')
    div(slot='title') Technical Positions
    card-career(v-for='c in technical', :key='c.id', :career='c')

  ni-section(v-if='design.length > 0')
    div(slot='title') Design Positions
    card-career(v-for='c in design', :key='c.id', :career='c')

  ni-section(v-if='operations.length > 0')
    div(slot='title') Operations Positions
    card-career(v-for='c in operations', :key='c.id', :career='c')

  ni-section(v-if='community.length > 0')
    div(slot='title') Community Positions
    card-career(v-for='c in community', :key='c.id', :career='c')
</template>

<script>
import { mapGetters } from "vuex"
import { orderBy } from "lodash"
import CardCareer from "./CardCareer"
import NiSection from "./NiSection"
import PageHeader from "@nylira/vue-page-header"
import PageSplit from "@nylira/vue-page-split"
export default {
  name: "page-careers-index",
  components: {
    CardCareer,
    NiSection,
    PageHeader,
    PageSplit
  },
  computed: {
    technical() {
      return this.careers.filter(c => c.area === "technical")
    },
    design() {
      return this.careers.filter(c => c.area === "design")
    },
    operations() {
      return this.careers.filter(c => c.area === "operations")
    },
    community() {
      return this.careers.filter(c => c.area === "community")
    },
    careers() {
      let orderedCareers = orderBy(this.allCareers, ["title"], ["asc"])
      return orderedCareers
    },
    ...mapGetters(["allCareers"])
  },
  mounted() {
    document.title = "Careers - Tendermint"
  }
}
</script>
