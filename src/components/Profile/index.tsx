import imgProfile from '../../assets/profile.webp'
import imgDevices from '../../assets/hero-devices.svg'
import { Container, Content, DivProfile, Foot} from './styles'

export function Profile() {
    return (
        <Container>
            <Content>
            <h1>Frontend Developer & Analyst System</h1>
            <h2>I design and code beautifully simple things, and I love what I do.
            </h2>
            </Content>
            <DivProfile>
                <img
                    src={imgProfile}
                    alt="Homem pardo sorrindo"
                />
            </DivProfile>
            <Foot>
                <img 
                    src={imgDevices}
                    alt="Dispositivos" />
            </Foot>
        </Container>
    )
}