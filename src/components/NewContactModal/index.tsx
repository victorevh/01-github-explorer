import { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { Container } from './styles'

interface NewContactModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewContactModal({ isOpen, onRequestClose }: NewContactModalProps) {
    const [fields, setFields] = useState({
        name:'',
        email:'',
        message:'',
        attachment:''
    });
    
    function handleInputChange(event){
        if(event.target.name === "attachment")
            fields[event.target.name] = event.target.files[0];
        else
            fields[event.target.name] = event.target.value;
        setFields(fields);
    }

    
    function handleFormSubmit(event){
        event.preventDefault();
        console.log(fields);
    }
    
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
            
            <Container onSubmit={handleFormSubmit}>
            <div>
                <h2>Say Hello</h2>
                </div>
                <label
                    htmlFor="email"
                >
                    E-mail
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Input your e-mail"
                            onChange={handleInputChange}
                        />
                </label>

                <label
                    htmlFor="name"
                >
                    Name
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Input your name"
                            onChange={handleInputChange}
                        />
                </label>

                <label
                    htmlFor="message"
                >
                    Message
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Write your message"
                            cols={55}
                            rows={10}
                            onChange={handleInputChange}
                        >
                        </textarea>
                </label>

                <label 
                    htmlFor="attachment"
                >
                    Attachment
                        <input 
                            type="file" 
                            id="attachment" 
                            name="attachment"
                            onChange={handleInputChange}
                        />
                </label>
                <button
                    type="submit"
                >
                    Send
                </button>
            </Container>
        </Modal>
    )
}