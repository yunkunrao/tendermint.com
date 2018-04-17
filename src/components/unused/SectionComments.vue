<template>
  <div class="section-comments">
    <div id="disqus_thread"></div>
    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
  </div>
</template>

<script>
export default {
  name: "section-comments",
  mounted() {
    /**
     * RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO
     * INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     * LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT:
     * https://disqus.com/admin/universalcode/#configuration-variables
     */
    /*
    var disqus_config = function () {
      this.page.url = PAGE_URL; // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    }
    */

    let d = document
    let s = d.createElement("script")

    s.src = "//tendermint.disqus.com/embed.js"

    s.setAttribute("data-timestamp", +new Date())

    let el = d.head || d.body

    el.appendChild(s)
  }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.section-comments
  max-width 44em
  margin 0 auto 1.5em
</style>
