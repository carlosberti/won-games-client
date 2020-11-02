import { Email, Lock } from '@styled-icons/material-outlined'
import Link from 'next/link'
import Button from 'components/Button'
import TextField from 'components/TextField'
import * as s from './styles'

const FormSignIn = () => (
  <s.Wrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <s.ForgotPassword href="#">Forgot your password?</s.ForgotPassword>
      <Button size="large" fullWidth>
        Sign in now
      </Button>

      <s.FormLink>
        Don’t have an account?{' '}
        <Link href="/sign-up">
          <a>Sign up</a>
        </Link>
      </s.FormLink>
    </form>
  </s.Wrapper>
)
export default FormSignIn
