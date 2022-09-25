let color = 'dark';
let clicked = false;

const switcher = () => {
    if (color === 'dark') {
        color = 'white';
        document.body.style.backgroundColor = 'white';
        document.getElementById('white_switch').style.visibility = 'hidden'; 
        document.getElementById('black_switch').style.visibility = 'visible';
        document.getElementById('about-title').style.color = '#222426';
        document.getElementById('about-description').style.color = '#222426'
        document.getElementById('projects-title').style.color = '#222426'
        document.getElementById('projects-description').style.color = '#222426';
    } else if (color === 'white') {
        color = 'dark';
        document.body.style.backgroundColor = '#222426';
        document.getElementById('white_switch').style.visibility = 'visible';
        document.getElementById('black_switch').style.visibility = 'hidden';
        document.getElementById('about-title').style.color = 'white';
        document.getElementById('about-description').style.color = 'white'
        document.getElementById('projects-title').style.color = 'white'
        document.getElementById('projects-description').style.color = 'white';
    }
};

const barClick = () => {
    if (!clicked) {
        document.getElementById('bar-about').style.visibility = 'visible';
        document.getElementById('bar-contact').style.visibility = 'visible';
        clicked = true;
    } else if (clicked) {
        document.getElementById('bar-about').style.visibility = 'hidden';
        document.getElementById('bar-contact').style.visibility = 'hidden';
        clicked = false;
    }
}

const resize = () => {
    document.getElementById('bar-about').style.visibility = 'hidden';
    document.getElementById('bar-contact').style.visibility = 'hidden';
    clicked = false;
}

window.onresize = resize;

const submitButton = () => {
    console.log(document.getElementById('name').value);
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('textarea').value = '';
};