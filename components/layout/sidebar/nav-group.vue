<template>
  <span>
    <CNavTitle v-if="name">{{ name }}</CNavTitle>
    <LayoutSidebarNavItem
      v-for="item of items"
      v-bind="item"
    />
  </span>
</template>

<script
  setup
  lang="ts"
>

const props = defineProps<{
  name: string,
  items: any[],
}>();
</script>
