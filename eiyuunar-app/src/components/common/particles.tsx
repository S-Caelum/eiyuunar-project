import { useRef, useEffect, useCallback } from 'react';

type Particle = {
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  vx: number;
  vy: number;
};

const Particles = ({ particleSize = 4, gridSize = 12, spreadDistance = 150, springForce = 0.07, friction = 0.85 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<null | number>(null);
  const mousePos = useRef({ x: -1000, y: -1000 }); // Начальная позиция далеко за пределами
  const particles = useRef<Array<Particle>>([]);

  // Функция создания кастомных форм
  const createShapeParticles = useCallback(
    (width: number, height: number) => {
      const particlesArray = [];

      // Создаем полый треугольник
      const triangleSize = Math.min(width, height) * 0.8;
      const centerX = width / 2;
      const centerY = height / 2;
      const lineThickness = 9; // Толщина линии в "пикселях"

      for (let i = 0; i < triangleSize; i += gridSize) {
        for (let j = 0; j <= i; j += gridSize) {
          // Внешние границы треугольника
          if (
            j <= lineThickness * gridSize || // Левая граница
            i >= triangleSize - lineThickness * gridSize || // Нижняя граница
            j >= i - lineThickness * gridSize // Правая граница
          ) {
            const x = centerX - i / 2 + j;
            const y = centerY - triangleSize / 2 + i;

            if (x >= 0 && x <= width && y >= 0 && y <= height) {
              particlesArray.push({
                x,
                y,
                originalX: x,
                originalY: y,
                vx: 0,
                vy: 0,
              });
            }
          }
        }
      }
      return particlesArray;
    },
    [gridSize],
  );

  // Инициализация и анимация
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const init = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particles.current = createShapeParticles(canvas.width, canvas.height);
    };

    const animate = () => {
      if (ctx === null) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((particle) => {
        const dx = mousePos.current.x - particle.x;
        const dy = mousePos.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Эффект отталкивания
        if (distance < spreadDistance) {
          const force = (spreadDistance - distance) / spreadDistance;
          const angle = Math.atan2(dy, dx);

          particle.vx -= Math.cos(angle) * force * 5;
          particle.vy -= Math.sin(angle) * force * 5;
        }

        // Возвращение к исходной позиции
        particle.vx += (particle.originalX - particle.x) * springForce;
        particle.vy += (particle.originalY - particle.y) * springForce;

        // Затухание скорости
        particle.vx *= friction;
        particle.vy *= friction;

        // Обновление позиции
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Отрисовка с учетом расстояния для эффекта свечения
        const alpha = distance < spreadDistance ? 1 : 0.8;
        ctx.fillStyle = `rgba(128, 0, 255, ${alpha})`;
        ctx.shadowColor = `rgba(69, 33, 148, ${alpha})`;
        ctx.shadowBlur = 30;
        ctx.imageSmoothingEnabled = true;
        ctx.fillRect(particle.x, particle.y, particleSize, particleSize);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    init();
    animate();

    // Очистка при размонтировании
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particleSize, gridSize, spreadDistance, springForce, friction, createShapeParticles]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseMove = (e: any) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    mousePos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseLeave = () => {
    // Убираем курсор далеко за пределы canvas
    mousePos.current = { x: -1000, y: -1000 };
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width: '100%',
        height: '800px',
        cursor: 'cell',
        animation: 'ease-in',
        display: 'block',
      }}
      unselectable='on'
    />
  );
};

export default Particles;
