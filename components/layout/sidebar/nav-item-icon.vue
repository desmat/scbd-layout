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

// NOTE: Only a subset of icons are included here as a demo
// If wanting to adopt these icons (as opposed to font-awesome for kronos for example)
// this would be the recommended approach: https://coreui.io/vue/docs/components/icon.html#icons-object
import { cilList, cilCircle, cilHome, cilBuilding, cilContact, cilListRich, cilUser } from '@coreui/icons';

// NOTE: this would be an alternative (but less ideal) approach
// import * as icons from '@coreui/icons';

const icons = { cilList, cilCircle, cilHome, cilBuilding, cilContact, cilListRich, cilUser };

const props = defineProps<{
  icon?: string,
}>();
</script>
