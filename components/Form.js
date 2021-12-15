import React, { useEffect, useState } from 'react';
import Rec from './Rec.js';

let points = 0;
export const Form = ({ onSubmit }) => {
  const [qNum, setQNum] = useState(0);
  const [puertoRico, setPuertoRico] = useState(false);
  /* explanation of points:\
  0 - 10  = city
  10 - 20 = traveler
  20+     = mountaineer
  */

  useEffect(() => {
    if (puertoRico) {
      setTimeout(() => {
        const link = document.createElement("a");
        link.id = 'link-to-form';
        link.href = 'https://forms.gle/LiSgpzmjRuXkVNhe6';
        document.getElementsByTagName('body')[0].appendChild(link);
        document.getElementById('link-to-form').click();
        // const newWindow = window.open("", 'PuertoRico', 'noopener,noreferrer')
        // if (newWindow) newWindow.opener = null
        // window.open("");
      }, 6000);
    }
  }, [puertoRico])

  const stickers = [
    (() => {
      return(
        <div>
          <img className='absolute -top-20 -left-8 rotate-6 w-44 animate-pulse' src="/assets/images/Funny/face-2.png" alt="" />
          <img className='absolute -bottom-20 -right-8 rotate-6 w-44 animate-pulse' src="/assets/images/Funny/face-2.png" alt="" />
        </div>
      )
    }),
    (() => {
      return(
        <div>
          <img className='-z-50  absolute top-20 right-8 rotate-6 w-64 animate-pulse' src="/assets/images/Funny/face-3.png" alt="" />
          <img className='-z-50 absolute -bottom-64 right-8 rotate-12 w-72 animate-pulse' src="/assets/images/Funny/face-3.png" alt="" />
          <img className='-z-50 absolute top-80 right-16 rotate-0 w-72 animate-bounce' src="/assets/images/Funny/face-3.png" alt="" />
          <img className='-z-50  absolute bottom-40 -right-8  w-44 animate-spin' src="/assets/images/Funny/face-3.png" alt="" />
          <img className='-z-50  absolute -bottom-40 -right-8 rotate-6 w-44 animate-spin' src="/assets/images/Funny/face-3.png" alt="" />
        </div>
      )
    }),
    (() => {
      return(
        <div>
          <img className='-z-50 absolute top-20 -right-8 opacity-40 rotate-6 w-44' src="/assets/images/Funny/face-5.png" alt="" />
          <img className='-z-50 absolute -bottom-20 -right-16 animate-spin w-72 opacity-60' src="/assets/images/Funny/face-6.png" alt="" />
        </div>
      )
    }),
    (() => {
      return(
        <div>
          {/* <img className='absolute -top-20 -left-8 rotate-6 w-44 animate-pulse' src="/assets/images/Funny/face-2.png" alt="" /> */}
          <img className='-z-50 absolute -bottom-20 -right-8 rotate-6 w-80' src="/assets/images/Funny/Boom-3.png" alt="" />
          <img className='-z-50 absolute bottom-40 -right-24 rotate-12 w-72' src="/assets/images/Funny/Boom-3.png" alt="" />
          <img className='-z-50 absolute -bottom-40 -right-24 -rotate-12 w-72' src="/assets/images/Funny/Boom-3.png" alt="" />
        </div>
      )
    }),
    (() => {
      return(
        <div>
          {/* <img className='absolute -top-20 -left-8 rotate-6 w-44 animate-pulse' src="/assets/images/Funny/face-2.png" alt="" /> */}
          <img className='-z-50 absolute bottom-10 right-0 rotate-6 w-80 animate-bounce' src="/assets/images/Funny/image-1-right.png" alt="" />
          <img className='-z-50 absolute bottom-0 right-0 rotate-6 w-80 animate-bounce' src="/assets/images/Funny/image-1-right.png" alt="" />
          <img className='-z-50 absolute -bottom-20 -right-8 rotate-6 w-80 animate-bounce' src="/assets/images/Funny/image-1-right.png" alt="" />
          <img className='-z-50 absolute -bottom-24 right-8 rotate-6 w-80 animate-bounce' src="/assets/images/Funny/image-1-right.png" alt="" />
          <img className='-z-50 absolute -bottom-32 right-5 rotate-6 w-80 animate-bounce' src="/assets/images/Funny/image-1-right.png" alt="" />
        </div>
      )
    }),
    (() => {
      return(
        <div>
          {/* <img className='absolute -top-20 -left-8 rotate-6 w-44 animate-pulse' src="/assets/images/Funny/face-2.png" alt="" /> */}
          <img className='-z-50 absolute -bottom-20 -right-8 rotate-6 w-72' src="/assets/images/Funny/whats_this.png" alt="" />
          <img className='-z-50 absolute bottom-20 -left-8 -rotate-6 w-96' src="/assets/images/Funny/whats_this.png" alt="" />
          <img className='-z-50 absolute -bottom-36 -left-8 -rotate-6 w-96' src="/assets/images/Funny/whats_this.png" alt="" />
          <img className='-z-50 absolute top-16 left-16 -rotate-0 w-112' src="/assets/images/Funny/whats_this_2.png" alt="" />
        </div>
      )
    }),
    (() => {
      return(
        <div>
          {/* <img className='-z-50 absolute -top-20 -left-8 rotate-6 w-44 animate-pulse' src="/assets/images/Funny/face-2.png" alt="" /> */}
          <img className='-z-50 absolute -bottom-20 -right-8 rotate-6 w-44 animate-pulse' src="/assets/images/Funny/face-2.png" alt="" />
        </div>
      )
    }),
    (() => {
      return(
        <div>
          <img className='-z-50 absolute -top-20 -left-8 rotate-6 w-44 animate-pulse' src="/assets/images/Funny/face-2.png" alt="" />
          <img className='-z-50 absolute -bottom-20 -right-8 rotate-6 w-44 animate-pulse' src="/assets/images/Funny/face-2.png" alt="" />
        </div>
      )
    })
  ];

  const questions = [
    {
      q: 'Para que tu otimiza?',
      a: [
        (() => {
          return(
            <span className="cursor-pointer" onClick={() => {points += 2; setQNum(qNum + 1)}}>A bagagem deve ser prática e, para muitos casos de uso</span>
          )
        }),
        (() => {
          return(
            <span className="cursor-pointer" onClick={() => {points += 1; setQNum(qNum + 1)}}>Estilo, eu quero ser o mais legal</span>
          )
        }),
        (() => {
          return(
            <span className="cursor-pointer" onClick={() => {points += 4; setQNum(qNum + 1)}}>Durabilidade, deve resistir à selva e às montanhas</span>
          )
        }),
        (() => {
          return(
            <span className="cursor-pointer" onClick={() => {points += 2; setQNum(qNum + 1)}}>O tamanho importa 🍆 Preocupo-me mais com o tamanho da bagagem</span>
          )
        }),
      ]
    },
    {
      q: 'Se tu precisasse, com quem tu faria sexo?',
      a: [
        (() => {
          return(
            <img src="/assets/images/questions/bolsonaro.jpg" className="cursor-pointer" onClick={() => {points += 1; setQNum(qNum + 1)}} />
          )
        }),
        (() => {
          return(
            <img src="/assets/images/questions/martin.jpeg" className="cursor-pointer" onClick={() => {points += 4; setQNum(qNum + 1)}} />
          )
        }),
        (() => {
          return(
            <img src="/assets/images/questions/angela.jpg" className="cursor-pointer" onClick={() => {points += 2; setQNum(qNum + 1)}} />
          )
        }),
        (() => {
          return(
            <img src="/assets/images/questions/post.jpg" className="cursor-pointer" onClick={() => {points += 4; setQNum(qNum + 1)}} />
          )
        }),
        (() => {
          return(
            <img src="/assets/images/questions/brick.jpg" className="cursor-pointer" onClick={() => {points += 1; setQNum(qNum + 1)}} />
          )
        }),
      ]
    },
    {
      q: 'Qual objetivo lhe daria mais prazer?',
      a: [
        (() => {
          return(
            <div><span className="cursor-pointer" onClick={() => {points += 4; setQNum(qNum + 1)}}>Escalando os picos mais altos em todos os 7 continentes </span><a href="https://pt.wikipedia.org/wiki/Sete_cumes" target="_blank" className='text-blue-400 underscore'>(info)</a></div>
          )
        }),
        (() => {
          return(
            <span className="cursor-pointer" onClick={() => {points += 2; setQNum(qNum + 1)}}>Visitando todas as capitais do mundo</span>
          )
        }),
        (() => {
          return(
            <div><span className="cursor-pointer" onClick={() => {points += 1; setQNum(qNum + 1)}}>Detém o recorde mundial de número de hot dogs consumidos em uma hora </span><a href="https://www.youtube.com/watch?v=ippjx5hQfco" target="_blank" className='text-blue-400 underscore'>(example)</a></div>
          )
        }),
        (() => {
          return(
            <div><span className="cursor-pointer" onClick={() => {points += 4; setQNum(qNum + 1)}}>Cruzando o desfiladeiro de Darién na Colômbia descalço </span><a href="https://pt.wikipedia.org/wiki/Regi%C3%A3o_de_Dari%C3%A9n" target="_blank" className='text-blue-400 underscore'>(info)</a></div>
          )
        }),
      ]
    },
    {
      q: 'Qual pessoa tu mais gostas?',
      a: [
        (() => {
          return(
            <img src="/assets/images/questions/trump.jpg" className="cursor-pointer" onClick={() => {points += 1; setQNum(qNum + 1)}} />
          )
        }),
        (() => {
          return(
            <img src="/assets/images/questions/elvis.jpg" className="cursor-pointer" onClick={() => {points += 3; setQNum(qNum + 1)}} />
          )
        }),
        (() => {
          return(
            <img src="/assets/images/questions/loek.png" className="cursor-pointer" onClick={() => {points += 4; setQNum(qNum + 1)}} />
          )
        }),
        (() => {
          return(
            <img src="/assets/images/questions/rambo.jpg" className="cursor-pointer" onClick={() => {points += 4; setQNum(qNum + 1)}} />
          )
        }),
      ]
    },
    {
      q: 'Se houvesse apenas um esporte que tu pudesses praticar pelo resto da vida, seria...',
      a: [
        (() => {
          return(
            <img src="/assets/images/questions/curling.jpeg" className="cursor-pointer" onClick={() => {points += 1; setQNum(qNum + 1)}} />
          )
        }),
        (() => {
          return(
            <img src="/assets/images/questions/chess.jpeg" className="cursor-pointer" onClick={() => {points += 1; setQNum(qNum + 1)}} />
          )
        }),
        (() => {
          return(
            <img src="/assets/images/questions/ski.jpg" className="cursor-pointer" onClick={() => {points += 3; setQNum(qNum + 1)}} />
          )
        }),
        (() => {
          return(
            <img src="/assets/images/questions/unicycle.jpg" className="cursor-pointer" onClick={() => {points += 2; setQNum(qNum + 1)}} />
          )
        }),
        (() => {
          return(
            <img src="/assets/images/questions/sumo.jpg" className="cursor-pointer" onClick={() => {points += 2; setQNum(qNum + 1)}} />
          )
        }),
      ]
    },
    {
      q: 'Qual é o teu encontro mais romântico?',
      a: [
        (() => {
          return(
            <img src="/assets/images/questions/cabin.jpg" className="cursor-pointer" onClick={() => {points += 4; setQNum(qNum + 1)}} />
          )
        }),
        (() => {
          return(
            <img src="/assets/images/questions/tokyo.jpeg" className="cursor-pointer" onClick={() => {points += 2; setQNum(qNum + 1)}} />
          )
        }),
        (() => {
          return(
            <img src="/assets/images/questions/resort.jpg" className="cursor-pointer" onClick={() => {points += 1; setQNum(qNum + 1)}} />
          )
        }),
        (() => {
          return(
            <img src="/assets/images/questions/mountaineering.jpg" className="cursor-pointer" onClick={() => {points += 4; setQNum(qNum + 1)}} />
          )
        }),
        (() => {
          return(
            <img src="/assets/images/questions/picnic.jpg" className="cursor-pointer" onClick={() => {points += 2; setQNum(qNum + 1)}} />
          )
        }),
      ]
    },
    {
      q: 'Se tu tivesses que usar isso em todos os lugares e para sempre, o que tu escolheria?',
      a: [
        (() => {
          return(
            <img src="/assets/images/questions/suit.jpg" className="cursor-pointer" onClick={() => {points += 1; setQNum(qNum + 1)}} />
          )
        }),
        (() => {
          return(
            <img src="/assets/images/questions/sombrero.jpg" className="cursor-pointer" onClick={() => {points += 4; setQNum(qNum + 1)}} />
          )
        }),
        (() => {
          return(
            <img src="/assets/images/questions/jeans.jpg" className="cursor-pointer" onClick={() => {points += 1; setQNum(qNum + 1)}} />
          )
        }),
        (() => {
          return(
            <img src="/assets/images/questions/clown.jpg" className="cursor-pointer" onClick={() => {points += 2; setQNum(qNum + 1)}} />
          )
        }),
      ]
    },
    {
      q: 'Qual superpotência inútil tu escolherias?', // Q 8 index 7
      a: [
        (() => {
          return(
            <div><span className="cursor-pointer" onClick={() => {points += 2; setQNum(qNum + 1)}}>A capacidade de voar, mas a apenas 1 metre do solo e em velocidade de caminhada</span></div>
          )
        }),
        (() => {
          return(
            <span className="cursor-pointer" onClick={() => {points += 1; setQNum(qNum + 1)}}>O poder de ser invisível quando ninguém está olhando para ti</span>
          )
        }),
        (() => {
          return(
            <div><span className="cursor-pointer" onClick={() => {points += 2; setQNum(qNum + 1)}}>A capacidade do seu corpo ser temporariamente feito de borracha</span></div>
          )
        }),
        (() => {
          return(
            <div><span className="cursor-pointer" onClick={() => {points += 1; setQNum(qNum + 1)}}>Superforça, mas tudo que tu tocas quebra</span></div>
          )
        }),
      ]
    }
  ]

  return (
    <div>
      {qNum === 0 ? (
        <div>
        <h3 className="text-1xl font-bold text-green-dark">
          Problemas para decidir? Vamos fazer um teste de personalidade
        </h3>
        <br />
        </div>
      ) : ''}
        <p className='text-3xl'>{questions[qNum] && questions[qNum].q}</p>
        {!questions[qNum] && !puertoRico && (
          <div>
            <p className='text-3xl'>PARABÉNS POR TERMINAR!!!</p>
            <p className='text-lg'>Nós recomendamos...</p>
            <Rec points={points} />
            <br />
            <span className="btn text-xl cursor-pointer" onClick={() => {setPuertoRico(true)}}>Continuar</span>
          </div>
        )}
        <ul>
          {!puertoRico && questions[qNum] && questions[qNum].a.map((obj, i) =>{
            return(
              <li id={'li' + qNum + i} className='pb-3'><span className='text-red-600'>{i + 1 + ') '}</span><span>{obj()}</span></li>
            )
          })}
        </ul>
        {stickers[qNum] && stickers[qNum]()}
        {puertoRico ? (
          <div>
            <span className="text-3xl italic text-red-600">Esperar...</span>
            <br />
            <span className="text-lg italic text-red-600">Tu foste selecionado com a chance de ganhar uma viagem para Porto Rico</span>
            <br />
            <span className="text-3xl italic font-style-bold text-blue-600">Se uma nova janela aparecer, TU VAIS GANHAR!</span>
            <br />
            <br />
            <div class="flex items-center justify-center ">
              <div class="w-24 h-24 border-l-2 border-black rounded-full animate-spin"></div>
            </div>
          </div>
        ) : ''}
    </div>
  );
};
export default Form;


// upper bound is 29, lower is 8
// 8 - 15: city visitor
// 16 - 22: all-round traveler
// 23 - 29: core hiker and mountaineer
