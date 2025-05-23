import { query} from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";


export const current = query({
    args : {}, //empty object
    handler : async (ctx)=>{ //controller which has access to the database and all other things
        const userId = await getAuthUserId(ctx);
        if(userId === null){
            return null;
        }
        return await ctx.db.get(userId);
    },
});