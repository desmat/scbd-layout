<template>
  <div
    v-if="isAuthenticated"
    style="background: pink;"
  >
    HEADER CONTENT HERE
  </div>
</template>

<script
  setup
  lang="ts"
>
const isAuthenticated = useState('isAuthenticated');
</script>