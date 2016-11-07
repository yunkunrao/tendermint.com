<template>
  <div class="component">
    <section id="section-top">
      <div class="section-container">
        <h1>Software Ecosystem</h1>
        <form class="form-default form-dark">
          <div class="input-group">
            <input type="text" placeholder="Search..." v-model="searchQuery">
          </div>
        <form>
      </div>
    </section>

    <section class="section-default" v-show="tmspApps.length > 0">
      <div class="section-container">
        <div class="section-header"><h2>TMSP Apps</h2></div>
        <div class="section-content">
          <div class="software-header">
            <div class="name active" @click="reorderBy('name')">Title</div>
            <div class="author" @click="reorderBy('author')">Author</div>
            <div class="tech" @click="reorderBy('tech')">Language</div>
            <div class="description" @click="reorderBy('description')">Description</div>
          </div>
          <div class="software-list">
            <div class="software" v-for="entry in tmspApps"><a :href="entry.url">
              <div class="name">{{ entry.name }}</div>
              <div class="author">
                <span class="key">Author:</span><span class="value">{{ entry.author }}</span>
              </div>
              <div class="language">
                <span class="key">Language:</span><span class="value">{{ entry.language }}</span>
              </div>
              <div class="description">{{ entry.description }}</div>
          </a></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-default" v-show="tmspServers.length > 0">
      <div class="section-container">
        <div class="section-header"><h2>TMSP Servers</h2></div>
        <div class="section-content">
          <div class="software-header">
            <div class="name active" @click="reorderBy('name')">Title</div>
            <div class="author" @click="reorderBy('author')">Author</div>
            <div class="tech" @click="reorderBy('tech')">Language</div>
          </div>
          <div class="software-list">
            <div class="software" v-for="entry in tmspServers"><a :href="entry.url">
              <div class="name">{{ entry.name }}</div>
              <div class="author">
                <span class="key">Author:</span><span class="value">{{ entry.author }}</span>
              </div>
              <div class="language">
                <span class="key">Language:</span><span class="value">{{ entry.language }}</span>
              </div>
          </a></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-default" v-show="deploymentTools.length > 0">
      <div class="section-container">
        <div class="section-header"><h2>Deployment Tools</h2></div>
        <div class="section-content">
          <div class="software-header">
            <div class="name active" @click="reorderBy('name')">Title</div>
            <div class="author" @click="reorderBy('author')">Author</div>
            <div class="tech" @click="reorderBy('tech')">Technology</div>
            <div class="description" @click="reorderBy('description')">Description</div>
          </div>
          <div class="software-list">
            <div class="software" v-for="entry in deploymentTools"><a :href="entry.url">
              <div class="name">{{ entry.name }}</div>
              <div class="author">
                <span class="key">Author:</span><span class="value">{{ entry.author }}</span>
              </div>
              <div class="technology">
                <span class="key">Technology:</span><span class="value">{{ entry.technology }}</span>
              </div>
              <div class="description">{{ entry.description }}</div>
          </a></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-default" v-show="competitors.length > 0">
      <div class="section-container">
        <div class="section-header"><h2>Competition (Potential Collaborators!)</h2></div>
        <div class="section-content">
          <div class="software-header">
            <div class="name active" @click="reorderBy('name')">Title</div>
            <div class="author" @click="reorderBy('author')">Author</div>
            <div class="tech" @click="reorderBy('tech')">Language</div>
            <div class="description" @click="reorderBy('description')">Description</div>
          </div>
          <div class="software-list">
            <div class="software" v-for="entry in competitors"><a :href="entry.url">
              <div class="name">{{ entry.name }}</div>
              <div class="author">
                <span class="key">Author:</span><span class="value">{{ entry.author }}</span>
              </div>
              <div class="language">
                <span class="key">Language:</span><span class="value">{{ entry.language }}</span>
              </div>
              <div class="description">{{ entry.description }}</div>
          </a></div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { orderBy } from 'lodash'
import $ from 'jquery'
import Fuse from 'fuse.js'

export default {
  name: 'page-software-ecosystem',
  computed: {
    tmspApps () {
      let key = this.activeKey
      let query = this.searchQuery
      if (key === 'tech') { key = ['language'] }
      if (key === 'name') { key = [app => app.name.toLowerCase()] }
      let results = orderBy(this.software.tmspApps, key, ['asc'])

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
    tmspServers () {
      let key = this.activeKey
      let query = this.searchQuery
      if (key === 'tech') { key = ['language'] }
      if (key === 'name') { key = [app => app.name.toLowerCase()] }
      let results = orderBy(this.software.tmspServers, key, ['asc'])

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
      let results = orderBy(this.software.deploymentTools, key, ['asc'])

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
      let results = orderBy(this.software.competitors, key, ['asc'])

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
    ...mapGetters({
      software: 'allSoftware'
    })
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

<style lang="stylus" scoped>
@require '../../styles/variables.styl'

.software-header
  display none
  flex-flow row nowrap

  div
    padding x 0.5*x
    color light
    font-weight bold
    cursor pointer

    &.active
      font-weight bold
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
    padding 0.75*x x
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

@media screen and (min-width: 720px)
  .software-header
    display flex

  .software-list
    margin 0
    .software
      padding 0
      a
        display flex
        flex-flow row nowrap
        border-bottom none
        border-left none
        border-right none
        padding 0
        &:hover
          border-color bc
          background lighten(mcolor, 97%)

        .name, .author, .language, .technology, .description
          padding x 0.5*x
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
