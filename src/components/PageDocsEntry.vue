<template>
  <div class="master-detail page-docs-entry">
    <master></master>
    <div class="detail">
      <article-body>
        <entry-body></entry-body>
      </article-body>
    </div>
  </div>
</template>

<script>
import Master from './PageDocsMaster'
import ArticleBody from '@nylira/vue-article-body'
import EntryBody from './PageDocsEntryBody'
export default {
  name: 'page-docs-entry',
  components: {
    Master,
    ArticleBody,
    EntryBody
  }
}
</script>
