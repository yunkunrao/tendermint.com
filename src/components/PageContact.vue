<template>
  <page-split class="page-contact">
    <page-header
      title="Contact"
      subtitle="Get in touch with us"
      type="split"
      slot="header"
      theme="tendermint">
    </page-header>
    <article-body>
      <h2>Email</h2>
      <p>Questions or comments for the Tendermint team? Email us at <a :href="'mailto:' + links.tm.email">{{links.tm.email}}</a> and we'll get back to you promptly.</p>
      <h2>Chat</h2>
      <p>We also hang out all day on chat. <a :href="links.cosmos.chat">Chat with us!</a></p>
      <h2>Other</h2>
      <p>We are also reachable by other methods.</p>
      <ul>
        <li><a :href="links.tm.facebook">Facebook</a></li>
        <li><a :href="links.tm.github.project">GitHub</a></li>
        <li><a :href="links.tm.linkedin">LinkedIn</a></li>
        <li><a :href="links.tm.twitter">Twitter</a></li>
      </ul>
    </article-body>
  </page-split>
</template>

<script>
import {mapGetters} from 'vuex'
import PageHeader from '@nylira/vue-page-header'
import PageSplit from '@nylira/vue-page-split'
import ArticleBody from '@nylira/vue-article-body'
export default {
  name: 'page-contact',
  components: {
    ArticleBody,
    PageHeader,
    PageSplit
  },
  computed: {...mapGetters(['links'])},
  mounted () {
    document.title = 'Contact - Tendermint'
  }
}
</script>
