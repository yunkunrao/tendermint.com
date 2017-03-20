<template>
  <section class="ni-section">
    <div class="ni-section-container">
      <header class="ni-ni-section-header">
        <h2 class="ni-section-title">
          <slot name="title"></slot>
        </h2>
      </header>
      <main class="ni-section-main">
        <slot></slot>
      </main>
    </div>
  </section>
</template>

<style lang="stylus">
@require '../styles/variables.styl'

.ni-section
  border-bottom 1px solid bc
  background c-app-fg

  &:last-of-type
    border-bottom none

  &.ni-section-dark
    background mcolor linear-gradient(top, lighten(mcolor,5%), darken(mcolor,5%))
    background mcolor
    border-bottom-color lighten(mcolor, 10%)

    .ni-section-title, .key, a
      color lighten(mcolor,93%) !important

    .ni-section-main p, .value
      color lighten(mcolor,70%)

.ni-section-container
.ni-section-header
.ni-section-main
  &:empty
    display none

.ni-section-container
  max-width 1200px
  margin 0 auto

.ni-section-header
  padding 1rem 0

.ni-section-title
  font-weight 500
  color light
  font-size 1.25rem
  text-align center

.ni-section-main
  padding 1rem

@media screen and (min-width: 360px)
  .ni-section-main
    padding-left 1.5rem
    padding-right 1.5rem

@media screen and (min-width: 768px)
  .ni-section-title
    font-size 1.5rem

  .ni-section-main
    padding-left 2rem
    padding-right 2rem

@media screen and (min-width: 1024px)
  .ni-section-title
    text-align left
</style>
