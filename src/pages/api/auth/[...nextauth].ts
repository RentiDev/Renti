import NextAuth from "next-auth";
import { authOptions } from "~/server/auth";

import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

import { prisma } from "src/server/db";

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
      CredentialsProvider({
        name: 'credentials',
        credentials: {
            email: { label: 'email', type: 'text' },
            password: {  label: 'password', type: 'password' }
        },
        async authorize(credentials) {
            if (!credentials?.email || !credentials?.password) {
                throw new Error ('Invalid credentials');
            }

            const user = await prisma.user.findUnique({
                where: {
                    email: credentials.email
                }
            });

            if (!user || !user?.hashedPassword) {
                throw new Error('Invalid credentials');
            }

            const isCorrectPassword = await bcrypt.compare(
                credentials.password,
                user.hashedPassword
            );

            if (!isCorrectPassword) {
                throw new Error('Invalid credentials');
            }

            return user;
        }
      })
    ],
    pages: {
        signIn: '/',
    },
    debug: process.env.NODE_ENV === "development",
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
  });


// export default NextAuth(authOptions);
