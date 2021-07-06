import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Most Popular Coursers</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src="https://www.downloadpirate.com/wp-content/uploads/2019/12/Udm_ICCMC_FI.jpg"
              text="Adobe Illustrator CC 2020 MasterClass"
              label='Instructor: "Merrel Edgcombe"'
              path='/courses'
            />
            <CardItem
              src="https://www.real.discount/wp-content/uploads/2020/05/2663098_1c25_2.jpg"
              text='Learn Node.js From Scratch'
              label='Instructor: Otto Moehler'
              path='/courses'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src="https://coursemarks.com/wp-content/uploads/2020/11/2400268_3fbb_4.jpg"
              text="The Ultimate Drawing Masterclass: Start Drawing Better Today"
              label="Instructor: Libby Brickner"
              path='/courses'
            />
            <CardItem
              src="https://www.real.discount/wp-content/uploads/2017/06/24823_963e_12-600x338.jpg"
              text="Learn SQL From Scratch"
              label='Instructor: Ginni Baskerfield'
              path='/courses'
            />
            <CardItem
              src="https://coursemarks.com/wp-content/uploads/2020/11/2400268_3fbb_4.jpg"
              text="The Ultimate Drawing Masterclass: Start Drawing Better Today"
              label="Instructor: Libby Brickner"
              path='/courses'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
