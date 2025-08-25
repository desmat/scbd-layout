<template>
  <!-- @vue-ignore-->
  <CIcon
    :icon="icons[`${icon}`]"
    size="lg"
    class="nav-icon"
  />
</template>

<script
  setup
  lang="ts"
>
import { CIcon } from '@coreui/icons-vue';
import * as icons from '@coreui/icons';

const props = defineProps<{
  icon?: string,
}>();
</script>
