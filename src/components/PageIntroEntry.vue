<template>
  <div class="master-detail page-intro-entry">
    <master></master>
    <div class="detail">
      <article-body>
        <entry-body></entry-body>
      </article-body>
    </div>
  </div>
</template>

<script>
import Master from './PageIntroMaster'
import ArticleBody from '@nylira/vue-article-body'
import EntryBody from './PageIntroEntryBody'
export default {
  name: 'page-intro-entry',
  components: {
    Master,
    ArticleBody,
    EntryBody
  }
}
</script>
