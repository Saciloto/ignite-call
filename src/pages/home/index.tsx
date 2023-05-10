import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'
import previewImage from '../../assets/appPreview.png'
import { ClaimUsernameUser } from './components/ClaimUsernameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
        <ClaimUsernameUser />
      </Hero>
      <Preview>
        <Image
          src={previewImage}
          alt="Calendário de agendamento"
          height={400}
          quality={100} // padrao next é 80
          priority // Da prioridade para a imagem carregar
        />
      </Preview>
    </Container>
  )
}
