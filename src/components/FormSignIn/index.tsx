import { Email, Lock } from '@styled-icons/material-outlined'
import Link from 'next/link'
import Button from 'components/Button'
import TextField from 'components/TextField'
import * as s from './styles'
import { FormWrapper, FormLink, FormLoading } from 'components/Form'
import { useState } from 'react'
import { signin } from 'next-auth/client'
import { useRouter } from 'next/router'

const FormSignIn = () => {
  const [values, setValues] = useState({})
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const result = await signin('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
    })

    if (result?.url) {
      return push(result?.url)
    }

    setLoading(false)

    console.error('email or password invalid')
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />
        <s.ForgotPassword href="#">Forgot your password?</s.ForgotPassword>
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign in now</span>}
        </Button>

        <FormLink>
          Don’t have an account?{' '}
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}
export default FormSignIn
