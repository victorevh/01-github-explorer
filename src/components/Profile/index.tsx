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
                    <span>Working from Brazil Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit scelerisque augue, quis luctus elit facilisis ut. Integer a enim sed mauris lobortis dignissim eu id mauris. Nullam maximus ex ac velit pulvinar hendrerit. Sed quis augue nec dolor vulputate fermentum. Nam at consectetur purus, sit amet scelerisque velit. Ut consectetur tortor condimentum lectus varius, eu tincidunt augue efficitur. Nullam commodo interdum fermentum. In erat lacus, tempus ut quam sit amet, tincidunt laoreet odio. Nam dapibus pharetra mauris, sit amet rhoncus magna auctor id.</span>
                    <p>About me</p>
                </section>
                <div>
                    <img src="" alt="" />
                </div>
            </About>
        </Container>
    )
}