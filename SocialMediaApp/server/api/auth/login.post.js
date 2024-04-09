import { getUserByUsername } from "~/server/db/users"
import bcrypt from "bcrypt"
import { generateTokens, sendRefreshToken } from "~/server/utils/jwt"
import { userTransformer } from "~/server/transformers/user";
import { createRefreshToken } from "~/server/db/refreshTokens";

export default defineEventHandler(async(event) =>{
    const body = await readBody(event)

    const{ username, password } = body

    if( !username || !password ) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Bad parameters... Try again."
        }))
    }

    // Check if user is registered
    const user = await getUserByUsername(username)

    if(!user) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Credentials are wrong. User not found."
        }))
    }

    // Check Password
    const doesPasswordMatch = await bcrypt.compare(password, user.password)

    if(!doesPasswordMatch) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Credentials are wrong. User not found."
        }))
    }
    
    // Generate Tokens (Access and Refresh)
    const { accessToken, refreshToken } = generateTokens(user)

    // Save inside the DB
    await createRefreshToken({
        token: refreshToken,
        userId: user.id
    })

    // Save refresh token in Cookies
    sendRefreshToken(event, refreshToken) 

    return {
        access_token: accessToken,
        user: userTransformer(user)
    }
})