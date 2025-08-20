<template>
  <span v-if="!isAuthenticated">
    <LayoutSidebarNavGroup v-bind="securityGroup" />
  </span>

  <span v-else>
    <LayoutSidebarNavItem
      to="/"
      title="Dashboard"
      icon="cilHome"
    />

    <LayoutSidebarNavGroup
      v-if="isAuthenticated"
      v-bind="group"
      v-for="group of mainGroups"
    />
  </span>

</template>

<script
  setup
  lang="ts"
>
const { isAuthenticated, login } = useScbdAuth();
const { getRoutes } = useRouter();

const securityGroup = {
  name: "Security",
  items: [
    {
      to: "login",
      click: login,
      icon: 'cilUser'
    },
  ],
}

// NOTE: logic to resolve the route should be handled here not in nav-items
// also we should be trimming the empty groups from here

const mainGroups = [
  {
    name: "File System",
    items: getRoutes().sort((a, b) => a.path.localeCompare(b.path)).map((r) => ({
      to: r.path,
      title: r.name,
      icon: 'cilList',
    }))
  },
  {
    name: "Custom",
    items: [
      {
        to: "contacts",
        icon: 'cilContact',
        click: () => console.warn('NOT IMPLEMENTED')

      },
      {
        to: "organizations",
        icon: 'cilBuilding',
        click: () => console.warn('NOT IMPLEMENTED')
      },
    ],
  }
];
</script>

<style scoped>
.indent {
  padding-left: 1em;
}
</style>
