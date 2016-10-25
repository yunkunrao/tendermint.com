<template>
  <!-- MailChimp Signup Form -->
  <form action="http://tendermint.us8.list-manage1.com/subscribe/post?u=89d5a312be95ee3f0c9cf7ecd&amp;id=4af1217bca" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>

    <div class="input-group">
      <input type="email" name="EMAIL" id="mce-EMAIL" placeholder="Enter your email">
    </div>

    <div class="input-group">
      <button name="subscribe" id="mc-embedded-subscribe" class="btn btn-primary">
        <i class="fa fa-newspaper-o"></i> Subscribe
      </button>
    </div>

    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;"><input type="text" name="b_89d5a312be95ee3f0c9cf7ecd_4af1217bca" tabindex="-1" value=""></div>
  </form>
</template>

<style lang="stylus" scoped>
@require '../../styles/variables.styl'

#mc-embedded-subscribe-form
  max-width 20*x
  width 100%

  background hsla(0,0,0,.25)
  padding 0.25*x
  margin 0 auto

  display flex
  flex-flow column no-wrap

  .input-group
    margin 0.25*x
    flex 1

    input, button
      vertical-align top
      width 100%

@media screen and (min-width: 480px) and (max-height: 480px)
  #mc-embedded-subscribe-form
    flex-flow row no-wrap
    max-width 30*x
</style>
