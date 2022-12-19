import Image from "next/image";
import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <div className="wrapper">
        <div className="logo">
          <Image src="/logo-completa.png" alt="" width={144} height={155} />
        </div>

        <div className="talkWithUs">
          <h3>Fale conosco</h3>

          <ul>
            <li>
              <Image
                src="/icons/map-marker-alt.svg"
                alt=""
                width={28}
                height={28}
              />
              <a href="#">
                Campo Grande/MS - Rua epitácio Pessoa, n 383 - Vilas Boas
              </a>
            </li>
            <li>
              <Image src="/icons/phone-alt.svg" alt="" width={28} height={28} />
              <a href="#">(67) 3385-5445</a>
            </li>
            <li>
              <Image src="/icons/envelope.svg" alt="" width={28} height={28} />
              <a href="#">comercial@dualservicosterceirizados.com.br</a>
            </li>
          </ul>
        </div>

        <div className="madeBy">
          <span>Desenvolvido por</span>

          <a href="https://negotech.com.br" target="_blank" rel="noreferrer">
            <Image
              src="/nego-tech-completa.png"
              alt=""
              width={172}
              height={184}
            />
          </a>
        </div>
      </div>
    </Container>
  );
}
