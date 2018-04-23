<template lang="pug">
page(title="Contribute" )
  div(slot="subtitle") Please aid us in fix bugs and add features to Tendermint. Explore these issues to see where your skills may be most useful.
  div(slot="menu")
    btn(icon="code" value="Tendermint Core" type="anchor" href="https://github.com/tendermint/tendermint" target="_blank" color="primary")
  part(title='Tendermint Issues')
    card-issue(v-for="i in issues" :key="i.id" :issue="i")
</template>

<script>
import { mapGetters } from "vuex"
import Btn from "@nylira/vue-button"
import CardIssue from "./CardIssue"
import Page from "common/NiPage"
import Part from "common/NiPart"
export default {
  name: "page-careers-index",
  components: {
    Btn,
    CardIssue,
    Page,
    Part
  },
  computed: {
    ...mapGetters(["issues"])
  },
  mounted() {
    document.title = "Contribute - Tendermint"
  }
}
</script>
