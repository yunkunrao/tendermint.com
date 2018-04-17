<template lang="pug">
page(title="Security" subtitle="Learn about security and vulnerability reports at Tendermint.")
  text-container(url='https://api.github.com/repos/tendermint/aib-data/contents/md/security.md')
</template>

<script>
import DownloadLinks from "comp/DownloadLinks"
import Page from "common/NiPage"
import TextContainer from "common/NiTextContainer"
export default {
  name: "page-security",
  metaInfo: { title: "Security" },
  components: {
    DownloadLinks,
    Page,
    TextContainer
  }
}
</script>
