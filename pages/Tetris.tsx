import React, { useState, useEffect, useRef } from "react";
import Header from "../app/components/Header";

// ブロックの形と色を定義
const blockTypes = [
  { shapes: [[[1, 1, 1, 1]]], color: "cyan" }, // I
  { shapes: [[[1, 1], [1, 1]]], color: "yellow" }, // O
  { shapes: [[[1, 1, 1], [0, 1, 0]]], color: "purple" }, // T
  { shapes: [[[1, 1, 1], [1, 0, 0]]], color: "blue" }, // J
  { shapes: [[[1, 1, 1], [0, 0, 1]]], color: "orange" }, // L
  { shapes: [[[0, 1, 1], [1, 1, 0]]], color: "green" }, // S
  { shapes: [[[1, 1, 0], [0, 1, 1]]], color: "red" }, // Z
];

const boardWidth = 10;
const boardHeight = 20;

const Tetris: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [board, setBoard] = useState<number[][]>(
    Array.from({ length: boardHeight }, () => Array(boardWidth).fill(0))
  );
  const [currentBlock, setCurrentBlock] = useState<{
    x: number;
    y: number;
    type: number;
    shapeIndex: number;
  } | null>(null);
  const [nextBlock, setNextBlock] = useState<{ type: number; shapeIndex: 0 } | null>(null);
  const [timer, setTimer] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [prevBlocks, setPrevBlocks] = useState<number[][][]>([]); // 過去のブロックを格納する配列

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const generateBlock = () => {
      if (nextBlock) {
        setCurrentBlock({
          x: 4,
          y: -2,
          type: nextBlock.type,
          shapeIndex: nextBlock.shapeIndex,
        });
        setNextBlock({
          type: Math.floor(Math.random() * blockTypes.length),
          shapeIndex: 0,
        });
      } else {
        // 初期化
        setNextBlock({
          type: Math.floor(Math.random() * blockTypes.length),
          shapeIndex: 0,
        });
        generateBlock();
      }
    };

    const drawBlock = (
      x: number,
      y: number,
      type: number,
      shapeIndex: number,
      context: CanvasRenderingContext2D,
      blockSize: number
    ) => {
      const block = blockTypes[type];
      block.shapes[shapeIndex].forEach((row, dy) => {
        row.forEach((value, dx) => {
          if (value > 0) {
            context.fillStyle = block.color;
            context.fillRect(
              x + dx * blockSize,
              y + dy * blockSize,
              blockSize,
              blockSize
            );
            context.strokeStyle = "white";
            context.strokeRect(
              x + dx * blockSize,
              y + dy * blockSize,
              blockSize,
              blockSize
            );
          }
        });
      });
    };

    const draw = () => {
      // ゲーム盤面を描画
      context.clearRect(0, 0, canvas.width, canvas.height);
      const blockSize = canvas.width / boardWidth;
      board.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value > 0) {
            context.fillStyle = blockTypes[value - 1].color;
            context.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
            context.strokeStyle = "white";
            context.strokeRect(x * blockSize, y * blockSize, blockSize, blockSize);
          }
        });
      });

      // ブロックを描画
      if (currentBlock) {
        drawBlock(
          currentBlock.x * blockSize,
          currentBlock.y * blockSize,
          currentBlock.type,
          currentBlock.shapeIndex,
          context,
          blockSize
        );
      }

      // 次のブロックを描画
      if (nextBlock) {
        drawBlock(
          canvas.width + 10,
          50,
          nextBlock.type,
          nextBlock.shapeIndex,
          context,
          blockSize
        );
      }

      // 過去のブロックを描画
      drawPreviousBlocks(context);
    };

    const moveBlock = (dx: number, dy: number) => {
      if (!currentBlock) return;
      if (
        canMove(
          currentBlock.x + dx,
          currentBlock.y + dy,
          currentBlock.type,
          currentBlock.shapeIndex
        )
      ) {
        setCurrentBlock({
          ...currentBlock,
          x: currentBlock.x + dx,
          y: currentBlock.y + dy,
        });
      } else if (dy === 1) {
        fixBlock();
      }
    };

    const rotateBlock = () => {
      if (!currentBlock) return;
      const newShapeIndex =
        (currentBlock.shapeIndex + 1) %
        blockTypes[currentBlock.type].shapes.length;
      if (
        canMove(
          currentBlock.x,
          currentBlock.y,
          currentBlock.type,
          newShapeIndex
        )
      ) {
        setCurrentBlock({ ...currentBlock, shapeIndex: newShapeIndex });
      }
    };

    const canMove = (
      newX: number,
      newY: number,
      type: number,
      shapeIndex: number
    ) => {
      const block = blockTypes[type].shapes[shapeIndex];
      return block.every((row, dy) => {
        return row.every((value, dx) => {
          if (value === 0) return true;
          const x = newX + dx;
          const y = newY + dy;
          return (
            x >= 0 &&
            x < boardWidth &&
            y < boardHeight &&
            (y < 0 || board[y][x] === 0)
          );
        });
      });
    };

    const fixBlock = () => {
      if (!currentBlock) return;
      const block =
        blockTypes[currentBlock.type].shapes[currentBlock.shapeIndex];
      block.forEach((row, dy) => {
        row.forEach((value, dx) => {
          if (value > 0) {
            const x = currentBlock.x + dx;
            const y = currentBlock.y + dy;
            if (y >= 0) {
              board[y][x] = currentBlock.type + 1;
            }
          }
        });
      });
      setBoard([...board]);
      clearLines();
      setCurrentBlock(null);
      generateBlock();

      // ブロックを固定したら、prevBlocks に追加
      if (currentBlock) {
        const newBlock = blockTypes[currentBlock.type].shapes[
          currentBlock.shapeIndex
        ];
        setPrevBlocks([...prevBlocks, newBlock]);
      }
    };

    const clearLines = () => {
      let linesCleared = 0;
      board.forEach((row, y) => {
        if (row.every((value) => value > 0)) {
          board.splice(y, 1);
          board.unshift(Array(boardWidth).fill(0));
          linesCleared++;
        }
      });
      if (linesCleared > 0) {
        setScore(score + linesCleared * 100);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!currentBlock || gameOver || isPaused) return;
      switch (e.key) {
        case "ArrowLeft":
          moveBlock(-1, 0);
          break;
        case "ArrowRight":
          moveBlock(1, 0);
          break;
        case "ArrowDown":
          moveBlock(0, 1);
          break;
        case "ArrowUp":
          rotateBlock();
          break;
      }
    };

    const gameLoop = () => {
      if (!gameOver && !isPaused) {
        moveBlock(0, 1);
      }
      draw();
      requestAnimationFrame(gameLoop);
    };

    generateBlock();
    gameLoop();
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    board,
    currentBlock,
    gameOver,
    isPaused,
    nextBlock,
    score,
    prevBlocks,
  ]); // prevBlocks を依存配列に追加

  const drawPreviousBlocks = (context: CanvasRenderingContext2D) => {
    const blockSize = canvasRef.current!.width / boardWidth; // ブロックのサイズ
    const startX = canvasRef.current!.width + 10; // 描画開始位置のX座標
    const startY = 150; // 描画開始位置のY座標

    // 最大2つ前までのブロックを描画
    prevBlocks.slice(-2).forEach((block, index) => {
      const offsetY = index * (blockSize * block.length + 10); // ブロック間のY座標オフセット

      block.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value > 0) {
            context.fillStyle = "cyan"; // ブロックの色を設定 (適宜変更)
            context.fillRect(
              startX + x * blockSize,
              startY + y * blockSize + offsetY,
              blockSize,
              blockSize
            );
            context.strokeStyle = "white"; // ブロックの枠線の色を設定 (適宜変更)
            context.strokeRect(
              startX + x * blockSize,
              startY + y * blockSize + offsetY,
              blockSize,
              blockSize
            );
          }
        });
      });
    });
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined; // NodeJS.Timeout型に変更
    if (!isPaused && !gameOver) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000) as NodeJS.Timeout; // NodeJS.Timeout型にキャスト
    } else if (interval) { // intervalがundefinedでないことを確認
      clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval); // intervalがundefinedでないことを確認
    };
  }, [isPaused, gameOver]);

  useEffect(() => {
    const checkGameOver = () => {
      if (board[0].some((value) => value > 0)) {
        setGameOver(true);
      }
    };
    checkGameOver();
  }, [board]);

  return (
    <div>
      <Header />
      <h1>テトリス</h1>
      <canvas ref={canvasRef} width={300} height={600} />
      <div>
        <p>経過時間: {timer}秒</p>
        <p>スコア: {score}</p>
        <button onClick={() => setIsPaused(!isPaused)}>
          {isPaused ? "再開" : "一時停止"}
        </button>
        <button onClick={() => setGameOver(true)}>ゲームオーバー</button>
      </div>
      {/* 過去のブロックを表示する領域 */}
      <div>
        <h2>過去のブロック</h2>
      </div>
    </div>
  );
};

export default Tetris;
