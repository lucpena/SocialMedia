<template>
    <div>
        <MainSection title="Home" :loading="loading">

            <Head>
                <Title>Search</Title>
            </Head>

            <TweetListFeed :tweets="searchTweets"/>

        </MainSection>
    </div>
</template>
<script setup>

const { getTweets } = useTweets();

const loading = ref(false);
const searchTweets = ref([]);

const searchQuery = useRoute().query.q;


onBeforeMount(async () =>
{
    loading.value = true;

    try {
        const {tweets} = await getTweets({
            query: searchQuery
        });

        searchTweets.value = tweets;

    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false;
    }

})

</script>