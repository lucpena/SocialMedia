import { sendError } from "h3";

import { getRefreshTokenByToken } from "~/server/db/refreshTokens";
import { getUserById } from "~/server/db/users";
import { decodeRefreshToken, generateTokens } from "~/server/utils/jwt";

export default defineEventHandler( async(event) => 
{
    const cookies = parseCookies(event);
    const refreshToken = cookies.refreshToken;

    if( !refreshToken )
    {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Refresh token is invalid.'
        }));
    }

    const rToken = await getRefreshTokenByToken(refreshToken);

    if( !rToken )
    {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Refresh token not in Database.'
        }));
    }

    const token = decodeRefreshToken(refreshToken);

    try {
        const user = await getUserById(token.userId);

        const {accessToken} = generateTokens(user);

        return { accessToken: accessToken }
    } catch (error) {
        return sendError(event, createError({
            statusCode: 500,
            statusMessage: 'Login expired.'
        }));
    }
});