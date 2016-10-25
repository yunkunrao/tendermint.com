<template>
  <div id="viz-timeline">
    <div class="event">
      <div class="key">2016-08-04</div>
      <div class="value">5% of Genesis atoms are sold in a prefund.</div>
    </div>
    <div class="event">
      <div class="key">2016-08-xx</div>
      <div class="value">The Canadian non-profit Cosmos Foundation is created.</div>
    </div>
    <div class="event">
      <div class="key">2016-10-17</div>
      <div class="value">The crowdfund begins.</div>
    </div>
    <div class="event">
      <div class="key">EoCF</div>
      <div class="value">The crowdfund ends (EoCF) after 42 days or when the $9,000,000 cap is reached.</div>
    </div>
    <div class="event">
      <div class="key">EoCF + 2 months</div>
      <div class="value">The alpha release candidate of TendermintCore is ready for security audit.</div>
    </div>
    <div class="event">
      <div class="key">EoCF + 4 months</div>
      <div class="value">The alpha release of TendermintCore.</div>
    </div>
    <div class="event">
      <div class="key">EoCF + 7 months</div>
      <div class="value">The alpha release candidate of Cosmos Hub for is ready for security audit.</div>
    </div>
    <div class="event">
      <div class="key">EoCF + 9 months</div>
      <div class="value">The alpha release of Cosmos Hub.</div>
    </div>
    <div class="event">
      <div class="key">EoCF + 10 months</div>
      <div class="value">The launch of Cosmos Hub alpha.</div>
    </div>
    <div class="event">
      <div class="key">EoCF + 12 months</div>
      <div class="value">The sale of a compatible open-source hardware wallet begins.</div>
    </div>
    <div class="event">
      <div class="key">EoCF + 13 months</div>
      <div class="value">The beta release candidate of Alpha Hub for ready for security audit.</div>
    </div>
    <div class="event">
      <div class="key">EoCF + 15 months</div>
      <div class="value">The launch of Cosmos Hub beta.</div>
    </div>
    <div class="event">
      <div class="key">EoCF + 15 months+</div>
      <div class="value">Continuous development with the timeline set by Cosmos Foundation.</div>
    </div>
    <div class="event">
      <div class="key">&ndash;</div>
      <div class="value">Timeline for Bitcoin and Ethereum pegs will be set after alpha release of Cosmos Hub, and depends on funding and partnership</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'

#viz-timeline
  .event
    margin 0 0 1rem
    border 1px solid bc
    background #fff

    display flex

    .key
      flex 1
      padding 0.75rem
      background mbg

      font-size 0.75rem

    .value
      flex 3
      border-left 1px dotted bc
      padding 0.75rem

@media screen and (min-width: 768px)
  #viz-timeline
    .event
      .key, .value
        padding 1rem
</style>
