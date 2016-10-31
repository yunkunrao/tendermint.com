<template>
  <div id="page-community" class="vue-component navigable">
    <div class="vue-page">
      <section id="section-top">
        <div class="section-container">
          <h1>Install Tendermint</h1>
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
import MarkdownContent from '../../../../content/intro/getting-started/install.md'
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
