import { Header } from './components/Header'
import { RepositoryList } from './components/RepositoryList';
import { ProfileItem } from './components/ProfileItem';
import './styles/global.scss';

export function App(){
    return (
        <>
            <Header />
            <ProfileItem />
            <RepositoryList />
        </>
    )
}