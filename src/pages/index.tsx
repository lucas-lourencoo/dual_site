import {
  AboutUsContainer,
  ButtonDownload,
  ClientsContainer,
  HeroContainer,
  ServicesContainer,
} from "../styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import { Modal } from "../components/Modal";
import { List } from "../utils/list";
import { Settings } from "react-slick";
import { FaFilePdf } from "react-icons/fa";

export default function Home() {
  const [isPortariaModalOpen, setIsPortariaModalOpen] = useState(false);
  const [isServicosModalOpen, setIsServicosModalOpen] = useState(false);
  const [isZeladoriaModalOpen, setIsZeladoriaModalOpen] = useState(false);
  const [isAdmModalOpen, setIsAdmModalOpen] = useState(false);
  const [isJardinagemModalOpen, setIsJardinagemModalOpen] = useState(false);
  const lista = List(19);

  var settings: Settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 4,
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

  var settings2: Settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
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
        <title>Dual | Serviços Terceirizados</title>
      </Head>

      <main>
        <HeroContainer id="home">
          <div className="textRight">
            <h2>Serviços terceirizados por profissionais</h2>
            <span>
              Os mais preparados e especializados de Campo Grande, você encontra
              aqui.
            </span>
            <a href="https://api.whatsapp.com/send?phone=556799828077&text=Olá! Gostaria de um orçamento.">
              Saiba mais
            </a>
          </div>

          <video
            controls
            loop
            autoPlay
            controlsList="nodownload"
            disablePictureInPicture
            muted={false}
            preload="auto"
          >
            <source src="/banner.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento <code>video</code>.
          </video>
        </HeroContainer>

        <ClientsContainer id="clients">
          <header>
            <h2>Algumas fotos dos nossos serviços</h2>
            <p>
              A Dual é uma empresa visionária, comprometida em fornecer serviços
              terceirizados de alta qualidade para nossos contratantes,
              entregando resultados concretos. Nossos clientes comprovam a
              excelência do nosso trabalho e sempre estão satisfeitos. Torne-se
              mais um parceiro de sucesso da Dual ao optar pelos nossos
              serviços.
            </p>
          </header>

          <Slider {...settings}>
            {lista.map((_, index) => (
              <div className="carrouselImage" key={index}>
                <Image
                  src={`/photos/${index + 1}.jpg`}
                  alt="Serviços prestados"
                  width={500}
                  height={281}
                />
              </div>
            ))}
          </Slider>
        </ClientsContainer>

        <ServicesContainer id="services">
          <h2>Conheça um pouco mais dos nossos serviços em Campo Grande</h2>

          <Slider {...settings2}>
            <div className="cardsItem">
              <Image
                src="/portaria.png"
                alt="Portaria"
                width={251}
                height={196}
              />
              <span>Portaria</span>
              <button onClick={() => setIsPortariaModalOpen(true)}>
                Saiba mais
              </button>

              <Modal
                isModalOpen={isPortariaModalOpen}
                title="Portaria"
                setModalOpen={setIsPortariaModalOpen}
              >
                <Image
                  src="/portaria-big.png"
                  alt="Portaria"
                  height={250}
                  width={196}
                />

                <div>
                  <p>
                    Para a função de porteiro, nossa empresa conta com
                    profissionais experientes no mercado. Nossa equipe é
                    composta por pessoas atentas e que realizam um trabalho
                    sério. Contate-nos e solucione suas dúvidas.
                  </p>

                  <a href="https://api.whatsapp.com/send?phone=556799828077&text=Olá! Gostaria de um orçamento.">
                    Entre em contato
                  </a>
                </div>
              </Modal>
            </div>
            <div className="cardsItem">
              <Image
                src="/services.png"
                alt="Serviços Gerais"
                width={251}
                height={196}
              />
              <span>Serviços Gerais</span>
              <button onClick={() => setIsServicosModalOpen(true)}>
                Saiba mais
              </button>

              <Modal
                isModalOpen={isServicosModalOpen}
                title="Serviços Gerais"
                setModalOpen={setIsServicosModalOpen}
              >
                <img src="/services-big.png" alt="Serviços Gerais" />

                <div>
                  <p>
                    Nossos profissionais são especialistas em higienização e
                    conservação de ambientes. A Dual oferece resultados que
                    solucionarão sua demanda, atentando para cada detalhe de
                    maneira qualificada.
                  </p>

                  <a href="https://api.whatsapp.com/send?phone=556799828077&text=Olá! Gostaria de um orçamento.">
                    Entre em contato
                  </a>
                </div>
              </Modal>
            </div>
            <div className="cardsItem">
              <Image
                src="/limpeza.png"
                alt="limpeza"
                width={251}
                height={196}
              />
              <span>Zeladoria</span>
              <button onClick={() => setIsZeladoriaModalOpen(true)}>
                Saiba mais
              </button>

              <Modal
                isModalOpen={isZeladoriaModalOpen}
                title="Zeladoria"
                setModalOpen={setIsZeladoriaModalOpen}
              >
                <img src="/zeladoria-big.png" alt="Zeladoria" />

                <div>
                  <p>
                    Disponibilizamos zeladores experientes no mercado, atentos
                    para lidar com demandas diversas e encargos da função. Nossa
                    equipe é instruída para realizar serviços de maneira ágil e
                    objetiva.
                  </p>

                  <a href="https://api.whatsapp.com/send?phone=556799828077&text=Olá! Gostaria de um orçamento.">
                    Entre em contato
                  </a>
                </div>
              </Modal>
            </div>
            <div className="cardsItem">
              <Image
                src="/adm.png"
                alt="Apoio Administrativo"
                width={251}
                height={196}
              />
              <span>Apoio Administrativo</span>
              <button onClick={() => setIsAdmModalOpen(true)}>
                Saiba mais
              </button>

              <Modal
                isModalOpen={isAdmModalOpen}
                title="Apoio Administrativo"
                setModalOpen={setIsAdmModalOpen}
              >
                <Image
                  src="/adm-big.png"
                  alt="Apoio administrativo"
                  width={251}
                  height={196}
                />

                <div>
                  <p>
                    Contamos com profissionais especializados para realizar
                    trabalhos administrativos, atuando em diversas vertentes da
                    função. Dentre alguns cargos, disponibilizamos até mesmo
                    estagiários, treinados e instruídos pela equipe Dual.
                  </p>

                  <a href="https://api.whatsapp.com/send?phone=556799828077&text=Olá! Gostaria de um orçamento.">
                    Entre em contato
                  </a>
                </div>
              </Modal>
            </div>
            <div className="cardsItem">
              <Image
                src="/jardinagem.png"
                alt="Jardinagem"
                width={251}
                height={196}
              />
              <span>Jardinagem</span>
              <button onClick={() => setIsJardinagemModalOpen(true)}>
                Saiba mais
              </button>
              <Modal
                isModalOpen={isJardinagemModalOpen}
                title="Jardinagem"
                setModalOpen={setIsJardinagemModalOpen}
              >
                <img src="/jardinagem-big.png" alt="Jardinagem" />

                <div>
                  <p>
                    Mantemos o seu jardim em ótimas condições, realizando podas
                    e tratamentos com muito cuidado. Venha conferir nosso
                    trabalho e realize um orçamento.
                  </p>

                  <a href="https://api.whatsapp.com/send?phone=556799828077&text=Olá! Gostaria de um orçamento.">
                    Entre em contato
                  </a>
                </div>
              </Modal>
            </div>
          </Slider>

          <ButtonDownload href="/PORTFOLIO.pdf" download="portfolio-dual.pdf">
            <FaFilePdf style={{ marginRight: ".5rem" }} />
            Clique aqui e baixe o nosso portfólio
          </ButtonDownload>
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

            <a href="/PORTFOLIO.pdf" target="_blank">
              Saiba mais
            </a>
          </div>
        </AboutUsContainer>
      </main>
    </>
  );
}
