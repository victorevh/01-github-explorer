import Modal from 'react-modal';
import { Container, Content , Bttn } from './styles'

interface HeaderProps {
    onOpenNewContactModal: () => void;
}

export function Header ({onOpenNewContactModal}: HeaderProps) {
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
                    <button type="button" onClick={onOpenNewContactModal}>
                        Say Hello
                    </button>
                </Bttn>
            </Content>
        </Container>
    );
}