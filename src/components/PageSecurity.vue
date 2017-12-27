<template lang="pug">
page-split.page-security
  page-header(
    title='Security'
    subtitle='Learn about security and vulnerability reports at Tendermint.'
    slot='header'
    theme='tendermint')
  article-body: md-text(
    url='https://raw.githubusercontent.com/tendermint/aib-data/master/md/security.md')
</template>

<script>
import PageHeader from '@nylira/vue-page-header'
import PageSplit from '@nylira/vue-page-split'
import ArticleBody from '@nylira/vue-article-body'
import MdText from './NiMdText'
export default {
  name: 'page-security',
  components: {
    ArticleBody,
    MdText,
    PageHeader,
    PageSplit
  },
  mounted () {
    document.title = 'Security - Tendermint'
  }
}
</script>
