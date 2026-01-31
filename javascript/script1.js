let score = 20;
let secretNumber = Math.floor(Math.random() * 20) + 1; 

const handler = () => {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    
    document.querySelector('.score').textContent = score;
    
    document.querySelector('.message').textContent = 'Tiếp tục đoán...'; 

    document.querySelector('.guess').value = '';

    document.body.style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.again').addEventListener('click', handler);
