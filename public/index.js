/* global CONVARGO*/
'use strict';

(() => {
  const render = (actors) => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    const template = actors.map(actor => {
      var type;
      actor.type == "credit" ? type = 'success' : type = 'danger';
      return `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${actor.who}</span>
          <span class="label label-${type} label-pill">${actor.amount}</span>
        </li>
      `;
    }).join('');

    div.innerHTML = template;
    fragment.appendChild(div);
    document.querySelector('#actors').innerHTML = '';
    document.querySelector('#actors').appendChild(fragment);
    document.querySelector('#helper').classList.add('visible')
    document.querySelector('#helper').classList.remove('invisible');
  };

  const button = document.querySelector('#compute');

  button.addEventListener('click', function onClick () {
    const trucker = CONVARGO.getTrucker();
    const distance = document.querySelector('.distance').value;
    const volume = document.querySelector('.volume').value;
    const option = document.querySelector('.option').checked;
    const actors = CONVARGO.payActors(trucker, distance, volume, option);

    render(actors);

    return;
  });
})();
