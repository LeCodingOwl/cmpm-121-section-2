//purposely bad code so students can fix it - can make it worse

import './style.css'

const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const bird = document.getElementById("bird");

const scoreText = document.getElementById("scoreText");
let score = 0;
SetText("click to start!");

let isJumping = false;
let gameOver = true;

document.addEventListener('mousedown', () => jump());


//setInterval(function() { Main()}, 10);
(Main)
function Main()
{
    if(gameOver == false)
    {
        score++;
        SetText("Score: " + score);
        checkGameOver()
    }

    requestAnimationFrame(Main);
}

function jump()
{
    if(gameOver == false)
    {
        if(isJumping == false)
        {
            isJumping = true;
            dino?.classList.add("jump");
            setTimeout(removeJump, 500);
        };
    }
    else
    {
        startGame();
    }
    
}

function removeJump()
{
    dino?.classList.remove("jump");
    isJumping = false;
    //mainLoop = mainLoop //bug fix?
}

function removeObstacles()
{
    cactus?.classList.remove("cactusMove");
    bird?.classList.remove("birdMove");
}

function checkGameOver()
{

    if(gameOver == false && dino != null && cactus != null && bird != null)
    {
        //get is dinosaur jumping
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

        //get cactus position
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

        //get bird position
        let birdLeft = parseInt(window.getComputedStyle(bird).getPropertyValue("left"));

        //detect cactus collision
        if(dinoTop >= 150 && Math.abs(cactusLeft) < 7)
        {
            gameEnd();
        }

        //detect bird collision
        if(dinoTop <= 55 && Math.abs(birdLeft) < 11)
        {
            gameEnd();
        }
    }
}


function startGame()
{
    console.log("Game started!");
    gameOver = false;
    score = 0;
    cactus?.classList.add("cactusMove");
    bird?.classList.add("birdMove");
}

function SetText(s: string)
{
    if(scoreText)
    {
        scoreText.textContent = s;
    }
}

function gameEnd()
{
    //end game
    console.log("player died!");
    SetText("Final Score: " + score + "! Click To Play Again!");
    gameOver = true;
    
    //reset player
    removeJump();
                
    //reset cactus and bird
    removeObstacles();
}
