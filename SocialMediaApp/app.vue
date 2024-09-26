<template>
<div :class="{ 'dark': darkMode }">

  <div class="bg-neutral-100 dark:bg-dim-900">

    <!-- Main App -->
    <div class="min-h-full" v-if="user">
      <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">

        <!-- Left Sidebar -->
        <div class="hidden md:block xs-col-span-1 xl:col-span-2 border-2 border-red-500/30">
            <div class="sticky top-0">
              <SidebarLeft />
            </div>
        </div>
      
        <!-- Main Content -->
        <main class="col-span-12 md:col-span-8 xl:col-span-6 border-2 border-green-500/30">
          <router-view />
        </main>


        <!-- Right Sidebar -->
        <div class="hidden md:block xl:col-span-4 md:col-span-3 border-2 border-blue-500/30">
            <div class="sticky top-0">
              <SidebarRight />
            </div>
        </div>

      </div>
    </div>

    <AuthPage v-else />

  </div>

</div>
</template>

<script setup>

const darkMode = ref(false);
const {useAuthUser, initAuth} = useAuth();
const user = useAuthUser()

onBeforeMount(() => {
  initAuth()
})

</script>
