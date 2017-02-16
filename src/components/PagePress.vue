<template>
  <div class="page-split page-press">
    <page-header
      title="Press Info"
      subtitle="Mentions in the news and media resources."
      type="split"
      theme="tendermint">
    </page-header>

    <section class="section-default page-content">
      <div class="section-container">
        <div class="section-content">

          <card-post v-for="media in orderedMedia" :url="media.url"
            :title="media.title"  :desc="media.date + ' - '+ media.company">
          </card-post>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from '@nylira/vue-page-header'
import { mapGetters } from 'vuex'
import { orderBy } from 'lodash'
import CardPost from './CardPost'

export default {
  name: 'page-press',
  components: {
    PageHeader,
    CardPost
  },
  computed: {
    orderedMedia () { return orderBy(this.media, ['date'], ['desc']) },
    ...mapGetters({
      media: 'allMedia'
    })
  },
  mounted () {
    document.title = 'Press Info - Tendermint'
  }
}
</script>
