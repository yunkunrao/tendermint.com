<template>
  <div class="page-career-entry">
    <div class="page-header page-header-wide">
      <h1>{{ career.title }}</h1>
      <p>{{ career.subtitle }}</p>
    </div>
    <section class="section-default">
      <div class="section-container">
        <div class="section-content">
          <div class="article-body">
            <p>This job can be full-time or part-time. We welcome people who are interested in working remotely as well as onsite in San Francisco or Toronto.</p>
            <h2>Responsibilities</h2>
            <ul class="responsibilities">
              <li v-for="r in career.responsibilities" v-html="markdown(r)"></li>
            </ul>
            <h2>About this job</h2>
            <h2>Benefits</h2>
              <ul>
                <li>Work from anywhere in the world</li>
                <li>Stock</li>
                <li>Competitive salary</li>
                <li>Medical, dental, and vision insurance</li>
                <li>And much more...</li>
              </ul>
            <h2>About Us</h2>
            Tendermint's mission is to bring simplicity, security, and speed to the world’s blockchains.
            <h2>Apply for this role</h2>
            <p>Send us an email with your cover letter and resume:</p>
            <a href="mailto:hello@tendermint.com" class="btn btn-large">hello@tendermint.com</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MarkdownIt from 'markdown-it'
let md = new MarkdownIt()

export default {
  name: 'page-career-entry',
  computed: {
    career () {
      if (this.careers) {
        return this.careers.find(j => j.id === this.$route.params.entry)
      }
      return {
        title: 'Loading...',
        subtitle: 'Loading...'
      }
    },
    ...mapGetters({
      careers: 'allCareers'
    })
  },
  methods: {
    markdown (text) {
      return md.render(text)
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

  a.btn
    width 18*x
    text-decoration none
  .article-body
    li
      p
        margin 0

@media screen and (min-width: 720px)
  .page-career-entry
    .tags
      margin-top 2*x

    .tag
      font-size x
</style>
