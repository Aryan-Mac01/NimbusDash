import 'next-auth'
import { DefaultSession } from 'next-auth';

//method-1
declare module 'next-auth'{
    interface User{
        _id?: string;
        isVerified?: boolean;
        isAcceptingMessages?: boolean;
        username?: string;
    }
    interface Session{
        user: {
            _id?: string;
            isVerified?: boolean;
            isAcceptingMessages?: boolean;
            username?: string;
        } & DefaultSession['user']
    }
}

//method-2
declare module 'next-auth/jwt' {
    interface JWT{
        _id?: string;
        isVerified?: boolean;
        isAcceptingMessages?: boolean;
        username?: string;
    }
}