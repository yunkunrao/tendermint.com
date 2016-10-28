<template>
  <div id="page-community">
    <section id="section-top">
      <div class="section-container">
        <h1>Developer Guides</h1>
        <p>For a lighter introduction, see the <router-link :to="'/internals/introduction'">introduction</router-link>.</p>
      </div>
    </section>

    <section class="section-default section-flush">
      <div class="section-container">
        <div class="section-content">
          <div class="article-body">

            <h2>Application Development</h2>
            <p>
              Get started building your TMSP application or server by reading the
              <router-link :to="'/guides/app-dev'">application developer's guide</router-link>.
            </p>

            <h2>Application Architecture</h2>
            <p>
              To learn about integrating with clients, see the 
              <router-link :to="'/guides/app-architecture'">application architecture guide</router-link>.
            </p>

            <h2>Example Applications</h2>
            <p>See [example applications]() for motivation and inspiration!</p>

          </div><!--article-body-->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/variables.styl'
</style>
