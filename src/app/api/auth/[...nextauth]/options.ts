import type {NextAuthOptions} from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { User } from '@/models/User';
//dave grey next auth vid
export const options: NextAuthOptions ={
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret:process.env.GITHUB_SECRET as string 
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email:{
                    label: "Email:",
                    type: "text",
                    placeholder: "Email",

               },
               password:{
                label:"Password:",
                type:"password",
               }
            },
            async authorize(credentials){
                //database set up https://next-auth.js.org/configuration/providers/credentials
                 const getUser = await fetch(`http://localhost:9081/User/email/${credentials?.email}`,{
                   method:'GET',
                 });
                 const user = await getUser.json();
                 console.log(user);
                 if(getUser.ok && user.password === credentials?.password){
                 return user
                 }
                 else{
                    return null
                 }
            }       
        })
    ],


}