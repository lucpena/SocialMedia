export default () =>
{
    const postTweet = (formData) =>
    {
        const form = new FormData();

        form.append('text', formData.text);
        form.append('replyTo', formData.replyTo);

        formData.mediaFiles.forEach((mediaFile, index) => {
            form.append('media_file' + index, mediaFile)
        });

        return useFetchApi("/api/user/tweets", 
            {
                method: 'POST',
                body: form
            }
        )
    }

    const getTweets = (params = {}) =>
    {
        return new Promise(async (resolve, reject) => 
        {
            try {
                const response = await useFetchApi('/api/tweets', {
                    method: 'GET',
                    params
                })

                resolve(response);
            } catch (error) {
                reject(error);
            }
        })
    }

    const getTweetById = (tweetId) => 
    {
        return new Promise (async (resolve, reject) =>
        {
            try {
                const response = await useFetchApi(`/api/tweets/${tweetId}`);

                resolve(response);
            } catch (error) {
                reject(error)
            }
        })
    }

    
    const usePostTweetModal = () => useState('post_tweet_modal', () => false);    
    const useReplyTweet = () => useState('replyTweet',  () => null);

    const closePostTweetModal = () =>
    {
        const postTweetModal = usePostTweetModal();
        postTweetModal.value = false;
    }

    const openPostTweetModal = (tweet = null) =>
    {
        const postTweetModal = usePostTweetModal();
        postTweetModal.value = true;

        setReplyTo(tweet);
    }

    const setReplyTo = (tweet) =>
    {
        const replyTweet = useReplyTweet();
        replyTweet.value = tweet;
    }
        
    return {
        postTweet,
        getTweetById,
        getTweets,
        closePostTweetModal,
        usePostTweetModal,
        openPostTweetModal,
        useReplyTweet
    }
}