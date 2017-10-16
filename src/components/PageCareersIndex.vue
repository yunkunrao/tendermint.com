<template>
  <page-split class="page-careers-index">
    <page-header
      title="Careers"
      subtitle="Join us at Tendermint to build and improve <a href='https://cosmos.network'>Cosmos</a> and Tendermint.<br><br>Jobs here are constantly updated. If your specialty is unlisted, we encourage you to still apply."
      type="split"
      slot="header"
      theme="tendermint">
      <!--
      <div class="tags">
        <div id="tag-all" class="tag active" @click="setActiveTag($event)">all</div>
        <div class="tag" v-for="tag in tags" @click="setActiveTag($event,tag)">{{ tag }}</div>
      </div>
      -->
    </page-header>
    <ni-section v-if="technical.length > 0">
      <div slot="title">Technical Positions</div>
      <card-career v-for="c in technical" :key="c.id" :career="c"></card-career>
    </ni-section>
    <ni-section v-if="operations.length > 0">
      <div slot="title">Operations Positions</div>
      <card-career v-for="c in operations" :key="c.id" :career="c"></card-career>
    </ni-section>
    <ni-section v-if="community.length > 0">
      <div slot="title">Community Positions</div>
      <card-career v-for="c in community" :key="c.id" :career="c"></card-career>
    </ni-section>
  </page-split>
</template>

<script>
import $ from 'jquery'
import { mapGetters } from 'vuex'
import { union, orderBy } from 'lodash'
import CardCareer from './CardCareer'
import NiSection from './NiSection'
import PageHeader from '@nylira/vue-page-header'
import PageSplit from '@nylira/vue-page-split'
export default {
  name: 'page-careers-index',
  components: {
    CardCareer,
    NiSection,
    PageHeader,
    PageSplit
  },
  computed: {
    tags () {
      let tags = []
      this.careers.map(function (career) {
        tags = union(tags, career.tags)
      })
      return tags
    },
    technical () {
      return this.careers.filter(c => c.area === 'technical' && c.weight !== 0)
    },
    operations () {
      return this.careers.filter(c => c.area === 'operations' && c.weight !== 0)
    },
    community () {
      return this.careers.filter(c => c.area === 'community' && c.weight !== 0)
    },
    careers () {
      let orderedCareers = orderBy(this.allCareers, ['title'], ['asc'])
      return orderedCareers
    },
    ...mapGetters(['allCareers'])
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


<style lang="stylus">
@require '../styles/variables.styl'

.page-careers-index
  .tags
    margin-top 1rem
    text-align center
    max-width 40*x
    display flex
    flex-flow row wrap

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

@media screen and (min-width: 768px)
  .page-careers-index
    .tag
      font-size x

@media screen and (min-width: 1024px)
  .page-careers-index
    .tags
      justify-content flex-start
</style>
