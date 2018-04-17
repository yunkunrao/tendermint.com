<template lang="pug">
page-split
  page-header(title='Error 404' subtitle='Page Not Found' type='split' theme='tendermint' slot='header')
  article-body
    p
      strong Whoops!
      |  The page you visited either does not exist or has been moved elsewhere in a website reshuffle. We&apos;re sorry for the inconvenience. Try visiting one of these pages below:
    ul
      li
        router-link(to='/') Home
      li
        router-link(to='/downloads') Downloads
      li
        router-link(to='/community') Community
      li
        router-link(to='/careers') Careers
      li
        router-link(to='/about') About
    p
      | Please notify us at
      a(:href="'mailto:' + links.tm.email") {{links.tm.email}}
      |  and we will fix this error as soon as we can. Thank you for your patience.

</template>

<script>
import { mapGetters } from "vuex"
import PageHeader from "@nylira/vue-page-header"
import ArticleBody from "@nylira/vue-article-body"
import PageSplit from "@nylira/vue-page-split"
export default {
  name: "page-404",
  components: {
    PageSplit,
    ArticleBody,
    PageHeader
  },
  computed: { ...mapGetters(["links"]) },
  mounted() {
    document.title = "404 - Tendermint"
  }
}
</script>
