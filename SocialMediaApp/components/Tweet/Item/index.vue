<template>
    <div>

        <TweetItemHeader :tweet="props.tweet" />
        
        <div class="ml-16">

            <p class="flex-shrink w-auto font-normal text-gray-800 dark:text-white">
                {{ props.tweet.text }}
            </p>
            
            <div 
                v-for="image in tweet.mediaFiles" 
                :key="image.id" 
                class="flex my-3 mr-2 border-2 rounded-xl"
                :class="twitterBorderImage">
                    <img :src="image.url" alt="Post image" class="w-full rounded-2xl">
            </div>
            
            <div class="mt-2">
                <TweetItemActions :tweet="props.tweet" />
            </div>

        </div>
            
    </div>
</template>
<script setup>

const { twitterBorderColor } = useTailwindConfig()

const props = defineProps(
    {
        tweet: {
            type: Object,
            required: true
        }
    }
)

</script>