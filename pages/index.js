import React, { Component } from 'react';
import Head from 'next/head'
import { Modal } from '../components/Modal.js';
import Footer from '../components/Footer.js'

const VALID_CODE = 'WHATTHIS12';

export class Home extends Component {
  state = { isShown: false };
  checkCode = event => {
    event.preventDefault()
    console.log('pressed with event', event)
    console.log(event.target[0].value)
    const valueInput = event.target[0].value.toUpperCase().trim();
    console.log(event.target[0].value.toUpperCase().trim())
    if (valueInput === VALID_CODE) {
      console.log("YEAH")
      document.getElementById("z1").style.zIndex = "0";
      document.getElementById("z2").style.zIndex = "0";
      document.getElementById("z3").style.zIndex = "0";
      this.showModal()
    } else {
      document.getElementById("errado").classList.remove("invisible")
      document.getElementById("errado").classList.add("visible")
    }
  }


  showModal = () => {
    this.setState({ isShown: true }, () => {
      // this.closeButton.focus();
    });
    this.toggleScrollLock();
  };
  closeModal = () => {
    // this.setState({ isShown: false });
    // this.TriggerButton.focus();
    // this.toggleScrollLock();
  };
  onKeyDown = (event) => {
    // if (event.keyCode === 27) {
    //   this.closeModal();
    // }
  };
  onClickOutside = (event) => {
    // if (this.modal && this.modal.contains(event.target)) return;
    // this.closeModal();
  };

  toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock');
  };
  render() {return (
    <div id='main-page'>
      <Head>
        <title>De Nada Eu</title>
        <meta name="description" content="De Nada Eu Travel Gear" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500&family=Shojumaru&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* Header  */}
        <div id='home' className="hero-image overflow-x-hidden flex flex-col space-y-7 items-center w-full pt-4">
          <img className='h-44' src="/assets/images/Logos/DeNadaEu_Transparent.png" alt="" />
          <br />
          <div style={{textAlign: "left"}}>
            <br />
            <h1 className='-translate-x-24 text-7xl font-extrabold font-shojumaru text-center text-white'>ONDE TU FORES</h1>
            <br />
            <h1 className='translate-x-32 text-7xl font-extrabold font-shojumaru text-center text-white margin-bottom:0'>IREMOS CONTIGO</h1>
          </div>
          <img className='absolute top-10 -left-4 w-1/4' src="/assets/images/Funny/whats_this.png" alt=""  data-aos-duration="5000" data-aos-once="false" data-aos-easing="easing" data-aos="slide-left" />
          {/* <img className='absolute bottom-32 -right-0 w-1/6 hover:-translate-x-20 duration-2500' src="/assets/images/Funny/image-1.png" alt="" /> */}
        </div>
        {/* About Us  */}
        <div id="about" className="relative overflow-x-clip">
          <div className="max-w-5xl px-5 pt-28 py-14 mx-auto grid grid-cols-2 gap-10 items-center">
            <div className="relative h-full w-full" data-aos-duration="1500" data-aos-once="false" data-aos="slide-right">
              <img src="/assets/images/Photo_fly_in/Jessica_Mountain.png" alt="" />
              <img className='absolute top-10 -right-20 w-4/6' src="/assets/images/Photo_fly_in/Caralho_frio.png" alt=""  data-aos-duration="1700" data-aos-once="false" data-aos="fade-up" />
            </div>
            <div className="flex flex-col space-y-5">
                <h1 className='flex items-center justify-center text-4xl font-bold text-green-dark' data-aos-duration="1500" data-aos-once="false" data-aos="fade-up">
                  <img className='relative left-7 w-48 animate-bounce' src="/assets/images/Funny/face-1.png" alt="" />
                  <span className='font-montserrat flex-shrink-0'>Sobre Nós</span>
                  <img className='w-56 animate-spin' src="/assets/images/Funny/face-3.png" alt="" />
                </h1>
                <p className="text-base" data-aos-duration="1500" data-aos-once="false" data-aos="fade-up">A De Nada Eu foi fundada por uma brasileira e um holandês. A empresa está sediada em Porto Rico. Nosso equipamento de viagem é da mais alta qualidade, proveniente de todo o mundo. Apoiamos marcas locais. Nossos equipamentos são isentos de glúten, intolerantes à lactose e, acima de tudo, não foram geneticamente modificados. Esta loja é apenas para pessoas legal que amam montanhas. Se tu tiver algum feedback ou reclamação sobre este site, você está fora de questão, amigo de sorte, não fazemos formulários de feedback ou qualquer uma dessas bobagens dos dias modernos. Nós fazemos com a gente e tu compras da gente, entendeu? Ótimo! Tu és sempre bem-vindo para visitar nossa loja em Puerto Rico, na ilha de Vieques.</p>
                {/* <a href="#shop" className="btn space-x-5 bg-green-dark hover:border-green-dark hover:text-green-dark" data-aos-duration="1500" data-aos-once="false" data-aos="fade-up">
                  <span className='font-dancing-script text-4xl uppercase'>Shop Now</span>
                  <img className='h-8 animate-ping' src="/assets/images/Funny/Boom-PNG-2.png" alt="" />
                </a> */}
            </div>
          </div>
          {/* <img className='w-40 animate-bounce' src="/assets/images/Funny/face-5.png" alt="" /> */}
          <img className='absolute -top-10 left-10 w-64' src="/assets/images/Funny/face-5.png" alt="" />
          {/* <img className='absolute top-10 right-10 w-28 animate-pulse' src="/assets/images/Funny/Boom-PNG-2.png" alt="" /> */}
          {/* <img className='absolute bottom-0 right-40 w-28' src="/assets/images/Funny/image-1.png" alt=""  data-aos-duration="2000" data-aos-once="false" data-aos="slide-up" /> */}
          {/* <img className='absolute bottom-0 right-10 w-32' src="/assets/images/Funny/image-2.jpeg" alt=""  data-aos-duration="1000" data-aos-once="false" data-aos="slide-left" /> */}
        </div>
        {/* Shop  */}
        <div id='shop' className='relative overflow-hidden'>
          <div className="max-w-5xl mx-auto py-14 px-5 flex flex-col space-y-10">
              <h1 className='flex items-center justify-center text-4xl font-bold text-green-dark' data-aos-duration="1500" data-aos-once="false" data-aos="fade-up">
                {/* <img className='relative left-4 w-40 animate-bounce' src="/assets/images/Funny/face-4.png" alt="" /> */}
                <span className='font-shojumaru flex-shrink-0'>Loja Legal</span>
                {/* <img className='w-40 animate-bounce' src="/assets/images/Funny/face-5.png" alt="" /> */}
              </h1>
              {/* Products  */}
              <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
                <div className="product-card" data-aos-duration="1500" data-aos-once="false" data-aos="fade-up">
                  <div className="w-full rounded-2xl overflow-hidden lg:h-52 pt-3">
                    <img src='/assets/images/Gifts/Camelback1_black1.jpg' className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-2xl font-bold text-green-dark">
                        Camelback 3L
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                      Yo! Fique hidratado eh pá! Capacidade de embalagem de 14L, armazenamento de água de 3L. Bolsos no cinto e sistema de clique magnético para o tubo. 845gr. O que tu queres mais na tua trilha?
                      </p>

                      <p className="mt-1 text-sm italic text-gray-500">
                        2 cores, envie-nos um email <a href='mailto:loek@denadaeu.com?subject=Quais%20cores%20tu%20tens%20de%20Camelback%3F&body=Olá!%20%0ATu%20podes%20me%20enviar%20as%20cores%20disponíveis%3F%0A%20Obrigada%20eu!' target='_blank' className="text-blue-400 underline">AQUI</a> para ver mais cores
                      </p>
                    <p className="text-l font-light italic text-red-600">3 restantes, seja rápido!</p>
                  </div>
                  <img className='absolute -top-28 -left-20 w-48 animate-spin' src="/assets/images/Funny/novo-1.png" alt="" />
                </div>
                <div className="product-card" data-aos-duration="1500" data-aos-once="false" data-aos="fade-up">
                  <div className="w-full rounded-2xl overflow-hidden lg:h-52 pt-3">
                    <img src='/assets/images/Gifts/CityBackpack1_red1.png' className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-2xl font-bold text-green-dark">
                      Mochila de Cidade
                    </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Andar de bicicleta? Sim! 25L, capa para laptop se encaixa em laptops até 15", alça extra para sobrecarregar, fechamento rápido da cinch na parte superior, 450gr. Obviamente, uma mochila com aparência legal.
                      </p>
                      <p className="mt-1 text-sm italic text-gray-500">
                        5 cores, envie-nos um email <a href='mailto:loek@denadaeu.com?subject=Quais%20cores%20tu%20tens%20de%20Mochila%20de%20Cidade%3F&body=Olá!%20%0ATu%20podes%20me%20enviar%20as%20cores%20disponíveis%3F%0A%20Obrigada%20eu!' target='_blank' className="text-blue-400 underline">AQUI</a> para ver mais cores
                      </p>
                      <p className="text-l font-light italic text-red-600">10 restantes</p>
                  </div>
                </div>
                <div className="product-card" data-aos-duration="1500" data-aos-once="false" data-aos="fade-up">
                  <div className="w-full rounded-2xl overflow-hidden lg:h-52 pt-3">
                    <img src='/assets/images/Gifts/Jessica_Stone.jpg' className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col space-y-2">
                      <h3 className="text-2xl font-bold text-green-dark">
                        Jéssica Stone Album
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                      O novo álbum "Meu Deus" de Jéssica Stone! Música folk australiana combinada com batidas brasileiras que fazem tuas panquecas dançarem. Jéssica Stone veio das ruas de São Paulo trabalhando como uma fashion babe, e agora está em turnê pelo mundo.
                      </p>
                      <p className="text-l font-light italic text-red-600 pt-2">- fora de estoque -</p>
                  </div>
                  <img className='absolute -top-20 -left-10 w-44 animate-pulse' src="/assets/images/Funny/novo-2.png" alt="" />
                </div>
                <div className="product-card" data-aos-duration="1500" data-aos-once="false" data-aos="fade-up">
                  <div className="w-full rounded-2xl overflow-hidden lg:h-52 pt-3">
                    <img src='/assets/images/Gifts/Hat1_brown.jpg' className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col space-y-2">
                      <h3 className="text-2xl font-bold text-green-dark">
                        Chapéu Personalizado
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Quer parecer legal pra caralho? Pare de olhar. Os chapéus de <a href='https://www.instagram.com/hampui_hats' target='_blank' className="text-blue-400 underline">Hampui</a> são os melhores chapéus do mundo, vindos de San Francisco. Tu podes criar um chapéu personalizado com o fundador em uma videochamada. Essa merda ficou de verdade, mano.
                      </p>
                      <p className="text-l font-light italic text-red-600 pt-2">8 restantes</p>
                  </div>
                  <img className='absolute top-50 -right-10 w-44 rotate-12' src="/assets/images/Funny/novo-3.png" alt="" />
                </div>
                <div className="product-card" data-aos-duration="1500" data-aos-once="false" data-aos="fade-up">
                  <div className="w-full rounded-2xl overflow-hidden lg:h-52 pt-3">
                    <img src='/assets/images/Gifts/HikeBackpack1_red1.png' className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col space-y-2">
                      <h3 className="text-2xl font-bold text-green-dark">
                        Mochila de Montanhismo
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Esse cara vai fazer tu chegar ao Monte Everest, sério! 35L, bolso de transporte de machado de gelo, sistema de transporte de corda, 890gr
                      </p>
                      <p className="mt-1 text-sm italic text-gray-500">
                        2 cores, envie-nos um email <a href='mailto:loek@denadaeu.com?subject=Quais%20cores%20tu%20tens%20de%20Mochila%20de%20Montanhismo%3F&body=Olá!%20%0ATu%20podes%20me%20enviar%20as%20cores%20disponíveis%3F%0A%20Obrigada%20eu!' target='_blank' className="text-blue-400 underline">AQUI</a> para ver mais cores
                      </p>
                      <p className="text-l font-light italic text-red-600">só 1 restante, seja rápido!</p>
                  </div>
                </div>
                <div className="product-card" data-aos-duration="1500" data-aos-once="false" data-aos="fade-up">
                  <div className="w-full rounded-2xl overflow-hidden lg:h-52 pt-3">
                    <img src='/assets/images/Gifts/PetRock1.png' className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col space-y-2">
                      <h3 className="text-2xl font-bold text-green-dark">
                        Rocha de Estimação
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Ama passear com o cachorro, mas odeia limpar cocô? Este animal de estimação é uma rocha e é perfeito para flertar com meninos e meninas gostosos. Todo mundo te ama quando tu estás passeando com teu novo animal de estimação. Não caga, fede, ou late. Ele simplesmente ama tu incondicionalmente.
                      </p>
                      <p className="text-l font-light italic text-red-600">- fora de estoque -</p>
                  </div>
                  <img className='absolute -top-10 -right-5 w-44 animate-bounce' src="/assets/images/Funny/whats_this.png" alt="" />
                </div>
                <div className="product-card" data-aos-duration="1500" data-aos-once="false" data-aos="fade-up">
                  <div className="w-full rounded-2xl overflow-hidden lg:h-52 pt-3">
                    <img src='/assets/images/Gifts/RuggedBackpack1_black3.png' className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col space-y-2">
                      <h3 className="text-2xl font-bold text-green-dark">
                        Mochila Robusta
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Que besta! 45L, resistente ao tempo, compartimentos separados, bolsos para laptop, 3 jeitos de levar, aprovado como bagagem de mão para aviões, pode deslizar na alça de uma grande mala. Perfeito para o viajante global que deseja ir a qualquer lugar.
                      </p>
                      <p className="text-l font-light italic text-red-600">5 restantes</p>
                  </div>
                </div>
                <div className="product-card" data-aos-duration="1500" data-aos-once="false" data-aos="fade-up">
                  <div className="w-full rounded-2xl overflow-hidden lg:h-52 pt-3">
                    <img src='/assets/images/Gifts/Weekender1_leather1.jpg' className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col space-y-2">
                      <h3 className="text-2xl font-bold text-green-dark">
                        Bolsa de Fim de Semana
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Tu também gostas de ir para uma cabana bonita na floresta no fim de semana para ficar longe de colegas chatos no trabalho? Nós também!
                      </p>
                      <p className="mt-1 text-sm italic text-gray-500">
                        2 cores, envie-nos um email <a href='mailto:loek@denadaeu.com?subject=Quais%20cores%20tu%20tens%20de%20Bolsa%20de%20Fim%20de%20Semana%3F&body=Olá!%20%0ATu%20podes%20me%20enviar%20as%20cores%20disponíveis%3F%0A%20Obrigada%20eu!' target='_blank' className="text-blue-400 underline">AQUI</a> para ver mais cores
                      </p>
                      <p className="text-l font-light italic text-red-600">3 restantes, seja rápido!</p>
                  </div>
                  <img className='absolute -top-20 -left-8 rotate-6 w-44 animate-pulse' src="/assets/images/Funny/novo-4.png" alt="" />
                </div>
                <div className="product-card" data-aos-duration="1500" data-aos-once="false" data-aos="fade-up">
                  <div className="w-full rounded-2xl overflow-hidden lg:h-52 pt-3">
                    <img src='/assets/images/Gifts/Suitcase1_lime3.jpg' className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col space-y-2">
                      <h3 className="text-2xl font-bold text-green-dark">
                        Mala Vintage
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Liberte a tua Audrey Hepburn interior. À prova d'água, com rodas, elástico externo, separação interna com zíper, clipe para roupas, aprovado como bagagem de mão para aviões. 41,5 x 26,5 x 17 cm
                      </p>
                      <p className="mt-1 text-sm italic text-gray-500">
                        4 cores, envie-nos um email <a href='mailto:loek@denadaeu.com?subject=Quais%20cores%20tu%20tens%20de%20Mala%20Vintage%3F&body=Olá!%20%0ATu%20podes%20me%20enviar%20as%20cores%20disponíveis%3F%0A%20Obrigada%20eu!' target='_blank' className="text-blue-400 underline">AQUI</a> para ver mais cores
                      </p>
                      <p className="text-l font-light italic text-red-600">6 restantes</p>
                  </div>
                </div>
                <div className="product-card" data-aos-duration="1500" data-aos-once="false" data-aos="fade-up">
                  <div className="w-full rounded-2xl overflow-hidden lg:h-52 pt-3">
                    <img src='/assets/images/Gifts/RuggedBackpack2_blue1.png' className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col space-y-2">
                      <h3 className="text-2xl font-bold text-green-dark">
                        Mala Robusta
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Por que não? Por que não ter tudo? Foda-se! Este "bad boy" tem rodas, pode beatbox e dentro tem um forno de pizza. Ah sim, também é uma mochila legal para tuas roupas e outras coisas. 40L, robusta.
                      </p>
                      <p className="mt-1 text-sm italic text-gray-500">
                        2 cores, envie-nos um email <a href='mailto:loek@denadaeu.com?subject=Quais%20cores%20tu%20tens%20de%20Mala%20Robusta%3F&body=Olá!%20%0ATu%20podes%20me%20enviar%20as%20cores%20disponíveis%3F%0A%20Obrigada%20eu!' target='_blank' className="text-blue-400 underline">AQUI</a> para ver mais cores
                      </p>
                      <p className="text-l font-light italic text-red-600">12 restantes</p>
                  </div>
                  <img className='absolute -top-10 -right-5 w-44 animate-pulse' src="/assets/images/Funny/whats_this_2.png" alt="" />
                </div>
              </div>
          </div>

          {/* Funny Images in shop section  */}
          {/* <img className='absolute top-10 left-10 w-28 animate-ping' src="/assets/images/Funny/Boom.png" alt="" /> */}
          {/* <img className='absolute top-10 right-10 w-28 animate-ping' src="/assets/images/Funny/Boom-2.png" alt="" /> */}
          <img className='absolute top-16 -right-0 w-64' data-aos-duration="1500" data-aos-once="false" data-aos="fade-left" src="/assets/images/Funny/face-6.png" alt="" />

          <img className='absolute top-80 -left-16 w-64' src="/assets/images/Funny/jessica_hamburger_left.png" alt=""  data-aos-duration="2100" data-aos-once="false" data-aos="slide-right" />
          <img className='absolute bottom-2/4 -right-16 w-64' src="/assets/images/Funny/face-7-right.png" alt=""  data-aos-duration="2100" data-aos-once="false" data-aos="slide-left" />

          <img className='absolute bottom-1/4 -left-16 w-64' src="/assets/images/Funny/face-7-left.png" alt=""  data-aos-duration="2100" data-aos-once="false" data-aos="slide-right" />
          <img className='absolute bottom-80 -right-16 w-64' src="/assets/images/Funny/face-7-right.png" alt=""  data-aos-duration="2100" data-aos-once="false" data-aos="slide-left" />

          {/* <img className='absolute bottom-0 right-40 w-28' src="/assets/images/Funny/image-1.png" alt=""  data-aos-duration="1000" data-aos-once="false" data-aos="slide-up" /> */}
          {/* <img className='absolute bottom-0 right-10 w-32' src="/assets/images/Funny/image-2.jpeg" alt=""  data-aos-duration="2000" data-aos-once="false" data-aos="slide-left" /> */}
        </div>
        {/* Input and Button Section */}

        <React.Fragment>
        {this.state.isShown ? (
          <Modal
            onSubmit={this.props.onSubmit}
            modalRef={(n) => (this.modal = n)}
            buttonRef={(n) => (this.closeButton = n)}
            closeModal={this.closeModal}
            onKeyDown={this.onKeyDown}
            onClickOutside={this.onClickOutside}
          />
        ) : null}
      </React.Fragment>
        <div id='contact' className="relative overflow-hidden">
          <div className="flex items-center justify-center text-3xl font-bold text-green-dark max-w-5xl mx-auto py-24" data-aos-duration="1500" data-aos-once="false" data-aos="fade-up">
            <form onSubmit={this.checkCode} className='flex flex-col space-y-7'>
              <p id="z3" className="z-50">
                Reivindique seu acesso VIP aqui
              </p>
              <span id='errado' className="invisible text-base text-red-600 italic" >Código errado, amigo! Tenta mais uma vez...</span>
              <input id="z1" type="text" className='z-50 w-2/5 mx-auto rounded-full px-4 py-2 text-base text-green-dark placeholder-green-dark placeholder-opacity-70 border border-green-dark border-opacity-50' placeholder='teu código aqui...' />
              <input id="z2" type="submit" value="REIVINDICAR COISAS" className="z-50 text-4xl cursor-pointer btn mx-auto space-x-5 bg-green-dark hover:border-green-dark hover:text-green-dark" data-aos-duration="1500" data-aos-once="false" data-aos="fade-up">
                    {/* <span className='font-montserrat text-4xl uppercase'></span> */}
                    {/* <img className='h-8 animate-ping' src="/assets/images/Funny/Boom-PNG-2.png" alt="" /> */}
              </input>
            </form>
          </div>
          {/* <img className='absolute bottom-20 right-0 w-64' src="/assets/images/Funny/image-1-right.png" alt=""  data-aos-duration="1000" data-aos-once="false" data-aos="slide-left" /> */}
          <img className='absolute bottom-40 right-40 w-64 rotate-6 animate-spin' src="/assets/images/Funny/High-Five.png" alt=""  />
          <img className='absolute bottom-40 right-40 w-64 animate-ping' src="/assets/images/Funny/Boom-PNG-2.png" alt="" />
          <a href='mailto:loek@denadaeu.com?subject=Ajuda%20me!%3F&body=Olá!!' target='_blank'><img className='absolute -bottom-36 left-64 w-64' src="/assets/images/Jessica_Support.png" alt=""  data-aos-duration="1000" data-aos-once="false" data-aos="slide-up" /></a>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )}
}

export default Home