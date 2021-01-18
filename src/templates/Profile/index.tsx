import { useRouter } from 'next/router'
import { Container } from 'components/Container'
import Heading from 'components/Heading'
import ProfileMenu from 'components/ProfileMenu'
import Base from 'templates/Base'
import * as s from './styles'

export type ProfileTemplateProps = {
  children: React.ReactNode
}

const Profile = ({ children }: ProfileTemplateProps) => {
  const { asPath } = useRouter()

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My profile
        </Heading>

        <s.Main>
          <ProfileMenu activeLink={asPath} />
          <s.Content>{children}</s.Content>
        </s.Main>
      </Container>
    </Base>
  )
}
export default Profile
