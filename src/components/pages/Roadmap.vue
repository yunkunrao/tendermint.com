<template>
  <div id="page-community">
    <section id="section-top">
      <div class="section-container">
        <h1>Roadmap</h1>
        <p>Where we're going for Tendermint V2.</p>
      </div>
    </section>

    <section class="section-default section-flush">
      <div class="section-container">
        <div class="section-content">
          <div class="article-body">
            <markdown-content></markdown-content>
          </div><!--article-body-->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MarkdownContent from '../../content/docs/roadmap.md'
export default {
  components: {
    MarkdownContent
  }
}
</script>

<style lang="stylus" scoped>
@require '../../styles/variables.styl'
</style>
