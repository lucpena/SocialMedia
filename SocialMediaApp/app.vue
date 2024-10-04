<template>
<div :class="{ 'dark': darkMode }">

  <div class="bg-neutral-50 dark:bg-dim-900">
  
    <LoadingPage v-if="isAuthLoading" />

    <!-- Main App -->
    <div class="min-h-full" v-else-if="user">
      <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">

        <!-- Left Sidebar -->
        <div class="hidden md:block xs-col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft @on-tweet="handleOpenTweetModal" />
            </div>
        </div>
      
        <!-- Main Content -->
        <main class="col-span-12 md:col-span-8 xl:col-span-6">
          <router-view />
        </main>

        <!-- Right Sidebar -->
        <div class="hidden md:block xl:col-span-4 md:col-span-3">
            <div class="sticky top-0">
              <SidebarRight />
            </div>
        </div>

      </div>

      <UIModal :isOpen="postTweetModal" @on-close="handleModalClose">
        <TweetForm :user="user" :replyTo="replyTweet" showReply @on-sucess="handleFormSucess" />
      </UIModal>

    </div>

    <AuthPage v-else />
    
  </div>
  
  
</div>
</template>

<script setup>
const darkMode = ref(false);

const {useAuthUser, initAuth, useAuthLoading} = useAuth();
const isAuthLoading = useAuthLoading();
const user = useAuthUser();
const { closePostTweetModal, usePostTweetModal, openPostTweetModal, useReplyTweet } = useTweets()
const postTweetModal = usePostTweetModal();
const emitter = useEmitter();
const replyTweet = useReplyTweet();


emitter.$on('replyTweet', (tweet) => 
{
  openPostTweetModal(tweet);
});

onBeforeMount(() => {
  initAuth();
})

function handleFormSucess(tweet)
{
  closePostTweetModal();

  navigateTo({
    path: `/status/${tweet.id}`
  })
}

function handleModalClose()
{
  closePostTweetModal();
}

function handleOpenTweetModal()
{
  openPostTweetModal(null);
}

</script>
