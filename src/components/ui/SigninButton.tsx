"use client"

import { FC, useState } from 'react'
import Button from './Button'
import { signIn } from 'next-auth/react'
import { toast } from './Toast'

interface SigninButtonProps {
  
}

const SigninButton: FC<SigninButtonProps> = ({}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const signInwithGoogle = async() => {
        setIsLoading(true)
        try {
            await signIn('google')
        }
        catch (error) {
            toast({
                title: 'Error sign in',
                message: 'Please Try again later',
                type: 'error',
            })
        }
    }
  return <Button onClick={signInwithGoogle} isLoading={isLoading}>
    Sign in</Button>
}

export default SigninButton