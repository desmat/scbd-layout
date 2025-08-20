<template>
  <CDropdown
    placement="bottom-end"
    variant="nav-item"
  >
    <CDropdownToggle
      class="py-0 pe-0"
      :caret="false"
    >
      <LayoutHeaderAvatar :user="user" />
    </CDropdownToggle>
    <CDropdownMenu class="pt-0">
      <CDropdownHeader
        component="h6"
        class="bg-body-secondary text-body-secondary fw-semibold mb-2 rounded-top"
      >
        Account
      </CDropdownHeader>
      <CDropdownItem
        v-if="isAuthenticated"
        @click="profile"
        href="#"
      >
        <CIcon icon="cil-user" /> Profile
      </CDropdownItem>
      <CDropdownItem
        v-if="isAuthenticated"
        @click="logout"
        href="#"
      >
        <CIcon icon="cil-lock-locked" /> Logout
      </CDropdownItem>
      <CDropdownItem
        v-if="!isAuthenticated"
        @click="login"
        href="#"
      >
        <CIcon icon="cil-user" /> Login
      </CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
</template>

<script setup>
const { user, isAuthenticated, login, logout, profile } = useScbdAuth();
</script>
