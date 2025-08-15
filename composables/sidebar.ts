import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {
  const visible = ref<boolean | undefined>(undefined);
  const unfoldable = ref(false);

  const toggleVisible = (value?: boolean | undefined) => {
    visible.value = value !== undefined ? value : !visible.value;
  }

  const toggleUnfoldable = () => {
    unfoldable.value = !unfoldable.value;
  }

  return { visible, unfoldable, toggleVisible, toggleUnfoldable }
});
