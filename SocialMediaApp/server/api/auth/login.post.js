import bcrypt from "bcrypt"
import { sendError } from "#imports";

import { getUserByUsername } from "~/server/db/users";
import { userTransformer } from "~/server/transformers/user";
import { generateTokens, sendRefreshToken } from "~/server/utils/jwt";
import { createRefreshToken } from "~/server/db/refreshTokens";

export default defineEventHandler(async (event) => 
{
    const body = await readBody(event);

    const {username, password} = body;

    if( !username || !password )
    {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Invalid Params.'
        }))
    }
    
    // Checks if the user is registred
    const user = await getUserByUsername(username)

    if( !user )
    {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Username or Password is invalid.'
        }))
    }

    // Checks if the password is correct
    const checkPassword = await bcrypt.compare(password, user.password);

    if( !checkPassword )
    {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Username or Password is invalid.'
        }))
    }

    // Generate the Tokens
    const { accessToken, refreshToken } = generateTokens(user)

    // Save the Tokens in database
    await createRefreshToken({
        token: refreshToken,
        userId: user.id
    })

    // Save refreshToken in Cookies
    sendRefreshToken(event, refreshToken)

    return {
        accessToken: accessToken,
        user: userTransformer(user)
    }
})