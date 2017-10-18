<template lang='pug'>
redirect(
  label='Redirecting you to GitHub'
  :url='links.tm.github.organization'
)
</template>

<script>
import {mapGetters} from 'vuex'
import Redirect from './Redirect'
export default {
  name: 'page-redirect-to-medium',
  components: { Redirect },
  computed: { ...mapGetters(['links']) }
}
</script>
