<template>
    <div class="flex flex-col">

        <!-- Card: what's happening -->
        <SidebarRightPreviewCard title="What's happening">
            <SidebarRightPreviewCardItem v-for="whatsHappening in whatsHappeningItems">
                <div>
                    <h2 class="font-bold text-gray-800 text-md dark:text-white">{{ whatsHappening.title }}</h2>
                    <p class="text-xs text-gray-400">{{ whatsHappening.count }}</p>
                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>

        <!-- Card: Who to follow -->
        <SidebarRightPreviewCard title="Who to follow">
            <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems">
                <div class="flex flex-row items-center justify-between p-2">

                    <!-- Left  -->
                    <div class="flex flex-row">
                        <img class="w-12 h-12 rounded-full" :src="whoToFollow.image" :alt="whoToFollow.name">
                        <div class="flex flex-col ml-2">
                            <h1 class="text-gray-900 dark:text-white font-bold text-lg">{{ whoToFollow.name }}</h1>
                            <p class="text-xs text-gray-500">{{ whoToFollow.handle }}</p>
                        </div>
                    </div>

                    <!-- Right -->
                    <div class="flex h-full">
                        <button
                            class="px-4 py-2 font-bold text-sm text-white dark:text-black bg-black dark:bg-white rounded-full">Follow</button>
                    </div>

                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>

    </div>
</template>
<script setup>

    const whatsHappeningItems = ref([
        {
            title: 'Nekopara',
            count: '1.8M Posts'
        },
        {
            title: '#vanilla',
            count: '22.8k Posts'
        },
        {
            title: 'Among Us 2',
            count: '66.6k Posts'
        }
    ])

    const whoToFollowItems = ref([
        {
            name: 'Kiryu Kazuma',
            handle: '@unclekaz',
            image: 'https://steamuserimages-a.akamaihd.net/ugc/1997946697937750811/5D2412B34B29A162100FB12F2FF6C970AD816F50/?imw=128&imh=128&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
        },
        {
            name: 'Haruka Sawamura',
            handle: '@SawaHaruOfficial',
            image: 'https://i.pinimg.com/736x/c3/7c/15/c37c15c01c831a2978e0d156f8bf2610.jpg'
        },
        {
            name: 'Saeko Mukoda',
            handle: '@sachan',
            image: 'https://pbs.twimg.com/media/E6frc4-XIAIbZjI.png'
        }
    ])

</script>