import {
  AboutUsContainer,
  ClientsContainer,
  HeroContainer,
  ServicesContainer,
} from "../styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Dual Serviços</title>
      </Head>

      <main>
        <HeroContainer id="home">
          <div className="textRight">
            <h2>Serviços terceirizados por profissionais</h2>
            <span>
              Os mais preparados e especializados de Campo Grande, você encontra
              aqui.
            </span>
            <a href="">Saiba mais</a>
          </div>

          <img src="/illustration.png" alt="" />
        </HeroContainer>

        <ClientsContainer id="clients">
          <header>
            <h2>Nossos clientes em Campo Grande</h2>
            <p>
              A Dual é uma empresa visionária, comprometida em entregar
              resultados concretos para nossos contratantes. fornecendo serviços
              terceirizados com alto padrão de qualidade. Conheça alguns de
              nossos clientes e torne-se mais um parceiro da Dual.
            </p>
          </header>

          <Slider {...settings}>
            <div className="carrouselImage">
              <img src="/agf.png" alt="" />
            </div>
            <div className="carrouselImage">
              <img src="/nego-tech.png" alt="" />
            </div>
            <div className="carrouselImage">
              <img src="/agf.png" alt="" />
            </div>
            <div className="carrouselImage">
              <img src="/nego-tech.png" alt="" />
            </div>
            <div className="carrouselImage">
              <img src="/agf.png" alt="" />
            </div>
            <div className="carrouselImage">
              <img src="/nego-tech.png" alt="" />
            </div>
            <div className="carrouselImage">
              <img src="/agf.png" alt="" />
            </div>
            <div className="carrouselImage">
              <img src="/nego-tech.png" alt="" />
            </div>
          </Slider>
        </ClientsContainer>

        <ServicesContainer id="services">
          <h2>Conheça um pouco mais dos nossos serviços em Campo Grande</h2>

          <div className="gridTemplate">
            <div className="cardsItem">
              <Image
                src="/portaria.png"
                alt="Portaria"
                width={251}
                height={196}
              />
              <span>Portaria</span>
              <a href="">Saiba mais</a>
            </div>
            <div className="cardsItem">
              <Image
                src="/services.png"
                alt="Serviços Gerais"
                width={251}
                height={196}
              />
              <span>Serviços Gerais</span>
              <a href="">Saiba mais</a>
            </div>
            <div className="cardsItem">
              <Image
                src="/limpeza.png"
                alt="limpeza"
                width={251}
                height={196}
              />
              <span>Zeladoria</span>
              <a href="">Saiba mais</a>
            </div>
            <div className="cardsItem">
              <Image
                src="/adm.png"
                alt="Apoio Administrativo"
                width={251}
                height={196}
              />
              <span>Apoio Administrativo</span>
              <a href="">Saiba mais</a>
            </div>
            <div className="cardsItem">
              <Image
                src="/jardinagem.png"
                alt="Jardinagem"
                width={251}
                height={196}
              />
              <span>Jardinagem</span>
              <a href="">Saiba mais</a>
            </div>
          </div>
        </ServicesContainer>

        <AboutUsContainer id="about">
          <Image
            src="/aboutus.png"
            alt="Homem no telefone"
            width={591}
            height={471}
          />

          <div className="aboutUsText">
            <h2>Quem somos?</h2>

            <p>
              Somos uma empresa que nasceu para entregar resultados alinhados
              com o progresso de nossos clientes, atuando em Campo Grande Mato
              Grosso do Sul.
            </p>
            <p>
              A Dual é uma prestadora de serviços terceirizados que atende
              demandas de maneira rápida, competente e por um preço adequado.
              Contamos com uma equipe de profissionais instruída para assumir
              todas as responsabilidades de maneira competente, respondendo à
              cada função solicitada.
            </p>
            <p>
              Entre em contato e descubra todas as soluções que oferecemos para
              você
            </p>

            <a href="">Entre em contato</a>
          </div>
        </AboutUsContainer>
      </main>
    </>
  );
}
