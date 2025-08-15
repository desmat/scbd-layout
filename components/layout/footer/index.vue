<template>
  <CFooter class="px-4 py-0 mt-4">
    <LayoutFooterContent />
    <LayoutFooterDebug :api-url="apiUrl" />
    <LayoutFooterCopyright />
  </CFooter>
</template>

<script
  setup
  lang="ts"
>
const apiUrl = 'TODO';
</script>
