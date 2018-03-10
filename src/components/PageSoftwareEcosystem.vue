<template lang="pug">
page-split.page-software-ecosystem
  page-header(title='Ecosystem', subtitle="Explore Tendermint's software ecosystem.", type='split', slot='header', theme='tendermint')
    field(type='text', placeholder='Search...', theme='tendermint', size='large', v-model='searchQuery')
  ni-section(v-show='abciApps.length > 0')
    card-title ABCI Apps
    .section-content
      .software-header
        .name.active(@click="reorderBy('name')") Title
        .author(@click="reorderBy('author')") Author
        .tech(@click="reorderBy('tech')") Language
        .description(@click="reorderBy('description')") Description
      .software-list
        .software(v-for='entry in abciApps'): a(:href='entry.url')
          .name {{ entry.name }}
          .author
            span.key Author:
            span.value {{ entry.author }}
          .language
            span.key Language:
            span.value {{ entry.language }}
          .description {{ entry.description }}

  ni-section(v-show='abciServers.length > 0')
    card-title ABCI Servers
    .section-content
      .software-header
        .name.active(@click="reorderBy('name')") Title
        .author(@click="reorderBy('author')") Author
        .tech(@click="reorderBy('tech')") Language
      .software-list
        .software(v-for='entry in abciServers'): a(:href='entry.url')
          .name {{ entry.name }}
          .author
            span.key Author:
            span.value {{ entry.author }}
          .language
            span.key Language:
            span.value {{ entry.language }}
          .description {{ entry.description }}

  ni-section(v-show='deploymentTools.length > 0')
    card-title Deployment Tools
    .section-content
      .software-header
        .name.active(@click="reorderBy('name')") Title
        .author(@click="reorderBy('author')") Author
        .tech(@click="reorderBy('tech')") Technology
        .description(@click="reorderBy('description')") Description
      .software-list
        .software(v-for='entry in deploymentTools'): a(:href='entry.url')
          .name {{ entry.name }}
          .author
            span.key Author:
            span.value {{ entry.author }}
          .language
            span.key Language:
            span.value {{ entry.language }}
          .description {{ entry.description }}

  ni-section(v-show='competitors.length > 0')
    card-title Competition
    .section-content
      .software-header
        .name.active(@click="reorderBy('name')") Title
        .author(@click="reorderBy('author')") Author
        .tech(@click="reorderBy('tech')") Language
        .description(@click="reorderBy('description')") Description
      .software-list
        .software(v-for='entry in competitors'): a(:href='entry.url')
          .name {{ entry.name }}
          .author
            span.key Author:
            span.value {{ entry.author }}
          .language
            span.key Language:
            span.value {{ entry.language }}
          .description {{ entry.description }}
</template>

<script>
import { mapGetters } from 'vuex'
import { orderBy } from 'lodash'
import $ from 'jquery'
import Fuse from 'fuse.js'
import Field from '@nylira/vue-input'
import CardTitle from './CardTitle'
import NiSection from './NiSection'
import PageHeader from '@nylira/vue-page-header'
import PageSplit from '@nylira/vue-page-split'
export default {
  name: 'page-software-ecosystem',
  components: {
    CardTitle,
    Field,
    NiSection,
    PageHeader,
    PageSplit
  },
  computed: {
    ...mapGetters(['ecosystem']),
    abciApps () {
      let key = this.activeKey
      let query = this.searchQuery
      if (key === 'tech') { key = ['language'] }
      if (key === 'name') { key = [app => app.name.toLowerCase()] }
      let results = orderBy(this.ecosystem.abciApps, key, ['asc'])

      if (query) {
        let options = {
          threshold: 0.25,
          keys: ['name', 'author', 'language', 'description']
        }
        let fuse = new Fuse(results, options)
        return fuse.search(this.searchQuery)
      }

      return results
    },
    abciServers () {
      let key = this.activeKey
      let query = this.searchQuery
      if (key === 'tech') { key = ['language'] }
      if (key === 'name') { key = [app => app.name.toLowerCase()] }
      let results = orderBy(this.ecosystem.abciServers, key, ['asc'])

      if (query) {
        let options = {
          threshold: 0.25,
          keys: ['name', 'author', 'language', 'description']
        }
        let fuse = new Fuse(results, options)
        return fuse.search(this.searchQuery)
      }

      return results
    },
    deploymentTools () {
      let key = this.activeKey
      let query = this.searchQuery
      if (key === 'tech') { key = ['technology'] }
      if (key === 'name') { key = [app => app.name.toLowerCase()] }
      let results = orderBy(this.ecosystem.deploymentTools, key, ['asc'])

      if (query) {
        let options = {
          threshold: 0.25,
          keys: ['name', 'author', 'technology', 'description']
        }
        let fuse = new Fuse(results, options)
        return fuse.search(this.searchQuery)
      }

      return results
    },
    competitors () {
      let key = this.activeKey
      let query = this.searchQuery
      if (key === 'tech') { key = ['language'] }
      if (key === 'name') { key = [app => app.name.toLowerCase()] }
      let results = orderBy(this.ecosystem.competitors, key, ['asc'])

      if (query) {
        let options = {
          threshold: 0.25,
          keys: ['name', 'author', 'language', 'description']
        }
        let fuse = new Fuse(results, options)
        return fuse.search(this.searchQuery)
      }
      return results
    }
  },
  data () {
    return {
      activeKey: 'name',
      searchQuery: ''
    }
  },
  methods: {
    reorderBy (key) {
      $('.software-header div').removeClass('active')
      $('.' + key).addClass('active')
      this.activeKey = key
      // console.log('reordering by', this.activeKey)
    }
  },
  mounted () {
    document.title = 'Software Ecosystem - Tendermint'
  }
}
</script>

<style lang="stylus">
@require '~variables'

.page-software-ecosystem
  .ni-page-header
    .ni-field
      margin-top 1rem
      max-width 20rem

  .software-header
    display none
    flex-flow row nowrap

    div
      padding 0.5rem 1rem
      color light
      cursor pointer

      &.active
        color txt

    .name
      flex 4
    .author
      flex 3
    .tech
      flex 3
    .description
      flex 8

  .software-list
    margin 0 -0.5*x

  .software
    padding 0.5*x

    display flex

    a
      flex 1
      padding 0.5*x x
      border 1px solid bc
      color txt

      &:hover
        border-color link

    .name
      font-weight bold
      color link

    .author, .technology, .language
      font-size 0.75*x
      color dim
      display inline
      span
        &.key
          margin-right 0.2em
        &.value
          margin-right 0.5em

    .description
      margin-top 0.5*x

@media screen and (min-width: 768px)
  .page-software-ecosystem
    .software-header
      display flex

    .software-list
      margin 0
      .software
        padding 0
        a
          display flex
          flex-flow row nowrap
          border none
          border-top 1px solid bc
          padding 0
          &:hover
            border-color bc
            background lighten(mcolor, 97%)

          .name, .author, .language, .technology, .description
            padding 0.5rem 1rem
            margin 0

          .name
            flex 4

          .author, .language, .technology
            flex 3
            font-size x
            color txt
            .key
              display none

          .description
            margin 0
            flex 8
</style>
