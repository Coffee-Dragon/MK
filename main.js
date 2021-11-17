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
    elHP,
    renderHP,
    changeHP,
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
    elHP,
    renderHP,
    changeHP,
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

function getRandom() {
    return Math.floor(Math.random() * 19) + 1;
};

function elHP() {
    return document.querySelector(`.player${this.playerNo} .life`);
}
function renderHP() {
    this.elHP().style.width = `${this.hp}%`;
}

function changeHP(subtractHP) {
    this.hp -= subtractHP;

    if (this.hp <= 0) {
        this.hp = 0;
    }
};

function announceResult(name) {
    const $winTitle = createElement('div', 'winTitle');

    $winTitle.innerText = name ? `${name} wins!` : 'Draw';
    $arenasdiv.appendChild($winTitle);
};

function createReloadButton() {
    const $reloadWrap = createElement('div', 'reloadWrap');
    const $reloadBtn = createElement('button', 'button');
    $reloadBtn.innerText = 'Reload';
    $reloadWrap.appendChild($reloadBtn);
    $reloadBtn.addEventListener('click', function() {
        window.location.reload();
    })
    return $reloadWrap;
}

$randomBtn.addEventListener('click', function() {
    player1.changeHP(getRandom());
    player1.renderHP();
    player2.changeHP(getRandom());
    player2.renderHP();

    if (player1.hp === 0 && player2.hp > 0) {
        announceResult(player2.name);
    } else if (player2.hp === 0 && player1.hp > 0) {
        announceResult(player1.name);
    } else if (player1.hp === 0 && player2.hp === 0) {
        announceResult();
    }

    if (player1.hp === 0 || player2.hp === 0) {
        $randomBtn.disabled = true;
        $arenasdiv.appendChild(createReloadButton());
    }


});

$arenasdiv.appendChild(createPlayer(player1));
$arenasdiv.appendChild(createPlayer(player2));




