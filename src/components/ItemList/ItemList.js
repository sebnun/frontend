import React from 'react';

import Item from '../../components/Item/Item';

import './ItemList.css';

import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';

const dataArray = [
  {
    title: 'Our services',
    image: image1,
    description: 'Trialbee is an independent software and service provider specialized in clinical research applications. We are experts of e-recruitment, study retention and EDC solutions.',
    buttonLabel: 'Services'
  },
  {
    title: 'Customers say',
    image: image2,
    description: '&quot;Working with Trialbee really simplified our efforts finding patients. Trialbee opened new channels for patient recruitment and helped us increase the recruitment rates.&quot;',
    buttonLabel: 'Contact us'
  },
  {
    title: 'Our goal',
    image: image3,
    description: 'Trialbee is a dynamic software company with a single purpose of accelerating clinical trials. Our mission is to help bring groundbreaking treatments to the patients faster.',
    buttonLabel: 'About us'
  }
];

export default () => (
  <div className="offering-section">
    <div className="row">

      {dataArray.map((itemData, i) => {
        return (
          <Item
            key={i}
            title={itemData.title}
            image={itemData.image}
            description={itemData.description}
            buttonLabel={itemData.buttonLabel}
          />
        );
      })}

    </div>
  </div>
);