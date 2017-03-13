<template>
  <div class="page-split page-software-ecosystem">
    <page-header
      title="Ecosystem"
      subtitle="Explore Tendermint's software ecosystem."
      type="split"
      theme="tendermint">
      <field
        type="text"
        placeholder="Search..."
        theme="tendermint"
        size="large"
        v-model="searchQuery">
      </field>
    </page-header>

    <div class="page-content">

      <section class="section-default" v-show="abciApps.length > 0">
        <div class="section-container">
          <card-title>ABCI Apps</card-title>
          <div class="section-content">
            <div class="software-header">
              <div class="name active" @click="reorderBy('name')">Title</div>
              <div class="author" @click="reorderBy('author')">Author</div>
              <div class="tech" @click="reorderBy('tech')">Language</div>
              <div class="description" @click="reorderBy('description')">Description</div>
            </div>
            <div class="software-list">
              <div class="software" v-for="entry in abciApps"><a :href="entry.url">
                  <div class="name">{{ entry.name }}</div>
                  <div class="author">
                    <span class="key">
                      Author:</span><span class="value">{{ entry.author }}
                    </span>
                  </div>
                  <div class="language">
                    <span class="key">
                      Language:</span><span class="value">{{ entry.language }}
                    </span>
                  </div>
                  <div class="description">{{ entry.description }}</div>
              </a></div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-default" v-show="abciServers.length > 0">
        <div class="section-container">
          <card-title>ABCI Servers</card-title>
          <div class="section-content">
            <div class="software-header">
              <div class="name active" @click="reorderBy('name')">Title</div>
              <div class="author" @click="reorderBy('author')">Author</div>
              <div class="tech" @click="reorderBy('tech')">Language</div>
            </div>
            <div class="software-list">
              <div class="software" v-for="entry in abciServers"><a :href="entry.url">
                  <div class="name">{{ entry.name }}</div>
                  <div class="author">
                    <span class="key">
                      Author:</span><span class="value">{{ entry.author }}
                    </span>
                  </div>
                  <div class="language">
                    <span class="key">
                      Language:</span><span class="value">{{ entry.language }}
                    </span>
                  </div>
              </a></div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-default" v-show="deploymentTools.length > 0">
        <div class="section-container">
          <card-title>Deployment Tools</card-title>
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
                    <span class="key">
                      Author:</span><span class="value">{{ entry.author }}
                    </span>
                  </div>
                  <div class="technology">
                    <span class="key">
                      Technology:</span><span class="value">{{ entry.technology }}
                    </span>
                  </div>
                  <div class="description">{{ entry.description }}</div>
              </a></div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-default" v-show="competitors.length > 0">
        <div class="section-container">
          <card-title>Competition (Collaborators?)</card-title>
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
                    <span class="key">
                      Author:</span><span class="value">{{ entry.author }}
                    </span>
                  </div>
                  <div class="language">
                    <span class="key">
                      Language:</span><span class="value">{{ entry.language }}
                    </span>
                  </div>
                  <div class="description">{{ entry.description }}</div>
              </a></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import PageHeader from '@nylira/vue-page-header'
import { mapGetters } from 'vuex'
import { orderBy } from 'lodash'
import $ from 'jquery'
import Fuse from 'fuse.js'
import Field from '@nylira/vue-input'
import CardTitle from './CardTitle'

export default {
  name: 'page-software-ecosystem',
  components: {
    PageHeader,
    Field,
    CardTitle
  },
  computed: {
    abciApps () {
      let key = this.activeKey
      let query = this.searchQuery
      if (key === 'tech') { key = ['language'] }
      if (key === 'name') { key = [app => app.name.toLowerCase()] }
      let results = orderBy(this.software.abciApps, key, ['asc'])

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
      let results = orderBy(this.software.abciServers, key, ['asc'])

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

<style lang="stylus">
@require '../styles/variables.styl'

.page-software-ecosystem
  .section-default .section-container .section-content
    padding 0.5rem 1rem

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

@media screen and (min-width: 720px)
  .page-software-ecosystem

    .section-default .section-container .section-content
      padding 0

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
