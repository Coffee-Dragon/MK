const $arenasdiv = document.querySelector('.arenas');
const $formFight = document.querySelector('.control');
const $randomBtn = document.querySelector('.button');
const $chat = document.querySelector('.chat');

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
}
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
}
const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];
const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};
    
function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
}
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
}

function getRandom(maxNum) {
    return Math.ceil(Math.random()*maxNum);
    //return Math.floor(Math.random() * 19) + 1;
}
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
}

function announceResult(name) {
    const $winTitle = createElement('div', 'winTitle');

    $winTitle.innerText = name ? `${name} wins!` : 'Draw';
    $arenasdiv.appendChild($winTitle);
}

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

$arenasdiv.appendChild(createPlayer(player1));
$arenasdiv.appendChild(createPlayer(player2));

function enemyAttack() {
    const hit = ATTACK[getRandom(3)-1];
    const defence = ATTACK[getRandom(3)-1];

    return {
        value: getRandom(HIT[hit]),
        hit,
        defence,
    }
}
function playerAttack() {
    const attack = {};

    for (let item of $formFight) {
        if (item.checked && item.name === 'hit') {
            attack.value = getRandom(HIT[item.value]);
            attack.hit = item.value;
        }

        if (item.checked && item.name === 'defence') {
            attack.defence = item.value;

        }
        item.checked = false;
    }

    return attack;
}
function showResult() {
    if (player1.hp === 0 && player2.hp > 0) {
        announceResult(player2.name);
        generateLogs('end', player2, player1);
    } else if (player2.hp === 0 && player1.hp > 0) {
        announceResult(player1.name);
        generateLogs('end', player1, player2);
    } else if (player1.hp === 0 && player2.hp === 0) {
        announceResult();
        generateLogs('draw');
    }

    if (player1.hp === 0 || player2.hp === 0) {
        $randomBtn.disabled = true;
        $arenasdiv.appendChild(createReloadButton());
    }
}

const date = new Date();
const start = `<p>${logs['start'].replace('[player1]', player1.name).replace('[player2]', player2.name).replace('[time]', `${date.getHours()}:${date.getMinutes()}`)}</p>`;
$chat.insertAdjacentHTML('afterbegin', start);

function getLogText(logsList, attacker, defender) {
    return logsList[getRandom(logsList.length-1)]
        .replace('[playerKick]', attacker.name)
        .replace('[playerDefence]', defender.name)
        .replace('[playerWins]', attacker.name)
        .replace('[playerLose]', defender.name);
}

function generateLogs(type, attacker, defender, subtractHP) {
    let elem;
    switch (type) {
        case 'hit':
            elem = `<p>${date.getHours()}:${date.getMinutes()} ${getLogText(logs.hit, attacker, defender)} [-${subtractHP} HP] [${defender.hp}/100]</p>`;
            break;
        case 'defence':
            elem = `<p>${date.getHours()}:${date.getMinutes()} ${getLogText(logs.defence, attacker, defender)} [${defender.hp}/100]</p>`;
            break;
        case 'draw':
            elem = `<p>${date.getHours()}:${date.getMinutes()} ${logs.draw}</p>`;
            break;
        case 'end':
            elem = `<p>${date.getHours()}:${date.getMinutes()} ${getLogText(logs.end, attacker, defender)}</p>`;
            break;
    }
    
    $chat.insertAdjacentHTML('afterbegin', elem);
}

$formFight.addEventListener('submit', function(e) {
    e.preventDefault();
    const enemy = enemyAttack();
    const player = playerAttack();
    if (enemy.hit !== player.defence) {
        player1.changeHP(enemy.value);
        player1.renderHP();
        generateLogs('hit', player2, player1, enemy.value);
    }
    if (player.hit !== enemy.defence) {
        player2.changeHP(player.value);
        player2.renderHP();
        generateLogs('hit', player1, player2, player.value);
    }
    if (player.hit === enemy.defence) {
        generateLogs('defence', player1, player2);
    }
    if (enemy.hit === player.defence) {
        generateLogs('defence', player2, player1);
    }
    showResult();
})


