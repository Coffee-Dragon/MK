const $arenasdiv = document.querySelector('.arenas');
const $randomBtn = document.querySelector('.button');

const player1 = {
    playerNo: 1,
    name: 'LOKI',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['sword', 'bow', 'knife', 'morgenshtern', 'fireball'],
    attack: function() {
        console.log(player1.name + ' Fight!')
    },
};

const player2 = {
    playerNo: 2,
    name: 'THOR',
    hp: 100,
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


function createPlayer(playerObj) {
    const $playerdiv = createElement('div', `player${playerObj.playerNo}`);
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

function changeHP(player) {
    const $lifebar = document.querySelector(`.player${player.playerNo} .life`);
    player.hp -= Math.floor(Math.random() * 19) + 1;

    if (player.hp <= 0) {
        player.hp = 0;
    }

    $lifebar.style.width = `${player.hp}%`;
};

function playerWins(name) {
    const $winTitle = createElement('div', 'winTitle');
    $winTitle.innerText = name + ' wins!';
    $arenasdiv.appendChild($winTitle);
};

$randomBtn.addEventListener('click', function() {
    console.log('randomBtn clicked!!');

    changeHP(player1);
    changeHP(player2);

    if (player1.hp === 0) {
        playerWins(player2.name);
        $randomBtn.disabled = true;
    } else if (player2.hp === 0) {
        playerWins(player1.name);
        $randomBtn.disabled = true;
    }

});

$arenasdiv.appendChild(createPlayer(player1));
$arenasdiv.appendChild(createPlayer(player2));

