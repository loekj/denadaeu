import React from 'react';
import ReactDOM from 'react-dom';
export const Rec = ({ points, setPoints }) => {
  console.log({points});
  return (
    <div>
      {points < 16 && (
        <div>
          <span className='text-red-600 italic'>Tu és do tipo "EXPLORADOR DE CIDADES"!</span>
          <div className='w-200px h-200px'>
            <img src='/assets/images/Gifts/Suitcase1_lime3.jpg' className="w-full h-full object-contain" />
          </div>
          <span>Ou</span>
          <div className='w-200px h-200px'>
            <img src='/assets/images/Gifts/CityBackpack1_red1.png' className="w-full h-full object-contain" />
          </div>
          <span>Ou</span>
          <div className='w-200px h-200px'>
            <img src='/assets/images/Gifts/Hat1_brown.jpg' className="w-full h-full object-contain" />
          </div>
        </div>
      )}
      {points > 15 && points < 23 && (
        <div>
          <span className='text-red-600 italic'>Tu és do tipo "VIAJANTE DO MUNDO"!</span>
          <div className='w-200px h-200px'>
            <img src='/assets/images/Gifts/RuggedBackpack1_black3.png' className="w-full h-full object-contain" />
          </div>
          <span>Ou</span>
          <div className='w-200px h-200px'>
            <img src='/assets/images/Gifts/Weekender1_leather1.jpg' className="w-full h-full object-contain" />
          </div>
          <span>Ou</span>
          <div className='w-200px h-200px'>
            <img src='/assets/images/Gifts/RuggedBackpack2_blue1.png' className="w-full h-full object-contain" />
          </div>
        </div>
      )}
      {points > 22 && (
        <div>
          <span className='text-red-600 italic'>Tu és do tipo "ALPINISTA"!</span>
          <div className='w-200px h-200px'>
            <img src='/assets/images/Gifts/HikeBackpack1_red1.png' className="w-full h-full object-contain" />
          </div>
          <span>Ou</span>
          <div className='w-200px h-200px'>
            <img src='/assets/images/Gifts/Camelback1_black1.jpg' className="w-full h-full object-contain" />
          </div>
        </div>
      )}
      <div>
        <span>
          Okay, agora clique <a href='mailto:loek@denadaeu.com?subject=Eu%20escolhi!&body=Olá!%20%0AEu%20quero%20ter%20esta%20presente...' target='_blank' className="text-blue-400 underline">AQUI</a> para enviar um e-mail à De Nada Eu com o presente que desejas reivindicar (tu podes clicar <a href='https://denadaeu.com' target='_blank' className="text-blue-400 underline">aqui</a> para ver o site com todos os produtos em outra tela).
        </span>
        <br />
      </div>
    </div>
  )
}
export default Rec;