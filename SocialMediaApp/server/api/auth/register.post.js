import { sendError } from "h3";
import { createUser } from "~/server/db/users";
import { userTransformer } from "~/server/transformers/user";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const{ username, email, password, repeatPassword, name } = body;

    if( !username || !email || !password || !repeatPassword || !name ) {
        return sendError(event, createError({
            statusCode: 400, 
            statusMessage: "Bad parameters. Try again."
        }));
    }

    if( password !== repeatPassword ) {
        return sendError(event, createError({
            statusCode: 400, 
            statusMessage: "Password does not match. Try again."
        }));
    }

    const userData = {
        username, email, password, name,
        profileImage: ""
    }

    const user = await createUser( userData )

    return {
        body: userTransformer(user)
    }
})