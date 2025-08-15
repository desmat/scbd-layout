<template>
  <CNavItem
    _v-if="canAccessRoute(route)"
    :name="to"
  >
    <component
      :is="click ? 'a' : 'RouterLink'"
      role="button"
      class="nav-link"
      :to="to"
      @click="(e: any) => { if (click) { e.preventDefault(); click(); } }"
    >
      <slot>
        <LayoutSidebarNavItemIcon :icon="icon" />
        {{ title || to }}
      </slot>
    </component>
  </CNavItem>
</template>

<script
  setup
  lang="ts"
>
const props = defineProps<{
  to?: string,
  click?: () => void
  title?: string
  icon?: string,
}>();

// import { capitalCase } from 'change-case';

// const { canAccessRoute } = useRouteSecurity();
// const { getRoutes } = useRouter();

// const resolvedRoute = getRoutes().find((r: any) => r.name === props.route);

// const resolvedLabel = computed(() => props.title || resolvedRoute?.meta?.title || capitalCase(props.route));
// const resolvedIcon = computed(() => props.icon || resolvedRoute?.meta?.icon);
// const resolvedPath = computed(() => resolvedRoute?.path || '');
</script>
