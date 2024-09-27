<template>
    <div class="flex flex-col h-screen">

        <div class="p-2 my-2 rounded-full hover:bg-blue-50 w-min dark:hover:bg-white/20" :class="defaultTransition">
            <nuxt-link to="/">
                <div class="w-8 h-8">
                    <LogoTwitter  />
                </div>
            </nuxt-link>
        </div>

        <div class="mt-2 space-y-3">
            <SidebarLeftTab active>
                    <template v-slot:icon>
                        <HomeIcon />
                    </template>
                    <template v-slot:name>
                        Home
                    </template>
                </SidebarLeftTab>

                <SidebarLeftTab>
                    <template v-slot:icon>
                        <UserIcon />
                    </template>
                    <template v-slot:name>
                        Profile
                    </template>
                </SidebarLeftTab>

                <SidebarLeftTab>
                    <template v-slot:icon>
                        <BellIcon />
                    </template>
                    <template v-slot:name>
                        Notifications
                    </template>
                </SidebarLeftTab>

                <SidebarLeftTab>
                    <template v-slot:icon>
                        <HashtagIcon />
                    </template>
                    <template v-slot:name>
                        Explore
                    </template>
                </SidebarLeftTab>

                <SidebarLeftTab>
                    <template v-slot:icon>
                        <InboxIcon />
                    </template>
                    <template v-slot:name>
                        Bookmarks
                    </template>
                </SidebarLeftTab>

                <SidebarLeftTab>
                    <template v-slot:icon>
                        <BookmarkIcon />
                    </template>
                    <template v-slot:name>
                        Messages
                    </template>
                </SidebarLeftTab>

                <SidebarLeftTab>
                    <template v-slot:icon>
                        <DocumentTextIcon />
                    </template>
                    <template v-slot:name>
                        Lists
                    </template>
                </SidebarLeftTab>


                <SidebarLeftTab>
                    <template v-slot:icon>
                        <PlusIcon   />
                    </template>
                    <template v-slot:name>
                        More
                    </template>
                </SidebarLeftTab>

                <div class="hidden xl:block">
                    <UIBlueButton liquid size="lg" class="font-bold">Post</UIBlueButton>
                </div>

                <div class="block xl:hidden">
                    <UIBlueButton class="font-bold">
                        <div class="w-6 h-6">
                            <PencilIcon />
                        </div>
                    </UIBlueButton>
                </div>
        </div>

    </div>
</template>

<script setup>

import {HomeIcon} from "@heroicons/vue/16/solid"

import {HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, DocumentTextIcon, UserIcon, PlusIcon, PencilIcon  } from "@heroicons/vue/24/outline"

const {defaultTransition} = useTailwindConfig()

</script>