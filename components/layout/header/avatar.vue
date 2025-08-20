<template>
  <CAvatar size="md">
    <Avatar
      v-if="user.isAuthenticated"
      :username="user.name"
      size="40"
      class="d-flex justify-content-center align-items-center"
    />
    <CIcon
      v-else
      icon="cil-user"
    />
  </CAvatar>
</template>

<script setup lang="ts">
// @ts-ignore
import Avatar from '@webzlodimir/vue-avatar';

defineProps<{
  user: { name: string, isAuthenticated: boolean },
}>();
</script>
