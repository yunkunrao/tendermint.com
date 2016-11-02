<template>
  <div id="page-index">
    <section-home-hero></section-home-hero>
    <section-home-benefits></section-home-benefits>
    <section-home-architecture></section-home-architecture>
    <section-home-resources></section-home-resources>
    <section-home-recruiting></section-home-recruiting>

    <section class="section-default">
      <div class="section-container">
        <header class="section-header">
          <h2>Watch an interview with the Tendermint team</h2>
        </header>
        <div class="section-content">
          <div class="youtube" id="EfFVh1DIKds"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SectionHomeHero from '../sections/HomeHero'
import SectionHomeBenefits from '../sections/HomeBenefits'
import SectionHomeArchitecture from '../sections/HomeArchitecture'
import SectionHomeResources from '../sections/HomeResources'
import SectionHomeRecruiting from '../sections/HomeRecruiting'

import $ from 'jquery'

export default {
  components: {
    SectionHomeHero,
    SectionHomeBenefits,
    SectionHomeArchitecture,
    SectionHomeResources,
    SectionHomeRecruiting
  },
  mounted () {
    // better youtube embeds
    $('.youtube').each(function () {
      // Set the BG image from the youtube ID
      $(this).css('background-image', 'url(//i.ytimg.com/vi/' + this.id + '/hqdefault.jpg)')

      // Click the video div
      $(document).delegate('#' + this.id, 'click', function () {
        // Build embed URL
        let iframeUrl = '//www.youtube.com/embed/' + this.id + '?autoplay=1&autohide=1'

        // Grab extra parameters set on div
        if ($(this).data('params')) {
          iframeUrl += '&' + $(this).data('params')
        }

        // Build iframe tag
        let iframe = $('<iframe/>', { 'allowfullscreen': 'allowfullscreen', 'frameborder': '0', 'src': iframeUrl })

        // Replace the YouTube thumbnail with YouTube HTML5 Player
        $(this).append(iframe)
      })
    })
  }
}
</script>
