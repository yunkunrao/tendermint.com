<template lang="pug">
page(title="Privacy Policy" subtitle="Learn about our privacy policy.")
  text-container
    markdown-content
</template>

<script>
import MarkdownContent from "content/privacy-policy.md"
import Page from "common/NiPage"
import TextContainer from "common/NiTextContainer"
export default {
  name: "page-privacy",
  metaInfo: { title: "Privacy Policy" },
  components: {
    MarkdownContent,
    Page,
    TextContainer
  }
}
</script>
