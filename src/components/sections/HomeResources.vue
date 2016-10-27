<template>
<section class="section-default">
  <div class="section-container">

    <header class="section-header">
      <h2>Tendermint Resources</h2>
    </header>

    <div class="section-content">

      <div class="panels">
        <div class="panel">
          <div class="panel-container">
            <div class="panel-header">
              <h3><a href="/blog/" class="block">
                  <i class="fa fa-rss"></i> Blog
              </a></h3>
            </div>
            <div class="panel-body">
              <ul>
                <li v-for="post in limitedPosts">
                  <router-link :to="'/blog/' + post.slug">
                    <h4>{{ post.title }}</h4>
                    <!-- <p>{{ post.description }}</p> -->
                    <p>Posted on {{ post.dateFriendly }}</p>
                  </router-link>
                </li>
              </ul>
            </div><!--panel-body-->
          </div><!--panel-container-->
        </div><!--panel-->

        <div class="panel">
          <div class="panel-container">
            <div class="panel-header">
              <h3><a href="/presentations/" class="block">
                  <i class="fa fa-video-camera"></i> Presentations
              </a></h3>
            </div>
            <div class="panel-body">
              <ul>
                <li v-for="presentation in limitedPresentations">
                  <router-link :to="'/presentations/' + presentation.slug">
                    <h4>{{ presentation.title }}</h4>
                    <p>{{ presentation.description }}</p>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div><!--panel-->

        <div class="panel panel-external">
          <div class="panel-container">
            <div class="panel-header">
              <h3><a href="/media/" class="block">
                  <i class="fa fa-video-camera"></i> In the News
              </a></h3>
            </div>
            <div class="panel-body">
              <ul>
                <li v-for="medium in limitedMedia">
                  <a :href="medium.url">
                    <h4>{{ medium.title }}</h4>
                    <p>{{ medium.company}} &ndash; {{ medium.date }}</p>
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

<style lang="stylus" scoped>
@require '../../styles/variables.styl'
</style>
