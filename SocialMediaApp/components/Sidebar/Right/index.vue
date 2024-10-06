<template>
    <div class="flex flex-col"> 

        <!-- Search bar -->
         <div class="relative m-2">

            <div class="absolute flex items-center h-full pl-4 text-gray-600 cursor-pointer">
                <div class="w-6 h-6">
                    <MagnifyingGlassIcon @click="handleSearch" />
                </div>
            </div>

                <input
                    v-model="search"
                    class="flex items-center w-full pl-12 text-sm font-normal text-black dark:text-gray-100 bg-gray-200 border border-gray-200 rounded-full shadow dark:bg-dim-400 dark:border-dim-400 focus:bg-gray-100 dark:focus:bg-dim-900 focus:outline-none focus:border-blue-200 h-9"
                    placeholder="Search..."
                    type="text">                    

         </div>
       
        <!-- What's happening -->
        <SidebarRightPreviewCard title="Whats happening">
            <SidebarRightPreviewCardItem v-for="whatsHappening in whatsHappeningItems">
                <div>
                    <h2 class="font-bold text-gray-800 text-md dark:text-white">{{ whatsHappening.title }}</h2>
                    <p class="text-xs text-gray-400">{{ whatsHappening.count }}</p>
                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>


        <SidebarRightPreviewCard title="Who to follow">
            <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems">
                <div class="flex flex-row justify-between p-2 items-center">
                    <div class="flex flex-row">
                        
                        <img class="w-10 h-10 rounded-full" :src="whoToFollow.image" :alt="whoToFollow.name">
                        <div class="flex flex-col ml-2">
                            <h1 class="text-sm font-bold text-gray-900 dark:text-white">{{ whoToFollow.name }}</h1>
                            <p class="text-sm text-gray-400">{{ whoToFollow.handle }}</p>
                        </div>

                    </div>
                    <div class="flex h-full">
                        <button class="px-4 py-2 font-bold text-xs text-white dark:text-gray-900 bg-black dark:bg-white rounded-full">Follow</button>
                    </div>
                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>

        <footer>
            <ul class="mx-2 my-4 text-xs text-gray-500">
                <li class="inline-block mx-2">
                    <a href="" class="hover:underline" @click.prevent="handleDarkMode">Dark mode</a>
                </li>
                <li class="inline-block mx-2">
                    <a href="" class="hover:underline">Privacy Policy</a>
                </li>
                <li class="inline-block mx-2">
                    <a href="" class="hover:underline">Cookie Policy</a>
                </li>
                <li class="inline-block mx-2">
                    <a href="" class="hover:underline">Accessability</a>
                </li>
                <li class="inline-block mx-2">
                    <a href="" class="hover:underline">Ads info</a>
                </li>
                <li class="inline-block mx-2">
                    <a href="" class="hover:underline">More</a>
                </li>
            </ul>
        </footer>

    </div>
</template>
<script setup>

import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline"

const search = ref('')

function handleSearch()
{
    useRouter().push({
        path:'/search',
        query: {
            q: search.value
        }
    })
}

const whatsHappeningItems = ref([
    {
        title: 'SpaceX',
        count: '20k Tweets'
    },
    {
        title: 'SpaceX',
        count: '20k Tweets'
    },
    {
        title: 'SpaceX',
        count: '20k Tweets'
    }
])

const whoToFollowItems = ref([
    {
        name: 'Sample Text',
        handle: '@sample',
        image: 'https://randomuser.me/api/portraits/women/74.jpg'
    },
    {
        name: 'Sample Text',
        handle: '@sample',
        image: 'https://randomuser.me/api/portraits/women/51.jpg'
    },
    {
        name: 'Sample Text',
        handle: '@sample',
        image: 'https://randomuser.me/api/portraits/women/77.jpg'
    }
])

const emitter = useEmitter();

function handleDarkMode()
{
    emitter.$emit('toggleDarkMode');
}

</script>