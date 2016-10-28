<template>
  <section id="section-connections" class="section-default section-dark">
    <div class="section-container">
      <header class="section-header">
        <h2>Learn more by joining the&nbsp;discussion</h2>
      </header>
      <div class="section-content">
        <ul class="ul-connections">
          <li>
            <a href="https://www.facebook.com/tendermint/">
              <h3><i class="fa fa-footbook"></i> Facebook</h3>
              <div class="content">
                <p>Like and follow us to get alerts on important news.</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/tendermint/tendermint">
              <h3><i class="fa fa-github"></i> GitHub</h3>
              <div class="content">
                <p>Learn about and contribute to our source code.</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/tendermint">
              <h3><i class="fa fa-linkedout"></i> LinkedIn</h3>
              <div class="content">
                <p>View our company profile and connect with us.</p>
              </div>
            </a>
          </li>
          <li>
            <a href="http://forum.tendermint.com:3000">
              <h3><i class="fa fa-slick"></i> Slack</h3>
              <div class="content">
                <p>Get an instant invitation to join the discussion.</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/tendermint_team">
              <h3><i class="fa fa-twatter"></i> Twitter</h3>
              <div class="content">
                <p>Follow <strong>@tendermint_team</strong> for our latest updates.</p>
              </div>
            </a>
          </li>
        </ul>
      </div><!--section-content-->
    </div><!--section-container-->
  </section>
</template>

<script>
export default {
  name: 'section-footer-social'
}
</script>

<style lang="stylus" scoped>
@require '../../styles/variables.styl'

#section-connections
  background mcolor
  .section-container
    border-bottom-color darken(mcolor, 10%)

#section-connections ul.ul-connections
  margin -0.25*x

  display flex
  flex-flow column no-wrap
  li
    padding 0.25*x
    background transparent
    border none

    flex 1
    display flex
    a
      padding 0.75*x x

      flex 1
      display flex
      flex-flow column no-wrap

      h3
        color lighten(mcolor,85%)
        font-size x
        font-weight 600
        margin-bottom 0.5*x
        i.fa
          padding-right 0.2em

      .content
        flex 1

@media screen and (min-width: 640px)
  #section-connections ul.ul-connections
    flex-flow row wrap
    li
      flex 0 0 50%
      padding 0.5*x
      a
        padding-top x
        padding-bottom x

@media screen and (min-width: 1024px)
  #section-connections ul.ul-connections
    li
      flex 0 0 20%
      a
        padding-top 2*x
        padding-bottom 2*x
</style>
