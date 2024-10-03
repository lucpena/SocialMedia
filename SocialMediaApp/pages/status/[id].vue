<template>
<div>
    
    <MainSection title="Post" :loading="loading">
        <Head>
            <Title></Title>
        </Head>

        <TweetDetails :user="user" :tweet="tweet" />

    </MainSection>

</div>
</template>
<script setup>

const { getTweetById } = useTweets();
const { useAuthUser } = useAuth();

const user = useAuthUser();

const loading = ref(false);
const tweet = ref(null);

watch(() => useRoute().fullPath, () => getTweet());

function getTweetIdFromRoute() 
{
    return useRoute().params.id;
}

async function getTweet()
{
    loading.value = true;
    try {
      const response = await getTweetById(getTweetIdFromRoute());
      
      tweet.value = response.tweet;
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false;
    }
}

onBeforeMount(() => 
{
    getTweet()
})

</script>