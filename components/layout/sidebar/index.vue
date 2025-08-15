<template>
  <CSidebar
    class="border-end"
    colorScheme="dark"
    position="fixed"
    :unfoldable="sidebar.unfoldable"
    :visible="sidebar.visible"
    @visible-change="(value: boolean) => sidebar.toggleVisible(value)"
  >
    <CSidebarHeader class="border-bottom">
      <RouterLink
        custom
        to="/"
        v-slot="{ href, navigate }"
      >
        <CSidebarBrand
          v-bind="$attrs"
          as="a"
          :href="href"
          @click="navigate"
          class="mx-auto"
        >
          <LayoutSidebarBrand />
        </CSidebarBrand>
      </RouterLink>
      <CCloseButton
        class="d-lg-none"
        dark
        @click="sidebar.toggleVisible()"
      />
    </CSidebarHeader>
    <div class="d-dev-block text-center fw-bolder pt-2">
      D E V E L O P M E N T
    </div>
    <CSidebarNav>
      <LayoutSidebarContent />
    </CSidebarNav>
    <CSidebarFooter
      class="border-top d-none d-lg-flex"
      @click="sidebar.toggleUnfoldable()"
    >
      <CSidebarToggler />
    </CSidebarFooter>
  </CSidebar>
</template>

<script
  setup
  lang="ts"
>
const sidebar = useSidebarStore();
</script>

<style scoped>
.sidebar-footer{
  justify-content: end;
  cursor: pointer;
}
.sidebar-footer .sidebar-toggler {
  --cui-sidebar-toggler-color: var(--cui-tertiary-color);
  --cui-sidebar-toggler-hover-color: var(--cui-tertiary-color);  
}
.sidebar-footer:hover .sidebar-toggler {
  --cui-sidebar-toggler-color: var(--cui-secondary-color);
  --cui-sidebar-toggler-hover-color: var(--cui-secondary-color);  
}
</style>