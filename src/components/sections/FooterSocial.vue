<template>
  <section id="section-connections" class="section-default section-dark">
    <div class="section-container">
      <header class="section-header">
        <h2>Learn more by joining the&nbsp;discussion</h2>
      </header>
      <div class="section-content">
        <ul class="ul-connections">
          <li>
            <a href="http://forum.tendermint.com:3000">
              <h3><i class="fa fa-slick"></i> Slack</h3>
              <div class="content">
                <p>Get an invitation to join the discussion on our Slack.</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/tendermint_team">
              <h3><i class="fa fa-twatter"></i> Twitter</h3>
              <div class="content">
                <p>Follow <strong>@tendermint_team</strong> on Twitter for our latest updates.</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/tendermint/">
              <h3><i class="fa fa-footbook"></i> Facebook</h3>
              <div class="content">
                <p>Like and follow Tendermint on Facebook.</p>
              </div>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/tendermint">
              <h3><i class="fa fa-linkedout"></i> LinkedIn</h3>
              <div class="content">
                <p>View our profile and connect with us on LinkedIn.</p>
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
      border 1px solid dbc

      flex 1
      display flex
      flex-flow column no-wrap

      h3
        color lighten(mcolor,85%)
        font-size x
        font-weight 600
        i.fa
          padding-right 0.2em

      .content
        flex 1

      &:hover
        background lighten(mcolor,5%)

@media screen and (min-width: 400px)
  #section-connections ul.ul-connections
    li
      a
        h3
          border-bottom 1px dotted lighten(mcolor,15%)
          padding-bottom 0.5*x
          margin-bottom 0.5*x

@media screen and (min-width: 640px)
  #section-connections ul.ul-connections
    flex-flow row wrap
    li
      flex 1 0 50%
      padding 0.5*x
      a
        padding-top 1.25*x
        padding-bottom 1.25*x

@media screen and (min-width: 1024px)
  #section-connections ul.ul-connections
    li
      flex 1 0 25%
      a
        padding-bottom 1.5*x
        h3
          padding-bottom 0.75*x
          margin-bottom 0.75*x
</style>
