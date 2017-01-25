<template>
  <form action="//tendermint.us8.list-manage.com/subscribe/post?u=89d5a312be95ee3f0c9cf7ecd&amp;id=4af1217bca" method="post" name="mc-embedded-subscribe-form" class="form-email-signup validate form" target="_blank" novalidate>

    <div class="input-group">
      <vue-input
        id="mce-EMAIL"
        name="EMAIL"
        input-type="email"
        input-size="large"
        input-placeholder="name@example.com"
        input-style="tendermint">
      </vue-input>
      <vue-button
        btn-type="submit"
        btn-value="Alert"
        btn-size="large"
        btn-style="tendermint"
        id="mc-embedded-subscribe">
      </vue-button>
    </div>

    <!-- anti-bot signups-->
    <div style="position: absolute; left: -5000px;">
      <input type="text" name="b_89d5a312be95ee3f0c9cf7ecd_4af1217bca" tabindex="-1" value="">
    </div>
  </form>
</template>

<script>
import VueInput from '@nylira/vue-input'
import VueButton from '@nylira/vue-button'
export default {
  name: 'form-email-signup',
  components: {
    VueButton,
    VueInput
  }
}
</script>
<style lang="stylus">
.form-email-signup
  .input-group
    display flex
</style>
