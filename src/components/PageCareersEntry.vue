<template>
  <div class="page-career-entry">
    <page-header
      :title="career.title"
      :subtitle="subtitle"
      theme="tendermint">
    </page-header>
    <article-body>
      <div v-if="career.description" v-html="markdownBlock(career.description)"></div>
      <template v-if="career.requirements.length > 0">
      <h2>We're looking for someone with&hellip;</h2>
      <ul>
        <li v-for="req in career.requirements" v-html="markdown(req)"></li>
      </ul>
      </template>
      <h2>You'll  help us:</h2>
      <ul>
        <li v-for="task in career.tasks" v-html="markdown(task)"></li>
      </ul>
      <h2>We'll offer:</h2>
      <ul>
        <li>Competitive salary</li>
        <li>Flexible hours (part-time or full-time)</li>
        <li>Stock options</li>
        <li>Medical, dental, and vision insurance</li>
        <li>An environment with plenty of opportunities to learn and innovate</li>
        <li>Exposure to cutting-edge blockchain technology</li>
        <li>Potential to work remotely later on</li>
        <li>And much more&hellip;</li>
      </ul>
      <h2>Get in touch</h2>
      <template v-if="career.id === 'frontend-engineer'">
        <p>Please submit a cover letter and resume to <a href="mailto:berlin@tendermint.com">berlin@tendermint.com</a>. Make sure to include availability dates and desired working hours per week. We'll write back as soon as we can.</p>
      <btn size="lg" @click.native="email('berlin@tendermint.com')" icon="envelope-o" value="Send Application"></btn>
      </template>
      <template v-else>
        <p>Please submit a cover letter and resume to <a href="mailto:careers@tendermint.com">careers@tendermint.com</a>. Make sure to include availability dates and desired working hours per week.  We'll write back as soon as we can.</p>
        <btn type="anchor" size="lg" href="mailto:careers@tendermint.com" icon="envelope-o" value="Send Application"></btn>
      </template>
    </article-body>
  </div>
</template>

<script>
import PageHeader from '@nylira/vue-page-header'
import ArticleBody from '@nylira/vue-article-body'
import { mapGetters } from 'vuex'
import MarkdownIt from 'markdown-it'
import Btn from '@nylira/vue-button'
let md = new MarkdownIt()
export default {
  name: 'page-career-entry',
  components: {
    Btn,
    PageHeader,
    ArticleBody
  },
  computed: {
    subtitle () {
      return this.capitalize(this.career.area) + ' Position at Tendermint'
    },
    career () {
      if (this.allCareers) {
        return this.allCareers.find(c => c.id === this.$route.params.entry)
      }
      return {
        title: 'Loading...',
        subtitle: 'Loading...'
      }
    },
    ...mapGetters(['allCareers'])
  },
  methods: {
    capitalize (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    markdown (text) {
      return md.renderInline(text)
    },
    markdownBlock (text) {
      return md.render(text)
    },
    email (address) {
      window.location.href = 'mailto:' + address
    }
  },
  mounted () {
    document.title = this.career.title + ' - Careers - Tendermint'
  }
}
</script>


<style lang="stylus">
@require '../styles/variables.styl'

.page-career-entry
  .tags
    margin-top 1.5*x
    text-align center
    max-width 40*x
    display flex
    flex-flow row wrap
    justify-content center

  .tag
    font-size 0.75*x
    background lighten(bc, 50%)
    color dim
    margin-right 0.25*x
    margin-bottom 0.25*x
    padding 0.25*x 0.5*x

    cursor pointer

    background hsla(0,0,0,25%)
    color #fff
    &.active
      background darken(acolor,25%)

  .ni-btn-wrapper
    width 18rem
    margin-bottom 1.5rem
  .article-body
    li
      p
        margin 0

@media screen and (min-width: 768px)
  .page-career-entry
    .tags
      margin-top 2*x

    .tag
      font-size x
</style>
