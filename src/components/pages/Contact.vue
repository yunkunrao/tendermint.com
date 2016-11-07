<template>
  <div id="page-blog-index">
    <section id="section-top">
      <div class="section-container">
        <div class="article-wrapper">
          <h1>Contact</h1>
          <p>Get in touch with us</p>
        </div>
      </div>
    </section>

    <section class="section-default">
      <div class="section-container">
        <div class="section-content article-body">
          <a class="btn btn-primary btn-large" href="mailto:hello@tendermint.com">hello@tendermint.com</a>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  head: {
    title: {
      inner: 'Contact'
    }
  },
  methods: {
  }
}
</script>


<style lang="stylus" scoped>
@require '../../styles/variables.styl'
</style>
