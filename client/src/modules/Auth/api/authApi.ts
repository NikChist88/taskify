import { api } from '@store/api'
import { User, SignIn, SignUp, Response } from '../types'

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.mutation<Response, SignIn>({
      query: (signinData) => ({
        url: 'auth/signin',
        method: 'POST',
        body: signinData,
      }),
    }),
    signup: builder.mutation<Response, SignUp>({
      query: (signupData) => ({
        url: 'auth/signup',
        method: 'POST',
        body: signupData,
      }),
    }),
    me: builder.query<User, void>({
      query: () => ({
        url: 'users/me',
        method: 'GET',
      }),
    }),
  }),
})

export const { useSigninMutation, useSignupMutation, useMeQuery } = authApi
