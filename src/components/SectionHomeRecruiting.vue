<template>
<section class="section-default section-home-recruiting">
  <div class="section-container">

    <header class="section-header">
      <h2>Tendermint Resources</h2>
    </header>

    <div class="section-content">

      <div class="panels">
        <div class="panel">
          <div class="panel-container">
            <div class="panel-header">
              <div class="panel-title"><router-link :to="'/blog'">Blog</router-link></div>
            </div>
            <div class="panel-body">
              <router-link :to="'/blog/' + post.slug" v-for="post in limitedPosts">
                <div class="key">{{ post.title }}</div>
                <div class="value">{{ post.dateFriendly }}</div>
              </router-link>
            </div><!--panel-body-->
          </div><!--panel-container-->
        </div><!--panel-->

        <div class="panel">
          <div class="panel-container">
            <div class="panel-header">
              <div class="panel-title"><router-link :to="'/presentations'">Presentations</router-link></div>
            </div>
            <div class="panel-body">
              <ul>
                <li v-for="presentation in limitedPresentations">
                  <router-link :to="'/presentations/' + presentation.slug">
                    <div class="key">{{ presentation.title }}</div class="key">
                    <div class="value">{{ presentation.description }}</p>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div><!--panel-->

        <div class="panel panel-external">
          <div class="panel-container">
            <div class="panel-header">
              <div class="panel-title"><router-link :to="'/media'">Media Mentions</router-link></div>
            </div>
            <div class="panel-body">
              <ul>
                <li v-for="medium in limitedMedia">
                  <a :href="medium.url">
                    <div class="key">{{ medium.title }}</div>
                    <div class="value">{{ medium.company}} &ndash; {{ medium.date }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div><!--panel-->
      </div><!--panels-->
    </div><!--section-content-->
  </div><!--section-container-->
</section>
</template>

<script>
import { mapGetters } from 'vuex'
import { orderBy } from 'lodash'

export default {
  name: 'section-home-recruiting',
  computed: {
    limitedMedia () { return orderBy(this.media, ['date'], ['desc']).slice(0, 4) },
    limitedPosts () { return orderBy(this.posts, ['date'], ['desc']).slice(0, 5) },
    limitedPresentations () { return orderBy(this.presentations, ['date'], ['desc']).slice(0, 4) },
    ...mapGetters({
      media: 'allMedia',
      posts: 'allPosts',
      presentations: 'allPresentations'
    })
  }
}
</script>
