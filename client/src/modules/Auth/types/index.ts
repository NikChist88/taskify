import { Task } from '@prisma/index'

export type User = {
  id: string
  email: string
  firstName: string
  lastName: string
  hash: string
  createdAt: Date
  updatedAt: Date
  Task: Task[]
}

export type SignIn = {
  email: string
  password: string
}

export type SignUp = {
  username: string
  email: string
  password: string
}

export type Response = User & { access_token: string }
