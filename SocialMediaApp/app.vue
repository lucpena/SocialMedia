<template>
    <div class="" :class="{ 'dark': darkMode }">
        <div class="bg-white dark:bg-dim-900">

            <div v-if="user" class="min-h-full">
                <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">

                    <!-- Left Sidebar -->
                    <div class="hidden md:block xs:col-span-1 xl:col-span-2 bg-blue-500/20">
                        <div class="sticky top-0">
                            <SidebarLeft />
                        </div>
                    </div>

                    <!-- Main Content -->
                    <main class="col-span-12 md:col-span-8 xl:col-span-6 bg-red-500/20">
                        <router-view />
                    </main>

                    <!-- Right Sidebar -->
                    <div class="hidden md:block md:col-span-3 xl:col-span-4 bg-green-500/20">
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

    const darkMode = ref( false )
    
    const { useAuthUser, initAuth } = useAuth()
    const user = useAuthUser()

    onBeforeMount(() => { initAuth() })

</script>