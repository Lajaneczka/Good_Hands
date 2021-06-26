import { LoginPanel } from './LoginPanel';
import { Nav } from '../Molecules/Nav'; 


export const HomeHeader = () => {
    return (
        <header className="header">
            <LoginPanel />
            <Nav />
        </header>
    )
}