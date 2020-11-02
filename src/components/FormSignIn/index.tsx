import { Email, Lock } from '@styled-icons/material-outlined'
import Link from 'next/link'
import Button from 'components/Button'
import TextField from 'components/TextField'
import * as s from './styles'
import { FormWrapper, FormLink } from 'components/Form'

const FormSignIn = () => (
  <FormWrapper>
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

      <FormLink>
        Don’t have an account?{' '}
        <Link href="/sign-up">
          <a>Sign up</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)
export default FormSignIn