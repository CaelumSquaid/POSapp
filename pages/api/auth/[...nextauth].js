import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'



export default NextAuth({
    providers:[
        Credentials({
            name: 'credentials',
            async authorize(credentials,req){

            },
        }),
    ],
    callbacks:{

    },
    jwt:{

    },
    secret:{
        
    }
})