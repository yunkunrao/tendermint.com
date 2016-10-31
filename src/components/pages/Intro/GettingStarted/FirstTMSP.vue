<template>
  <div class="vue-component navigable">
    <div class="vue-page">
      <section id="section-top">
        <div class="section-container">
          <h1>First TMSP App</h1>
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
    <navigation></navigation>
  </div>
</template>

<script>
import MarkdownContent from '../../../../content/intro/getting-started/first-tmsp-app.md'
import Navigation from '../Navigation'
export default {
  components: {
    Navigation,
    MarkdownContent
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../../styles/variables.styl'
</style>
