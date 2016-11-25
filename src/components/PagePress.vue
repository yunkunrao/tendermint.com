<template>
  <div class="page-press split-page">
    <div class="page-header">
      <h1>Press Info</h1>
      <p>Mentions in the news and media resources.</p>
    </div>

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
import { mapGetters } from 'vuex'
import { orderBy } from 'lodash'
import CardPost from './CardPost'

export default {
  name: 'page-press',
  components: {
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
