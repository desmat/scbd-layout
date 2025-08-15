<template>
  <div :class='{ dev: isDevelopment }'>
    <LayoutSidebar />
    <div class="wrapper d-flex flex-column min-vh-100">
      <LayoutHeader />
      <div class="body flex-grow-1">
        <CContainer
          fluid
          class="d-grid gap-4 px-4"
        >
          <slot />
        </CContainer>
      </div>
      <LayoutFooter />
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
const isDevelopment = true;
</script>
