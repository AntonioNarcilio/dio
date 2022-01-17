function start() {
  // Inicio da fun��o start()

  $("#inicio").hide();

  $("#fundoGame").append("<div id='jogador' class='anima1'></div>");
  $("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
  $("#fundoGame").append("<div id='inimigo2'></div>");
  $("#fundoGame").append("<div id='amigo' class='anima3'></div>");
  $("#fundoGame").append("<div id='placar'></div>");
  $("#fundoGame").append("<div id='energia'></div>");

  // placar
  let points = 0;
  let pointsSaved = 0;
  let pointsLost = 0;

  // life
  let currentEnergy = 3;

  // inimigo
  let gameSpeed = 5;
  let axisY = parseInt(Math.random() * 334);
  // jogador
  let isGameOver = false;

  let canShoot = true;
  const KEY = {
    UP: 38,
    DOWN: 40,
    SPACE: 32,
    // W: 87,
    // S: 83,
    // D: 68,
  };

  let game = {};
  game.pressed = [];

  // audio
  let soundShoot = document.getElementById("somDisparo");
  let soundExplosion = document.getElementById("somExplosao");
  let music = document.getElementById("musica");
  let soundGameOver = document.getElementById("somGameOver");
  let soundLost = document.getElementById("somPerdido");
  let soundRescue = document.getElementById("somResgate");

  music.addEventListener(
    "ended",
    () => {
      music.currentTime = 0;
      music.play();
    },
    false
  );
  music.play();

  //Verificar se o usuário pressionou alguma tecla
  $(document).keydown((e) => {
    game.pressed[e.which] = true;
  });

  $(document).keyup((e) => {
    game.pressed[e.which] = false;
  });

  //Game Loop
  game.timer = setInterval(loop, 30);

  function moveBackground() {
    let left = parseInt($("#fundoGame").css("background-position"));
    $("#fundoGame").css("background-position", left - 1);
  }

  function handleShoot() {
    let shootTIme;
    if (canShoot == true) {
      canShoot = false;

      let top = parseInt($("#jogador").css("top"));
      let axisX = parseInt($("#jogador").css("left"));
      let tiroX = axisX + 190;
      let topShoot = top + 37;

      $("#fundoGame").append("<div id='disparo'></div");
      $("#disparo").css("top", topShoot);
      $("#disparo").css("left", tiroX);

      shootTIme = window.setInterval(shoot, 30);
    }

    function shoot() {
      soundShoot.play();

      axisX = parseInt($("#disparo").css("left"));
      $("#disparo").css("left", axisX + 15);

      if (axisX > 900) {
        window.clearInterval(shootTIme);
        shootTIme = null;
        $("#disparo").remove();
        canShoot = true;
      }
    } // fim shoot
  } // fim handleShoot

  function playerControl() {
    if (game.pressed[KEY.UP]) {
      let top = parseInt($("#jogador").css("top"));
      $("#jogador").css("top", top - 10);
      // limitando movimentação da nave no topo
      if (top <= 0) {
        $("#jogador").css("top", top + 10);
      }
    }

    if (game.pressed[KEY.DOWN]) {
      let bottom = parseInt($("#jogador").css("top"));
      $("#jogador").css("top", bottom + 10);

      // limitando movimentação da nave no final/bottom
      if (bottom >= 434) {
        $("#jogador").css("top", bottom - 10);
      }
    }

    if (game.pressed[KEY.SPACE]) {
      handleShoot();
    }
  } // fim playerControl

  function moveAirEnemy() {
    axisX = parseInt($("#inimigo1").css("left"));
    $("#inimigo1").css("left", axisX - gameSpeed);
    $("#inimigo1").css("top", axisY);

    if (axisX <= 0) {
      axisY = parseInt(Math.random() * 334);
      $("#inimigo1").css("left", 694);
      $("#inimigo1").css("top", axisY);
    }
  } // fim moveAirEnemy

  function moveGroundEnemy() {
    axisX = parseInt($("#inimigo2").css("left"));
    $("#inimigo2").css("left", axisX - 3);

    if (axisX <= 0) {
      $("#inimigo2").css("left", 775);
    }
  } // fim moveGroundEnemy

  function moveFriend() {
    axisX = parseInt($("#amigo").css("left"));
    $("#amigo").css("left", axisX + 1);

    if (axisX > 906) {
      $("#amigo").css("left", 0);
    }
  } // fim moveFriend

  function repositionFriend() {
    let friendTime = window.setInterval(reposition, 6000);

    function reposition() {
      window.clearInterval(friendTime);
      friendTime = null;

      if (isGameOver == false) {
        $("#fundoGame").append("<div id='amigo' class='anima3'></div>");
      }
    }
  } // fim repositionFriend

  function repositionGroundEnemy() {
    let collisionTime = window.setInterval(reposition, 5000);

    function reposition() {
      window.clearInterval(collisionTime);
      collisionTime = null;

      if (isGameOver == false) {
        $("#fundoGame").append("<div id=inimigo2></div");
      }
    }
  } // fim repositionGroundEnemy

  function handleCollision() {
    let airEnemyCollision = $("#jogador").collision($("#inimigo1"));
    let groundEnemyCollision = $("#jogador").collision($("#inimigo2"));
    let airEnemyShootingCollision = $("#disparo").collision($("#inimigo1"));
    let groundEnemyShootingCollision = $("#disparo").collision($("#inimigo2"));
    let playerAndFriendCollision = $("#jogador").collision($("#amigo"));
    let enemyAndFriendCollision = $("#inimigo2").collision($("#amigo"));

    // inimigo 1 - aéreo
    if (airEnemyCollision.length > 0) {
      currentEnergy--;
      let airEnemyX = parseInt($("#inimigo1").css("left"));
      let airEnemyY = parseInt($("#inimigo1").css("top"));

      handleExplosionAirEnemy(airEnemyX, airEnemyY);
      let axisY = parseInt(Math.random() * 334);
      $("#inimigo1").css("left", 694);
      $("#inimigo1").css("top", axisY);
    }

    if (airEnemyShootingCollision.length > 0) {
      gameSpeed = gameSpeed + 0.3;
      points = points + 100;

      let enemyAxisX = parseInt($("#inimigo1").css("left"));
      let enemyAxisY = parseInt($("#inimigo1").css("top"));

      handleExplosionAirEnemy(enemyAxisX, enemyAxisY);
      $("#disparo").css("left", 950);

      axisY = parseInt(Math.random() * 334);
      $("#inimigo1").css("left", 694);
      $("#inimigo1").css("top", axisY);
    }

    // inimigo 2 - térreo
    if (groundEnemyCollision.length > 0) {
      currentEnergy--;
      let groundEnemyX = parseInt($("#inimigo2").css("left"));
      let groundEnemyY = parseInt($("#inimigo2").css("top"));
      handleExplosionGroundEnemy(groundEnemyX, groundEnemyY);

      $("#inimigo2").remove();

      repositionGroundEnemy();
    }

    if (groundEnemyShootingCollision.length > 0) {
      points = points + 50;

      let groundEnemyX = parseInt($("#inimigo2").css("left"));
      let groundEnemyY = parseInt($("#inimigo2").css("top"));
      $("#inimigo2").remove();

      handleExplosionGroundEnemy(groundEnemyX, groundEnemyY);
      $("#disparo").css("left", 950);

      repositionGroundEnemy();
    }

    // amigo com jogador
    if (playerAndFriendCollision.length > 0) {
      soundRescue.play();
      pointsSaved++;
      repositionFriend();
      $("#amigo").remove();
    }

    if (enemyAndFriendCollision.length > 0) {
      pointsLost++;
      let friendAxisX = parseInt($("#amigo").css("left"));
      let friendAxisY = parseInt($("#amigo").css("top"));

      handleExplosionFriend(friendAxisX, friendAxisY);
      $("#amigo").remove();

      repositionFriend();
    }
  } // fim handleCollision

  function handleExplosionAirEnemy(enemyAxisX, enemyAxisY) {
    soundExplosion.play();

    $("#fundoGame").append("<div id='explosao1'></div");
    $("#explosao1").css("background-image", "url(assets/images/explosao.png)");
    let div = $("#explosao1"); // evitando de digitar toda vez alinha acima
    div.css("top", enemyAxisY);
    div.css("left", enemyAxisX);
    div.animate({ width: 200, opacity: 0 }, "slow");

    let timeExplosion = window.setInterval(removeExplosion, 1000);

    function removeExplosion() {
      div.remove();
      window.clearInterval(timeExplosion);
      timeExplosion = null;
    }
  }

  function handleExplosionGroundEnemy(enemyAxisX, enemyAxisY) {
    soundExplosion.play();

    $("#fundoGame").append("<div id='explosao2'></div");
    $("#explosao2").css("background-image", "url(assets/images/explosao.png)");
    let div = $("#explosao2");
    div.css("top", enemyAxisY);
    div.css("left", enemyAxisX);
    div.animate({ width: 200, opacity: 0 }, "slow");

    let explosionTime = window.setInterval(removeExplosion, 1000);

    function removeExplosion() {
      div.remove();
      window.clearInterval(explosionTime);
      explosionTime = null;
    }
  }

  function handleExplosionFriend(friendAxisX, friendAxisY) {
    soundLost.play();

    $("#fundoGame").append("<div id='explosao3' class='anima4'></div");
    $("#explosao3").css("top", friendAxisY);
    $("#explosao3").css("left", friendAxisX);

    let explosionTime = window.setInterval(resetExplosion, 1000);
    function resetExplosion() {
      $("#explosao3").remove();
      window.clearInterval(explosionTime);
      explosionTime = null;
    }
  }

  function scoreboard() {
    $("#placar").html(
      "<h2> Pontos: " +
        points +
        " / Salvos: " +
        pointsSaved +
        " / Perdidos: " +
        pointsLost +
        "</h2>"
    );
  }

  function gameOver() {
    isGameOver = true;
    music.pause();
    soundGameOver.play();

    window.clearInterval(game.timer);
    game.timer = null;

    $("#jogador").remove();
    $("#inimigo1").remove();
    $("#inimigo2").remove();
    $("#amigo").remove();

    $("#fundoGame").append("<div id='fim'></div>");

    $("#fim").html(
      "<h1> Fim de Jogo </h1><p>Sua pontuação foi: " +
        points +
        "</p>" +
        "<div id='reinicia' onClick=restartGame()><h3>Jogar Novamente</h3></div>"
    );
  } // fim gameOver

  function handleEnergy() {
    if (currentEnergy == 3) {
      $("#energia").css("background-image", "url(assets/images/energia3.png)");
    }

    if (currentEnergy == 2) {
      $("#energia").css("background-image", "url(assets/images/energia2.png)");
    }

    if (currentEnergy == 1) {
      $("#energia").css("background-image", "url(assets/images/energia1.png)");
    }

    if (currentEnergy == 0) {
      $("#energia").css("background-image", "url(assets/images/energia0.png)");
      gameOver();
    }
  }

  function loop() {
    moveBackground();
    playerControl();
    moveAirEnemy();
    moveGroundEnemy();
    moveFriend();
    handleCollision();
    scoreboard();
    handleEnergy();
  } // fim loop
} // fim start()

function restartGame() {
  somGameOver.pause();
  $("#fim").remove();
  start();
} // fim restartGame()
