import { removeRefreshToken } from "~/server/db/refreshTokens";
import { sendRefreshToken } from "~/server/utils/jwt"

export default defineEventHandler(async (event) =>
{
    try {
        const cookies = parseCookies(event);
        const refreshToken = cookies.refreshToken;

        console.log("cookies: " + cookies);
        console.log("refreshToken: " + cookies.refreshToken);

        // Remove refreshToken
        await removeRefreshToken(refreshToken);
        
    } catch (error) {
        console.log(error);
    }

    sendRefreshToken(event.res, null);
    
    return {
        message: "Logout success."
    }
})