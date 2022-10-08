import { Header } from './components/Header'
import { Profile } from './components/Profile';
import { RepositoryList } from './components/RepositoryList';

import './styles/global.scss';

export function App(){
    return (
        <>
            <Header />
            <Profile />
            <RepositoryList />
        </>
    )
}