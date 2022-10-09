import imgProfile from '../../assets/profile.webp'
import imgDevices from '../../assets/hero-devices.svg'
import { Container, Content, DivProfile, Foot, About} from './styles'

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
                    alt="Dispositivos"
                 />
            </Foot>
            <About>
                <section>
                    <h1>Hi, I'm Victor. Nice to meet you.</h1>
                    <span>Working from Brazil</span>
                    <p>About me</p>
                </section>
                <div>
                    <img src="" alt="" />
                </div>
            </About>
        </Container>
    )
}