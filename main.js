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
//в функцию добавила четвертый параметр для картинки, а то ощущение, что у игрока раздвоение личности под разными именами ж)

function createPlayer(playerClass, playerName, playerLife, playerImg) {
    const $playerdiv = document.createElement('div');
    $playerdiv.classList.add(playerClass);

    const $progressbardiv = document.createElement('div');
    $progressbardiv.classList.add('progressbar');

    const $lifediv = document.createElement('div');
    $lifediv.classList.add('life');
    $lifediv.style.width = `${playerLife}%`;

    const $namediv = document.createElement('div');
    $namediv.classList.add('name');
    $namediv.innerText = playerName;

    const $characterdiv = document.createElement('div');
    $characterdiv.classList.add('character');
    const $img = document.createElement('img');
    $img.src = `http://reactmarathon-api.herokuapp.com/assets/${playerImg}.gif`;
    $characterdiv.appendChild($img);

    $progressbardiv.appendChild($lifediv);
    $progressbardiv.appendChild($namediv);

    $playerdiv.appendChild($progressbardiv);
    $playerdiv.appendChild($characterdiv);


    const $arenasdiv = document.querySelector('.arenas');
    $arenasdiv.appendChild($playerdiv);
}

createPlayer('player1', 'Loki', 90, 'kitana');
createPlayer('player2', 'Thor', 50, 'liukang');
