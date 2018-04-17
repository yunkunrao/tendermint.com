<template lang="pug">
page(title="Downloads" subtitle="Check back periodically for new Tendermint releases.")
  text-container
    download-links
    h2 Install From Source
    p If you prefer, you can also install Tendermint #[a(href='https://tendermint.readthedocs.io/en/master/install.html') from source].
</template>

<script>
import DownloadLinks from "comp/DownloadLinks"
import Page from "common/NiPage"
import TextContainer from "common/NiTextContainer"
export default {
  name: "page-download",
  metaInfo: { title: "Downloads" },
  components: {
    DownloadLinks,
    Page,
    TextContainer
  }
}
</script>
