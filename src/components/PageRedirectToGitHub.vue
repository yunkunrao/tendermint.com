<template lang='pug'>
redirect(
  label='Redirecting you to GitHub'
  url='https://github.com/tendermint'
)
</template>

<script>
import Redirect from './Redirect'
export default {
  name: 'page-redirect-to-medium',
  components: { Redirect }
}
</script>
