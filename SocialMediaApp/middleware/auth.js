import UrlPattern from "url-pattern"
import { decodedAccessToken } from "~/server/utils/jwt"
import { sendError } from "h3"
import { getUserById } from "~/server/db/users";

export default defineEventHandler( async (event) => {
    const endpoints = [ 
        '/api/auth/user'
     ]

     const isHandledByThisMiddleware = endpoints.some(endpoint => {
        const pattern = new UrlPattern(endpoint)

        return pattern.match(event.node.req.url)
     })

     if (!isHandledByThisMiddleware) {
        return
     }

     const token = event.node.req.headers['authorization']?.split(' ')[1]

     const decoded = decodedAccessToken(token)

     if(!decoded) {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: "Unathorized access. I'm watching you..."
        }))
     }

     
     try {
        const userId = decoded.userId
        const user = await getUserById(userId)
        event.context.auth = { user }        
    } catch (error) {
        alert("Something went wrong on 'auth.js'.")
        console.log("Error: " + error)
    }

})