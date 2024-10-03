import { prisma } from ".";

export const createTweet = (tweetData) =>
{
    return prisma.tweet.create({
        data: tweetData
    })
}

export const getTweets = (params = {}) =>
{
    return prisma.tweet.findMany({
        ...params
    })
}

export const getTweetById = (tweetId, params = {}) => 
{
    const this_id = parseInt(tweetId);

    return prisma.tweet.findUnique({
        ...params,
        where: {
            ...params.where,
            id: this_id
        }
    })
}