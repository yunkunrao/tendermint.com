<template>
  <div class="master-detail page-intro-entry">
    <master></master>
    <div class="detail">
      <article-body>
        <entries></entries>
      </article-body>
    </div>
  </div>
</template>

<script>
import Master from './PageIntroMaster'
import ArticleBody from '@nylira/vue-article-body'
import Entries from './PageIntroEntries'
export default {
  name: 'page-intro-entry',
  components: {
    Master,
    ArticleBody,
    Entries
  }
}
</script>
