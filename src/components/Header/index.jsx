import { RiShutDownLine} from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles";

export function Header() {
    return (
        <Container>
            <Profile>
                <img
                    src="https://github.com/gisellebm.png"
                    alt="Foto do Usuário"
                />

                <div>
                    <span>Bem vindo,</span>
                    <strong>Giselle Brasil</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}