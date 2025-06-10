<script setup>
const { squareSize } = defineProps({
  squareSize: {
    type: Number,
    default: 75,
  },
});

const canvas = ref();
const ctx = ref();

const hoveredIndex = ref();
const redrawOnce = ref(true);

const rectangles = reactive([]);

let lines = reactive([]);

const color = "#c4bfb7"; 

const drawRectangle = (
  rectX,
  rectY,
  isFill = false,
  width = squareSize,
  height = squareSize
) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const x = centerX - squareSize / 2 + rectX;
  const y = centerY - squareSize / 2 + rectY;
  if (isFill) {
    ctx.value.fillStyle = color;
    ctx.value.fillRect(x, y, width, height);
  } else {
    ctx.value.strokeStyle = color;
    ctx.value.lineWidth = 1.5;
    ctx.value.strokeRect(x, y, width, height);
  }

  // Illumination si survolé
  if (
    hoveredIndex.value !== null &&
    hoveredIndex.value ===
      rectangles.findIndex((r) => r.x === rectX && r.y === rectY)
  ) {
    ctx.value.fillStyle = color; // Couleur d'illumination
    ctx.value.fillRect(x, y, width, height);
  }
};

const drawLines = (startX, startY, number, isHorizontal) => {
  for (let i = 0; i < number; i++) {
    let x = isHorizontal
      ? i * squareSize + startX * squareSize
      : startX * squareSize;
    let y = isHorizontal
      ? startY * squareSize
      : i * squareSize + startY * squareSize;
    rectangles.push({ x, y });
  }
};

const draw = () => {
  ctx.value.clearRect(0, 0, window.innerWidth, window.innerHeight);

  rectangles.forEach((rect) => {
    drawRectangle(rect.x, rect.y);
  });
  drawRectangle(-162, -175, true, 175, 50);
};

const resizeCanvas = () => {
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;
  if (window.innerWidth < 1150) {
    // canvas.value.width = 1080;
    lines = reactive([
      { startX: -4, startY: -4, number: 9, isHorizontal: true },
      { startX: -4, startY: -3, number: 10, isHorizontal: true },
      { startX: 4, startY: -2, number: 2, isHorizontal: false },
      { startX: 5, startY: -2, number: 2, isHorizontal: false },
      { startX: -3, startY: 0, number: 8, isHorizontal: true },
      { startX: -4, startY: 1, number: 7, isHorizontal: true },
      { startX: -4, startY: 2, number: 6, isHorizontal: true },
      { startX: -4, startY: 3, number: 5, isHorizontal: true },
      { startX: -4, startY: 4, number: 3, isHorizontal: true },
    ]);
    rectangles.length = 0;
    lines.forEach((line) => {
      drawLines(line.startX, line.startY, line.number, line.isHorizontal);
    });
  } else {
    lines = reactive([
      { startX: -7, startY: -4, number: 9, isHorizontal: true },
      { startX: -7, startY: -3, number: 10, isHorizontal: true },
      { startX: 1, startY: -2, number: 2, isHorizontal: false },
      { startX: 2, startY: -2, number: 2, isHorizontal: false },
      { startX: -6, startY: 0, number: 8, isHorizontal: true },
      { startX: -7, startY: 1, number: 7, isHorizontal: true },
      { startX: -7, startY: 2, number: 6, isHorizontal: true },
      { startX: -7, startY: 3, number: 5, isHorizontal: true },
      { startX: -7, startY: 4, number: 4, isHorizontal: true },
    ]);
    rectangles.length = 0;
    lines.forEach((line) => {
      drawLines(line.startX, line.startY, line.number, line.isHorizontal);
    });
  }
  draw();
};

const handleMouseMove = (event) => {
  const rect = canvas.value.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  hoveredIndex.value = null; 
  rectangles.forEach((rect, index) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const x = centerX - squareSize / 2 + rect.x;
    const y = centerY - squareSize / 2 + rect.y;

    // Vérifie si la souris est au-dessus du rectangle
    if (
      mouseX > x &&
      mouseX < x + squareSize &&
      mouseY > y &&
      mouseY < y + squareSize
    ) {
      hoveredIndex.value = index; // Définit l'index du rectangle survolé
    }

    //redraw if square is hovered
    if (hoveredIndex.value) {
      draw();
      redrawOnce.value = true;
    }

    //redraw once after mouse leaving square
    if (redrawOnce.value && !hoveredIndex.value) {
      redrawOnce.value = false;
      draw();
    }
  });
};

onMounted(() => {
  if (window.innerWidth < 1080) {
  }
  ctx.value = canvas.value.getContext("2d");

  resizeCanvas(); 

  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("mousemove", handleMouseMove);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeCanvas);
  window.removeEventListener("mousemove", handleMouseMove);
});
</script>

<template>
  <canvas ref="canvas" />
</template>

<style lang="scss" scoped>
canvas {
  display: block;
  height: 100vh;
}
</style>
