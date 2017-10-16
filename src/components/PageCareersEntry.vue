<template lang="pug">
.page-career-entry
  page-header(:title='career.title', :subtitle='subtitle', theme='tendermint')
  article-body
    div(v-if='career.description', v-html='markdownBlock(career.description)')
    template(v-if='career.requirements.length > 0')
      h2 We're looking for someone with…
      ul
        li(v-for='req in career.requirements', v-html='markdown(req)')
    h2 You should be located near:
    ul
      li(v-for='loc in career.locations', v-html='markdown(loc)')
    h2 You'll help us:
    ul
      li(v-for='task in career.tasks', v-html='markdown(task)')
    h2 We'll offer:
    ul
      li Competitive salary
      li Flexible hours (part-time or full-time)
      li Stock options
      li Medical, dental, and vision insurance
      li An environment with plenty of opportunities to learn and innovate
      li Exposure to cutting-edge blockchain technology
      li Potential to work remotely later on
      li And much more…
    h2 Get in touch
    p(v-if='career.contact', v-html='markdownBlock(career.contact)')
    p(v-else='')
      | Please submit a cover letter and resume to 
      a(href='mailto:careers@tendermint.com') careers@tendermint.com
      | . Make sure to include availability dates, desired working hours per week, and preferred location.  We'll write back as soon as we can.
    btn(type='anchor', size='lg', href='mailto:careers@tendermint.com', icon='envelope-o', value='Send Application')
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
