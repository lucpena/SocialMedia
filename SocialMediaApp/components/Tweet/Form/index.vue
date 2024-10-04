<template>
    <div>

        <div class="flex flex-col justify-center items-center py-6" v-if="loading">
            <UIAlienDance class="w-28 h-28"/>
            <h1 class="text-center animate-pulse">posting your crap....</h1>
        </div>

        <div v-else>
            <TweetItem :tweet="props.replyTo" v-if="props.replyTo && props.showReply" hideActions />
            <TweetFormInput :placeholder="props.placeholder" :user="props.user" @onSubmit="handleFormSubmit" />
        </div>      

    </div>
</template>
<script setup>

const { postTweet } = useTweets();
const loading = ref(false)

const emits = defineEmits(['onSucess']);

const props = defineProps({
    user: {
        type: Object,
        requires: true
    },
    placeholder: {
        type: String,
        default: "say something..."
    },
    replyTo: {
        type: Object,
        default: null
    },
    showReply: {
        type: Boolean,
        default: false
    }
});

async function handleFormSubmit(data)
{
    loading.value = true;
    try {
      const response = await postTweet({
        text: data.text,
        mediaFiles: data.mediaFiles,
        replyTo: props.replyTo?.id
      });

      emits('onSucess', response.tweet);

      console.log(response);
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false;
    }
}

</script>