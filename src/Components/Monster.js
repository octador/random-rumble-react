import React from 'react';
import ProgressBar from './ProgressBar';
import { useSelector } from 'react-redux';
import image from '../asset/image/monstre.png'

const Monster = () => {
  const monster = useSelector((store) => store.fight.monster
  );
  return  (
     <section className='mt-5'>
        <div className="container border pb-3 w-75 ">
          <div className="row">
            <div className="card-monstre col-sm-12">
              <div id="monsterCard">
                <div className="text-center">
                  <div className="row">
                    <div className="col-sm-2 offset-sm-3">
                      <span className="badge badge-danger ml-2 " id="degatSpanMonster"></span>
                      <img className="img-fluid  height" src={image} alt='monster' />
                    </div>

                    <div id="comboOnMonster" className="col-sm-6">

                    </div>
                  </div>
                </div>
                <ProgressBar pv={monster.pv} 
                pvMax={monster.pvMax}
                 bgType='bg-danger' 
                 faType='fa-heart' 
                 barName=' : pv' />
              </div>
            </div>
          </div>
        </div>
      </section >
  ) 
}
  


export default Monster;