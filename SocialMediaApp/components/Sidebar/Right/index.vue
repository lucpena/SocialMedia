<template>
    <div class="flex flex-col"> 
       
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

    </div>
</template>
<script setup>

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

</script>