<template>
  <div class="component">
    <section id="section-top">
      <div class="section-container">
        <div class="article-wrapper">
          <h1>Careers</h1>
          <div class="tags">
            <div id="tag-all" class="tag active" @click="setActiveTag($event)">all</div>
            <div class="tag" v-for="tag in tags" @click="setActiveTag($event,tag)">{{ tag }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-default">
      <div class="section-container">
        <div class="section-content jobs">
          <router-link class="job" v-for="job in filteredJobs" :to="'/careers/' + job.id">
            <div class="title">{{ job.title }}</div>
            <div class="subtitle">{{ job.subtitle }}</div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { union, orderBy } from 'lodash'
import $ from 'jquery'

export default {
  head: {
    title: {
      inner: 'About'
    }
  },
  computed: {
    tags () {
      let tags = []
      this.jobs.map(function (job) {
        tags = union(tags, job.tags)
      })
      return tags
    },
    filteredJobs () {
      let activeTag = this.activeTag
      let orderedJobs = orderBy(this.jobs, ['weight'], ['asc'])

      if (activeTag === 'all') {
        return orderedJobs
      } else {
        return orderedJobs.filter(job => job.tags.includes(activeTag))
      }
    },
    ...mapGetters({
      jobs: 'allJobs'
    })
  },
  data () {
    return {
      activeTag: 'all'
    }
  },
  methods: {
    setActiveTag ($event, tagName) {
      $('.tag').removeClass('active')
      if (tagName) {
        $($event.target).addClass('active')
        this.activeTag = tagName
        return
      }
      $('#tag-all').addClass('active')
      this.activeTag = 'all'
      return
    }
  },
  mounted () {
    document.title = 'Careers - Tendermint'
  }
}
</script>


<style lang="stylus" scoped>
@require '../../../styles/variables.styl'

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

.jobs
  max-width 48em
  margin 0 auto

.job
  border 1px solid bc
  padding 0.75*x x
  display block
  margin-bottom x
  max-width 48em

  .title
    color link
    font-weight 500

  .subtitle
    color dim
    font-size 0.75*x

  &:last-of-type
    margin-bottom 0
  &:hover
    border-color link

@media screen and (min-width: 720px)
  .tags
    margin-top 2*x

  .tag
    font-size x
  .job
    .title
      font-size 1.25*x
    .subtitle
      font-size x
</style>
