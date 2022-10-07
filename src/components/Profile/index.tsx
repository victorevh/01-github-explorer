import imgProfile from '../../assets/profile.webp'
import { Container, Content, DivProfile } from './styles'

export function Profile() {
    return (
        <Container>
            <Content>
            <h1>Frontend Developer & Analyst System</h1>
            <h2>I love building and developing projects, the result is gratifying
            </h2>
            </Content>
            <DivProfile>
                <img
                    className="imgProfile"
                    src={imgProfile}
                    alt="Homem pardo sorrindo"
                />
            </DivProfile>
        </Container>
    )
}