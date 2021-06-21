/* eslint-disable no-alert */
/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { Container, GameArea } from '../styles/pages/index/styles';

type snakeProps = [{
  x: number;
  y: number;
}]

export default function Home() {
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    const canvas = document.getElementById('snake') as HTMLCanvasElement;
    const context = canvas.getContext('2d');
    const box = 32;
    const snake:snakeProps = [{
      x: 8 * box,
      y: 8 * box,
    }];

    let direction = 'right';
    const food = {
      x: Math.floor(Math.random() * 15 + 1) * box,
      y: Math.floor(Math.random() * 15 + 1) * box,
    };

    function createBackground() {
      if (context !== null) {
        context.fillStyle = 'lightgreen';
        context.fillRect(0, 0, 16 * box, 16 * box); // desenha o retângulo usando x e y e a largura e altura setadas
      }
    }

    function createSnake() {
      for (let i = 0; i < snake.length; i += 1) {
        if (context !== null) {
          context.fillStyle = 'green';
          context.fillRect(snake[i].x, snake[i].y, box, box);
        }
      }
    }

    function drawFood() {
      if (context !== null) {
        context.fillStyle = 'red';
        context.fillRect(food.x, food.y, box, box);
      }
    }

    function update(event:any) {
      if (event.keyCode === 37 && direction !== 'right') direction = 'left';
      if (event.keyCode === 38 && direction !== 'down') direction = 'up';
      if (event.keyCode === 39 && direction !== 'left') direction = 'right';
      if (event.keyCode === 40 && direction !== 'up') direction = 'down';
    }
    // quando um evento acontece, detecta e chama uma função
    document.addEventListener('keydown', update);
    let game:any = '';

    function startGame() {
      if (snake[0].x > 15 * box && direction === 'right') snake[0].x = 0;
      if (snake[0].x < 0 && direction === 'left') snake[0].x = 16 * box;
      if (snake[0].y > 15 * box && direction === 'down') snake[0].y = 0;
      if (snake[0].y < 0 && direction === 'up') snake[0].y = 16 * box;

      for (let i = 1; i < snake.length; i += 1) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
          clearInterval(game);
          alert('Game Over :(');

          if (isReset) {
            setIsReset(false);
          } else {
            setIsReset(true);
          }
        }
      }

      createBackground();
      createSnake();
      drawFood();

      let snakeX = snake[0].x;
      let snakeY = snake[0].y;

      if (direction === 'right') snakeX += box;
      if (direction === 'left') snakeX -= box;
      if (direction === 'up') snakeY -= box;
      if (direction === 'down') snakeY += box;

      if (snakeX !== food.x || snakeY !== food.y) {
        snake.pop(); // pop tira o último elemento da lista
      } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
      }

      const newHead = {
        x: snakeX,
        y: snakeY,
      };

      // método unshift adiciona como primeiro quadradinho da cobrinha
      snake.unshift(newHead);
    }

    game = setInterval(startGame, 100);
  }, [isReset]);

  return (
    <Container>
      <GameArea>
        <h1>
          Snake 🐍 Game!
        </h1>
        <canvas id="snake" width="512" height="512" />
      </GameArea>
    </Container>
  );
}
