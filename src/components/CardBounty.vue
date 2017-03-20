<template>
  <div class="card-bounty">
    <router-link :to="/bounties/ + bounty.id">
      <main>
        <div class="title">{{ bounty.title }}</div>
        <div class="meta ">
          <span class="card-tag" v-for="tag in bounty.tags">{{tag}}</span>
        </div>
      </main>
      <div class="reward">
        <i class="fa fa-btc"></i>
        <span>{{ bounty.reward }}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import CardPost from './CardPost'
export default {
  name: 'card-bounty',
  components: {
    CardPost
  },
  props: ['bounty']
}
</script>


<style lang="stylus">
@require '../styles/variables.styl'

.card-bounty
  margin-bottom 1rem

  &:last-of-type
    margin-bottom 0

  a
    border 1px solid bc
    padding 0.75rem
    display block
    color txt
    &:hover .title
      color link

  .title
    font-weight bold
    line-height 1.25

  .meta
    font-weight 500
    line-height 2
    color light
    margin-bottom 0.5rem

  .card-tag
    margin-right 0.5rem

  .reward
    border 1px solid bc
    display flex
    width 10rem

    flex-flow row
    align-items center
    justify-content space-between

    i.fa
      width 2rem
      height 2rem
      border-right 1px solid bc
      color hsl(40,100%,50%)
      display flex
      align-items center
      justify-content center
    span
      flex 1
      text-align right
      height 2rem
      padding 0 0.5rem
      background lighten(bc, 50%)

      display flex
      align-items center
      justify-content flex-end

@media screen and (min-width: 414px)
  .card-bounty a
    padding 1rem
    .title
      font-size 1.125rem

@media screen and (min-width: 768px)
  .card-bounty a
    padding 1.5rem
    .title
      font-size 1.25em
</style>
