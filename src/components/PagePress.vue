<template>
  <page-split>
    <page-header
      title="Press Info"
      subtitle="Mentions in the news and media resources."
      type="split"
      slot="header"
      theme="tendermint">
    </page-header>
    <ni-section>
      <card-post v-for="media in orderedMedia" :key="media.title" :url="media.url"
        :title="media.title"  :desc="media.date + ' - '+ media.company">
      </card-post>
    </ni-section>
  </page-split>
</template>

<script>
import NiSection from "./NiSection"
import PageHeader from "@nylira/vue-page-header"
import PageSplit from "@nylira/vue-page-split"
import { mapGetters } from "vuex"
import { orderBy } from "lodash"
import CardPost from "./CardPost"
export default {
  name: "page-press",
  components: {
    CardPost,
    NiSection,
    PageHeader,
    PageSplit
  },
  computed: {
    orderedMedia() {
      return orderBy(this.media, ["date"], ["desc"])
    },
    ...mapGetters({
      media: "allMedia"
    })
  },
  mounted() {
    document.title = "Press Info - Tendermint"
  }
}
</script>
