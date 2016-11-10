<template>
  <div class="component">
    <section id="section-top">
      <div class="section-container">
        <div class="article-wrapper">
          <h1>{{ career.title }}</h1>
          <p>{{ career.subtitle }}
        </div>
      </div>
    </section>

    <section class="section-default">
      <div class="section-container">
        <div class="section-content article-body">
          <h2>Responsibilities</h2>
          <ul class="responsibilities">
            <li v-for="r in career.responsibilities">{{ r }}</li>
          </ul>
          <h2>Apply for this role</h2>
          <p>Send an email with your cover letter and resume:</p>
          <a class="btn btn-primary btn-large" href="mailto:hello@tendermint.com">hello@tendermint.com</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head: {
    title: {
      inner: 'About'
    }
  },
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
  mounted () {
    // console.log(this.$route.params.entry)
    // console.log(this.careers)

    document.title = this.career.title + ' - Careers - Tendermint'
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

@media screen and (min-width: 720px)
  .tags
    margin-top 2*x

  .tag
    font-size x

</style>
