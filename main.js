const $arenasdiv = document.querySelector('.arenas');

const player1 = {
    name: 'LOKI',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['sword', 'bow', 'knife', 'morgenshtern', 'fireball'],
    attack: function() {
        console.log(player1.name + ' Fight!')
    },
};

const player2 = {
    name: 'THOR',
    hp: 70,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['sword', 'bow', 'knife', 'morgenshtern', 'fireball'],
    attack: function() {
        console.log(player2.name + ' Fight!')
    },
};

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
};

function createPlayer(playerClass, playerObj) {
    const $playerdiv = createElement('div', playerClass);
    const $progressbardiv = createElement('div', 'progressbar');
    const $lifediv = createElement('div', 'life');
    const $namediv = createElement('div', 'name');
    const $characterdiv = createElement('div', 'character');
    const $img = createElement('img');

    $lifediv.style.width = `${playerObj.hp}%`;
    $namediv.innerText = playerObj.name;
    $img.src = playerObj.img;

    $characterdiv.appendChild($img);
    $progressbardiv.appendChild($lifediv);
    $progressbardiv.appendChild($namediv);

    $playerdiv.appendChild($progressbardiv);
    $playerdiv.appendChild($characterdiv);

    return $playerdiv;
};

$arenasdiv.appendChild(createPlayer('player1', player1));
$arenasdiv.appendChild(createPlayer('player2', player2));

