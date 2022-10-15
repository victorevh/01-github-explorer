
import { Container, Content , Bttn } from './styles'

export function Header () {
    return (
        <Container>
            <Content>
                <img alt="" />
                <Bttn>
                    <div>
                        <a
                             href="https://github.com/victorevh"
                             target="_Blank"
                        >
                            My portfolio
                        </a>
                    </div>
                    <button type="button">
                        Say Hello
                    </button>
                </Bttn>
            </Content>
        </Container>
    );
}