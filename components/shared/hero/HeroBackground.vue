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

const lines = reactive([
  { startX: -7, startY: -3, number: 9, isHorizontal: true },
  { startX: -7, startY: -2, number: 10, isHorizontal: true },
  { startX: 1, startY: -1, number: 2, isHorizontal: false },
  { startX: 2, startY: -1, number: 2, isHorizontal: false },
  { startX: -6, startY: 1, number: 8, isHorizontal: true },
  { startX: -7, startY: 2, number: 7, isHorizontal: true },
  { startX: -7, startY: 3, number: 6, isHorizontal: true },
  { startX: -7, startY: 4, number: 5, isHorizontal: true },
  { startX: -7, startY: 5, number: 4, isHorizontal: true },
]);

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
    ctx.value.fillStyle = "#c3b1e1";
    ctx.value.fillRect(x, y, width, height);
  } else {
    ctx.value.strokeStyle = "#c3b1e1";
    ctx.value.lineWidth = 1.5;
    ctx.value.strokeRect(x, y, width, height);
  }

  // Illumination si survolé
  if (
    hoveredIndex.value !== null &&
    hoveredIndex.value ===
      rectangles.findIndex((r) => r.x === rectX && r.y === rectY)
  ) {
    ctx.value.fillStyle = "#c3b1e1"; // Couleur d'illumination
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
lines.forEach((line) => {
  drawLines(line.startX, line.startY, line.number, line.isHorizontal);
});

const draw = () => {
  ctx.value.clearRect(0, 0, window.innerWidth, window.innerHeight);

  rectangles.forEach((rect) => {
    drawRectangle(rect.x, rect.y);
  });
  drawRectangle(-162, -100, true, 175, 50);
};

const resizeCanvas = () => {
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;
  draw();
};

const handleMouseMove = (event) => {
  const rect = canvas.value.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  hoveredIndex.value = null; // Réinitialise l'index survolé

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
  ctx.value = canvas.value.getContext("2d");
  resizeCanvas(); // Set initial size

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
