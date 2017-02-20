<template>
  <div class="master-detail page-docs-entry">
    <master></master>
    <div class="detail">
      <article-body>
        <entries></entries>
      </article-body>
    </div>
  </div>
</template>

<script>
import Master from './PageDocsMaster'
import ArticleBody from '@nylira/vue-article-body'
import Entries from './PageDocsEntries'
export default {
  name: 'page-docs-entry',
  components: {
    Master,
    ArticleBody,
    Entries
  }
}
</script>
