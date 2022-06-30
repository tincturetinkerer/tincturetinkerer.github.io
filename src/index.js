import _ from 'lodash';
import "./style.scss";

function component() {
    const element = document.createElement('div');

    element.innerHTML = 'Tincture Tinkerer!';
  
    return element;
  }
  
  document.body.appendChild(component());