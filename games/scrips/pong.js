let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')

p1pose = 50
p2pose = 50

document.addEventListener('keydown', (event) => {
    const keyName = event.key

    if (keyName === 'Control') {
        // do not alert when only Control key is pressed.
        return;
    }

    if (keyName === 'z'){
        top = getComputedStyle(player1).top
        p1pose--
        player1.style.top = p1pose+'%';
    }
    if (keyName === 's'){
        p1pose++
        player1.style.top = p1pose+'%';
    }

    if (keyName === 'ArrowUp'){
        top = getComputedStyle(player1).top
        p2pose--
        player2.style.top = p2pose+'%';
    }
    if (keyName === 'ArrowDown'){
        p2pose++
        player2.style.top = p2pose+'%';
    }



}, false)
