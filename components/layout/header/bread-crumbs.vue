<template>
  <CBreadcrumb class="border-0 m-0">
    <CBreadcrumbItem
      v-for="(item, i) in crumbs"
      href="i == crumbs.length - 1 ? undefined : item.to"
      @click.prevent="i != crumbs.length - 1 && navigateTo(item.to)"
      :active="i == crumbs.length - 1"
    >
      {{ item.text }}
    </CBreadcrumbItem>
  </CBreadcrumb>
</template>

<script
  setup
  lang="ts"
>
import { capitalCase } from 'change-case';

const crumbs = computed(() => makeCrumbs());

const makeCrumbs = () => {
  const route = useRoute();
  const path = route.path;
  const pathSplit = () => path.split('/').splice(1);
  const crumbs = [];
  if (!path) return [];

  for (const [index, routeName] of pathSplit().entries()) {
    if (!routeName) continue;

    const text = capitalCase(routeName);
    const to = index ? `/${pathSplit().splice(0, index + 1).join('/')}` : `/${routeName}`;
    const crumb = { text, to };

    crumbs.push(crumb);
  }

  return crumbs;
}
</script>
