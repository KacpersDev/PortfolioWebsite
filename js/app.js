let color = 'dark';

const switcher = () => {
    if (color === 'dark') {
        color = 'white';
        document.body.style.backgroundColor = 'white';
        document.getElementById('white_switch').style.visibility = 'hidden'; 
        document.getElementById('black_switch').style.visibility = 'visible';
        document.getElementById('main-title').style.color = '#222426';
        document.getElementById('blog-topic').style.color = '#222426';
        document.getElementById('blog-description').style.color = '#222426';
    } else if (color === 'white') {
        color = 'dark';
        document.body.style.backgroundColor = '#222426';
        document.getElementById('white_switch').style.visibility = 'visible';
        document.getElementById('black_switch').style.visibility = 'hidden';
        document.getElementById('main-title').style.color = 'white';
        document.getElementById('blog-topic').style.color = 'white';
        document.getElementById('blog-description').style.color = 'white';
    }
};