import _ from 'lodash';
import "./style.scss";
import potionImage from './logo.jpg'

function component() {
    const element = document.createElement('div');

    element.innerHTML = 'Tincture Tinkerer!';

    const heroBanner = new Image();
    heroBanner.src = potionImage;

    element.appendChild(heroBanner);
  
    return element;
  }
  
  document.querySelector('.main').appendChild(component());