const player1 = {
    name: '',
    hp: 0,
    img: '',
    weapon: ['sword', 'bow', 'knife', 'morgenshtern', 'fireball'],
    attack: function() {
        console.log(player1.name + ' Fight!')
    },
};

const player2 = {
    name: '',
    hp: 0,
    img: '',
    weapon: ['sword', 'bow', 'knife', 'morgenshtern', 'fireball'],
    attack: function() {
        console.log(player2.name + ' Fight!')
    },
};

function createPlayer() {
    const $player1div = document.createElement('div');
    $player1div.classList.add('player1');

    const $progressbardiv = document.createElement('div');
    $progressbardiv.classList.add('progressbar');

    const $lifediv = document.createElement('div');
    $lifediv.classList.add('life');
    $lifediv.style.width = '100%';

    const $namediv = document.createElement('div');
    $namediv.classList.add('name');
    $namediv.innerText = 'Loki';

    const $characterdiv = document.createElement('div');
    $characterdiv.classList.add('character');
    const $img = document.createElement('img');
    $img.src = 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif';
    $characterdiv.appendChild($img);

    $progressbardiv.appendChild($lifediv);
    $progressbardiv.appendChild($namediv);

    $player1div.appendChild($progressbardiv);
    $player1div.appendChild($characterdiv);


    const $arenasdiv = document.querySelector('.arenas');
    $arenasdiv.appendChild($player1div);
}

createPlayer();
