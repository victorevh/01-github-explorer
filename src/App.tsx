import { Header } from './components/Header'
import { Profile } from './components/Profile';
import { RepositoryList } from './components/Repository/RepositoryList';
import { GlobalStyle } from './styles/global';

export function App(){
    return (
        <>
            <Header />
            <Profile />
            <RepositoryList />
            <GlobalStyle />
        </>
    )
}