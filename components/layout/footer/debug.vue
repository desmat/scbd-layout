<template>
  <div
    class="d-dev-flex flex-row gap-1 align-items-center ms-auto"
    :title="apiUrl"
  >
    <b>D E V E L O P M E N T</b>
    <span
      class="d-none d-md-inline"
      style="font-size:10px"
    >({{ apiUrl }})</span>

    <CBadge
      color="info"
      class="d-inline-block d-sm-none"
    >
      XS
    </CBadge>
    <CBadge
      color="info"
      class="d-none d-sm-inline-block d-md-none"
    >
      SM
    </CBadge>
    <CBadge
      color="info"
      class="d-none d-md-inline-block d-lg-none"
    >
      MD
    </CBadge>
    <CBadge
      color="info"
      class="d-none d-lg-inline-block d-xl-none"
    >
      LG
    </CBadge>
    <CBadge
      color="info"
      class="d-none d-xl-inline-block d-xxl-none"
    >
      XL
    </CBadge>
    <CBadge
      color="info"
      class="d-none d-xxl-inline-block"
    >
      XXL
    </CBadge>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  apiUrl: string,
}>();
</script>