import Modal from 'react-modal';
import { useState } from 'react';
import { Header } from './components/Header';
import { NewContactModal } from './components/NewContactModal';
import { Profile } from './components/Profile';
import { RepositoryList } from './components/Repository/RepositoryList';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App(){
const [isNewContactModalOpen, setIsNewContactModalOpen] = useState(false);

    function handleOpenNewContactModal() {
        setIsNewContactModalOpen(true);
    }

    function handleCloseNewContactModal() {
        setIsNewContactModalOpen(false);
    }

    return (
        <>
            <Header onOpenNewContactModal={handleOpenNewContactModal} />
            <NewContactModal
                isOpen={isNewContactModalOpen}
                onRequestClose={handleCloseNewContactModal}
            />
            <Profile />
            <RepositoryList />
            <GlobalStyle />
        </>
    )
}