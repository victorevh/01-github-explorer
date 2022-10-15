import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { Container } from './styles'

interface NewContactModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewContactModal({ isOpen, onRequestClose }: NewContactModalProps) {
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>
            
            <Container>
            <div>
                <h2>Say Hello</h2>
                </div>
                <label
                    htmlFor="email"
                >
                    E-mail
                </label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Input your e-mail"
                />
                <label
                    htmlFor="name"
                >
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    placeholder="Input your name"
                />
                <label
                    htmlFor="message"
                >Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Write your message"
                    cols={55}
                    rows={10}
                >
                </textarea>
                <input
                    type="submit" 
                    value="Enviar" 
                />
            </Container>
        </Modal>
    )
}