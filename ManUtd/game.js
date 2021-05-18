var mario = document.getElementById("fred");
var shell = document.getElementById("liverpool");
var score = 0;

function hop()
{
    if(mario.classList == "animate")
    {
      return
    }
    mario.classList.add("animate");
    setTimeout(function()
    {
        mario.classList.remove("animate");
    },300);
}

var checkImpact = setInterval(function()
{
    let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"));

    let shellLeft = parseInt(window.getComputedStyle(shell).getPropertyValue("left"));

    if(shellLeft < 20 && shellLeft > -20 && marioTop >= 130)
    {
        shell.style.animation = "none";
        alert("Game Over! You scored: " + Math.floor(score/100));      
        score = 0;
        shell.style.animation = "shell 1s infinite linear";
    }
    else
    {
        score++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(score/100);
    }
}, 10);
