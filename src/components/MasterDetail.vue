<template>
  <div class="master-detail">
    <div class="master">
      <slot name="master"></slot>
    </div>
    <div class="detail">
      <slot name="detail"></slot>
    </div>
  </div>
</template>

<style lang="stylus">
@require '../styles/variables.styl'

.master-detail
  background c-app-fg
  min-height 100vh

.master-detail + .app-bottom .section-bottom
  display none

.master 
  position fixed
  top 0
  left 0
  width 100vw
  z-index 1

  nav
    padding-top 3*x
    padding-bottom x*0.75
    position relative
    height 100vh
    overflow-y scroll
    z-index 10
    background c-app-bg

  .btn-thumb
    display block

  &.mobile-active nav
    display block

  &.mobile-inactive nav
    display none

  .title
    font-size 0.75*x
    font-weight bold
    text-transform uppercase
    letter-spacing 0.0625em
    line-height 2
    padding x x*1.5 x*0.25

    color lighten(mcolor, 40%)

  a + .title
    margin-top 0.75*x
  a
    display block
    padding 0.25*x x*1.5
    padding-left 1.25*x
    position relative
    border-left 0.25*x solid transparent

    color txt
    color lighten(mcolor,75%)

    &:hover
      color lighten(mcolor,90%)
      border-left-color link
    &.router-link-active
      color lighten(mcolor,75%)
      border-left-color link

@media screen and (min-width: 768px)
  .master
    width 30vw

    nav
      padding-top 3.5*x

    .btn-thumb
      display none !important

  .detail
    margin-left 30vw
    padding-left 0.5rem
    padding-right 0.5rem

  .master-detail + .app-bottom .section-cosmos
    padding-left 230.39px !important

  .master-detail + .app-bottom .app-footer
    .sections
      padding-left 216px + 3*x !important
    section
      flex 0 0 50% !important

@media screen and (min-width: 1024px)
  .master-detail + .app-bottom .section-cosmos
    padding-left 307.19px !important

  .master-detail + .app-bottom .app-footer
    .sections
      padding-left 320px + x !important
      padding-right x !important
    section
      flex 0 0 25% !important

  .detail
    padding-left 1.75rem
    padding-right 1.75rem

@media screen and (min-width: 1280px)
  .master
    width 25vw
  .detail
    margin-left 25vw
</style>
