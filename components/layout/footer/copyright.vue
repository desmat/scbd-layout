<template>
    <div class="ms-auto">
      <a
        chref="https://www.cbd.int/secretariat"
        target="_blank"
      >
        SCBD
      </a>
      <span class="ms-1">&copy; {{ currentYear }}</span>
    </div>
</template>

<script
  setup
  lang="ts"
>
const currentYear = computed(() => new Date().getFullYear());
</script>
