import Image from "next/image";
import { Container } from "./styles";
import { Link } from "react-scroll";

export function Header() {
  return (
    <Container>
      <div className="wrapper">
        <Image src="/logo.png" alt="" width={67} height={89} />

        <nav>
          <ul>
            <li>
              <Link to="home" href="#home" smooth={true} offset={-150}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" href="#about" smooth={true} offset={-75}>
                Quem somos
              </Link>
            </li>
            <li>
              <Link to="services" href="#services" smooth={true} offset={-110}>
                serviços
              </Link>
            </li>
            <li>
              <Link to="clients" href="#clients" smooth={true} offset={-200}>
                clientes
              </Link>
            </li>
          </ul>
        </nav>

        <a href="#" className="budgetButton">
          Faça um orçamento
        </a>
      </div>
    </Container>
  );
}
