<template>
    <div>

        <div v-if="isEmptyArray" class="p-4 flex flex-col items-center border-b" :class="twitterBorderColor">
            <p class="text-center text-gray-500">
                Nothing here lol
            </p>
            <UIAlienDance class="w-20 h-20 my-5" />
        </div>

        <div 
            v-for="tweet in props.tweets" 
            v-else
            :key="tweet.id" 
            class="pb-4 border-b hover:bg-gray-100 cursor-pointer dark:hover:bg-dim-300" 
            :class="[twitterBorderColor, defaultTransition]"
            @click.native="redirect(tweet)">
                <TweetItem  :tweet="tweet" compact />
        </div>

    </div>
</template>
<script setup>

const { twitterBorderColor, defaultTransition } = useTailwindConfig()

const props = defineProps({
    tweets: {
        type: Array,
        required: true
    }
})

const isEmptyArray = computed(() => props.tweets.length === 0);

function redirect(tweet)
{
    navigateTo(`/status/${tweet.id}`);
}

</script>