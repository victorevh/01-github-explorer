import { Header } from './components/Header'
import { RepositoryList } from './components/RepositoryList';
import { Profile } from './components/Profile';
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