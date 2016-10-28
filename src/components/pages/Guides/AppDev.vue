<template>
  <div id="page-community">
    <section id="section-top">
      <div class="section-container">
        <h1>Application Development</h1>
        <p>Developer Guide</p>
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
import MarkdownContent from '../../../content/docs/guides/app-dev.md'
export default {
  components: {
    MarkdownContent
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/variables.styl'
</style>
