<template>
  <div id="page-community">
    <section id="section-top">
      <div class="section-container">
        <h1>Software Ecosystem</h1>
        <p>The Tendermint ecosystem is constantly growing.</p>
      </div>
    </section>

    <section class="section-default">
      <div class="section-container">
        <div class="section-header"><h2>TMSP Apps</h2></div>
        <div class="section-content">
          <div class="software-list">
            <div class="software" v-for="entry in tmspApps"><a :href="entry.url">
              <div class="title">{{ entry.name }}</div>
              <div class="meta">
                <span>Author: {{ entry.author }}</span>
                <span>Language: {{ entry.language }}</span>
              </div>
              <div class="description">{{ entry.description }}</div>
          </a></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-default">
      <div class="section-container">
        <div class="section-header"><h2>TMSP Servers</h2></div>
        <div class="section-content">
          <div class="software-list">
            <div class="software" v-for="entry in tmspServers"><a :href="entry.url">
              <div class="title">{{ entry.name }}</div>
              <div class="meta">
                <span>Author: {{ entry.author }}</span>
                <span>Language: {{ entry.language }}</span>
              </div>
          </a></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-default">
      <div class="section-container">
        <div class="section-header"><h2>Deployment Tools</h2></div>
        <div class="section-content">
          <div class="software-list">
            <div class="software" v-for="entry in deploymentTools"><a :href="entry.url">
              <div class="title">{{ entry.name }}</div>
              <div class="meta">
                <span>Author: {{ entry.author }}</span>
                <span>Technology: {{ entry.technology }}</span>
              </div>
              <div class="description">{{ entry.description }}</div>
          </a></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-default">
      <div class="section-container">
        <div class="section-header"><h2>Competition (Potential Collaborators!)</h2></div>
        <div class="section-content">
          <div class="software-list">
            <div class="software" v-for="entry in competitors"><a :href="entry.url">
              <div class="title">{{ entry.name }}</div>
              <div class="meta">
                <span>Author: {{ entry.author }}</span>
                <span>Language: {{ entry.language }}</span>
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

export default {
  components: {
  },
  computed: {
    tmspApps () { return orderBy(this.software.tmspApps, ['name'], ['asc']) },
    tmspServers () { return orderBy(this.software.tmspServers, ['name'], ['asc']) },
    deploymentTools () { return orderBy(this.software.deploymentTools, ['name'], ['asc']) },
    competitors () { return orderBy(this.software.competitors, ['name'], ['asc']) },
    ...mapGetters({
      software: 'allSoftware'
    })
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/variables.styl'

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

  .title
    font-weight bold
    color link

  .meta
    font-size 0.75*x
    color dim
    margin-bottom 0.5*x
    span
      margin-right x
      &:last-of-type
        margin-right 0

@media screen and (min-width: 720px)
  .software-list
    display flex
    flex-flow row wrap
    .software
      flex 0 0 50%
      .title
        font-size 1.25*x
</style>
