<template>
    <div class="flex items-center justify-around w-full">

        <TweetItemActionsIcon color="blue" :size="size" @on-click="emits('onCommentClick')">
            <template v-slot:icon="{ classes }">
                <ChatBubbleOvalLeftEllipsisIcon :class="classes" />
            </template>
            <template v-slot:default v-if="showStats">
               {{ props.tweet.repliesCount }}
            </template>
        </TweetItemActionsIcon>

        <TweetItemActionsIcon color="green"  :size="size">
            <template v-slot:icon="{ classes }">
                <ArrowPathRoundedSquareIcon :class="classes" />
            </template>
            <template v-slot:default  v-if="showStats">
              <span></span>
            </template>
        </TweetItemActionsIcon>

        <TweetItemActionsIcon color="red"  :size="size">
            <template v-slot:icon="{ classes }">
                <HeartIcon :class="classes" />
            </template>
            <template v-slot:default v-if="showStats">
              <span></span>
            </template>
        </TweetItemActionsIcon>

        <TweetItemActionsIcon color="blue"  :size="size">
            <template v-slot:icon="{ classes }">
                <ArrowUpTrayIcon :class="classes" />
            </template>
            <template v-slot:default v-if="showStats">
              <span></span>
            </template>
        </TweetItemActionsIcon>

    </div>
</template>
<script setup>

import { ChatBubbleOvalLeftEllipsisIcon, ArrowPathRoundedSquareIcon, HeartIcon, ArrowUpTrayIcon  } from "@heroicons/vue/24/outline"

const emits = defineEmits(['onCommentClick']);

const props = defineProps(
    {
        tweet: {
            type: Object,
            required: true
        },
        compact: {
            type: Boolean,
            default: false
        }
    }
)

function generateRandomNumber() {
    return Math.floor(Math.random() * 100)
}

const showStats = computed(() => props.compact);

const size = computed(() => props.compact ? 5 : 6);

</script>