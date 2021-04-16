import Auth from 'templates/Auth'
import FormForgotPassword from 'components/FormForgotPassword'

export default function ResetPassword() {
  return (
    <Auth title="Request new password">
      <FormForgotPassword />
    </Auth>
  )
}
