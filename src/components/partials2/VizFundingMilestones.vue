<template>
  <div id="viz-funding-milestones">
    <div class="ms">
      <div class="ms-top">
        <div class="ms-status">Unmet</div>
        <div class="ms-amount">$3,000,000</div>
      </div>
      <div class="ms-bot">
        <div class="ms-progress"><span>0%</span></div>
        <div class="ms-desc">
          <div>Essential Cosmos software will be created.</div>
          <div>If the crowdfund does not meet the minimum, the funds will be returned.</div>
        </div>
      </div>
    </div>
    <div class="ms">
      <div class="ms-top">
        <div class="ms-status">Unmet</div>
        <div class="ms-amount">$5,000,000</div>
      </div>
      <div class="ms-bot">
        <div class="ms-progress"><span>0%</span></div>
        <div class="ms-desc">
          <div>Ethereum peg.</div>
        </div>
      </div>
    </div>
    <div class="ms">
      <div class="ms-top">
        <div class="ms-status">Unmet</div>
        <div class="ms-amount">$7,000,000</div>
      </div>
      <div class="ms-bot">
        <div class="ms-progress"><span>0%</span></div>
        <div class="ms-desc">
          <div>Bitcoin peg.</div>
        </div>
      </div>
    </div>
    <div class="ms">
      <div class="ms-top">
        <div class="ms-status">Unmet</div>
        <div class="ms-amount">$8,000,000</div>
      </div>
      <div class="ms-bot">
        <div class="ms-progress"><span>0%</span></div>
        <div class="ms-desc">
          <div>Open-source hardware wallet (sold separately)</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'

#viz-funding-milestones
  margin 1.5rem 0

  .ms
    border 1px solid bc
    background #fff
    margin 0 0 1rem
    padding 1.5rem 0 1rem

    .ms-top
      display flex
      margin 0 0 1rem
      .ms-status
        flex 1
        text-align center
        color dim
      .ms-amount
        flex 2
        padding-right 1rem
        font-weight 500

    .ms-bot
      display flex
      .ms-progress
        flex 1
        text-align center
        padding 0 0 0.5rem

        span
          display inline-block
          width 3rem
          height 3rem
          border-radius 1.5rem
          background light

          color #fff
          text-align center
          line-height 3rem

      .ms-desc
        padding-right 1rem
        flex 2
        div
          display block
          margin 0 0 0.5rem

@media screen and (min-width: 768px)
  #viz-funding-milestones
    .ms .ms-top .ms-amount
    .ms .ms-bot .ms-desc
      flex 3
</style>
