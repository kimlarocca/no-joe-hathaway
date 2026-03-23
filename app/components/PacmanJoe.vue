<template>
  <div class="w-full max-w-4xl mx-auto">
    <!-- Game area -->
    <div
      ref="gameContainer"
      tabindex="0"
      class="relative w-full aspect-video bg-black border-4 md:border-8 border-double border-yellow-400 overflow-hidden select-none outline-none"
      style="-webkit-tap-highlight-color: transparent; -webkit-touch-callout: none"
      @click="startGame"
      @keydown.prevent="onKeydown"
    >
      <!-- Maze walls -->
      <div
        v-for="(wall, i) in mazeWalls"
        :key="'w' + i"
        class="absolute box-border"
        :style="{
          left: wall.col * cellW + 'px',
          top: wall.row * cellH + 'px',
          width: cellW + 1 + 'px',
          height: cellH + 1 + 'px',
          background: '#0a0a2e',
          borderTop: wall.bt ? '2px solid #3355ff' : 'none',
          borderBottom: wall.bb ? '2px solid #3355ff' : 'none',
          borderLeft: wall.bl ? '2px solid #3355ff' : 'none',
          borderRight: wall.br ? '2px solid #3355ff' : 'none',
        }"
      />

      <!-- Pellets (small dots on path cells) -->
      <div
        v-for="pellet in allPellets"
        :key="'p' + pellet.row + '_' + pellet.col"
        v-show="!eatenSet.has(pellet.key)"
        class="absolute rounded-full z-[2]"
        :style="{
          left: pellet.col * cellW + cellW / 2 - (pellet.power ? cellW * 0.3 : 2) + 'px',
          top: pellet.row * cellH + cellH / 2 - (pellet.power ? cellH * 0.3 : 2) + 'px',
          width: (pellet.power ? cellW * 0.6 : 4) + 'px',
          height: (pellet.power ? cellH * 0.6 : 4) + 'px',
          background: pellet.power ? '#e51929' : '#facc15',
        }"
      />

      <!-- Dollar bill power pellets (images at corners) -->
      <div
        v-for="pp in powerPelletPositions"
        :key="'pp' + pp.row + '_' + pp.col"
        v-show="!eatenSet.has(pp.key)"
        class="absolute z-[3]"
        :style="{
          left: pp.col * cellW + cellW * 0.1 + 'px',
          top: pp.row * cellH + cellH * 0.1 + 'px',
          width: cellW * 0.8 + 'px',
          height: cellH * 0.8 + 'px',
        }"
      >
        <img
          src="/images/bill.png"
          alt="$"
          class="w-full h-full object-contain"
          draggable="false"
        />
      </div>

      <!-- Score -->
      <div
        class="absolute top-1 left-2 z-20 text-yellow-400 font-black uppercase tracking-wider text-xs md:text-sm"
        style="text-shadow: 1px 1px 2px black"
      >
        GRIFT: ${{ score }}M
      </div>
      <div
        class="absolute top-1 right-2 z-20 text-[#e51929] font-black uppercase tracking-wider text-xs md:text-sm"
        style="text-shadow: 1px 1px 2px black"
      >
        RECORD: ${{ highScore }}M
      </div>

      <!-- Title screen overlay -->
      <div
        v-if="!gameStarted"
        class="absolute inset-0 flex flex-col items-center justify-center z-30 bg-black/60"
      >
        <p
          class="text-yellow-400 text-2xl md:text-4xl font-black uppercase tracking-widest mb-2"
        >
          PACman Joe
        </p>
        <p class="text-white text-xs md:text-sm animate-pulse">
          {{ isMobile ? "TAP TO START" : "CLICK TO START \u00b7 USE ARROW KEYS TO MOVE" }}
        </p>
      </div>

      <!-- Joe (pac-man) -->
      <div
        class="absolute z-10"
        :style="{
          left: joeCol * cellW + 'px',
          top: joeRow * cellH + 'px',
          width: cellW + 'px',
          height: cellH + 'px',
          transform: joeTransform,
          transition: 'transform 0.1s',
        }"
      >
        <img
          src="/images/joe.png"
          alt="Joe"
          class="w-full h-full object-contain rounded-full"
          draggable="false"
        />
      </div>

      <!-- Ghost -->
      <div
        class="absolute z-10"
        :style="{
          left: ghostCol * cellW + 'px',
          top: ghostRow * cellH + 'px',
          width: cellW + 'px',
          height: cellH + 'px',
          transition: 'transform 0.1s',
        }"
      >
        <img
          src="/images/ghost.png"
          alt="Ghost"
          class="w-full h-full object-contain"
          draggable="false"
        />
      </div>

      <!-- Chomp effect -->
      <div
        v-if="showChomp"
        class="absolute z-20 text-yellow-400 font-black text-lg pointer-events-none animate-ping"
        :style="{ left: chompX + 'px', top: chompY + 'px' }"
      >
        $
      </div>

      <!-- Game Over overlay -->
      <div
        v-if="gameOver"
        class="absolute inset-0 flex flex-col items-center justify-center z-30 bg-black/70"
      >
        <p
          class="text-[#e51929] text-2xl md:text-4xl font-black uppercase tracking-widest mb-2"
        >
          GAME OVER
        </p>
        <p class="text-yellow-400 text-sm md:text-lg font-bold mb-3">
          GRIFT: ${{ score }}M
        </p>
        <p class="text-white text-xs md:text-sm animate-pulse">
          {{ isMobile ? "TAP TO RESTART" : "CLICK TO RESTART" }}
        </p>
      </div>
    </div>

    <!-- Mobile D-pad controls -->
    <div v-if="isMobile && gameStarted" class="mt-4 flex justify-center">
      <div class="relative w-36 h-36">
        <button
          class="dpad-btn absolute top-0 left-1/2 -translate-x-1/2"
          @touchstart.prevent="setDirection('up')"
        >
          <span class="dpad-arrow">&#9650;</span>
        </button>
        <button
          class="dpad-btn absolute bottom-0 left-1/2 -translate-x-1/2"
          @touchstart.prevent="setDirection('down')"
        >
          <span class="dpad-arrow">&#9660;</span>
        </button>
        <button
          class="dpad-btn absolute left-0 top-1/2 -translate-y-1/2"
          @touchstart.prevent="setDirection('left')"
        >
          <span
            class="dpad-arrow"
            style="display: inline-block; transform: rotate(-90deg)"
            >&#9650;</span
          >
        </button>
        <button
          class="dpad-btn absolute right-0 top-1/2 -translate-y-1/2"
          @touchstart.prevent="setDirection('right')"
        >
          <span class="dpad-arrow" style="display: inline-block; transform: rotate(90deg)"
            >&#9650;</span
          >
        </button>
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-800 border-2 border-gray-600"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onBeforeUnmount } from "vue"

// ---------------------
// Maze: 1 = wall, 0 = path
// Symmetric left-right around column 10
// Row 5 is the tunnel row (open on both edges for wrap-around)
// ---------------------
const COLS = 21
const ROWS = 11
const MAZE = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

// Power pellet count
const NUM_POWER_PELLETS = 6

// Get all path cells (excluding Joe/ghost start)
function getPathCells() {
  const cells = []
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (
        MAZE[r][c] === 0 &&
        !(r === START_ROW && c === START_COL) &&
        !(r === GHOST_START_ROW && c === GHOST_START_COL)
      ) {
        cells.push([r, c])
      }
    }
  }
  return cells
}

function randomizePowerCells() {
  const cells = getPathCells()
  // Shuffle and pick first N
  for (let i = cells.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[cells[i], cells[j]] = [cells[j], cells[i]]
  }
  powerCells.value = cells.slice(0, NUM_POWER_PELLETS)
}

// Joe start position
const START_ROW = 7
const START_COL = 10

// Ghost start position (top area, opposite side from Joe)
const GHOST_START_ROW = 1
const GHOST_START_COL = 1

// ---------------------
// State
// ---------------------
const gameContainer = ref(null)
const cellW = ref(30)
const cellH = ref(30)
const isMobile = ref(false)

const joeCol = ref(START_COL)
const joeRow = ref(START_ROW)
const currentDir = ref(null)
const nextDir = ref(null)
const DESKTOP_SPEED = 0.08
const MOBILE_SPEED = 0.08
const moveSpeed = computed(() => (isMobile.value ? MOBILE_SPEED : DESKTOP_SPEED))

let eatingSound = null

function playEatingSound() {
  if (!eatingSound) {
    eatingSound = new Audio("/eating.mp3")
    eatingSound.loop = true
    eatingSound.volume = 0.5
  }
  if (eatingSound.paused) {
    eatingSound.play().catch(() => {})
  }
}

function stopEatingSound() {
  if (eatingSound && !eatingSound.paused) {
    eatingSound.pause()
    eatingSound.currentTime = 0
  }
}

const gameStarted = ref(false)
const score = ref(0)
const highScore = ref(0)
const showChomp = ref(false)
const chompX = ref(0)
const chompY = ref(0)

const gameOver = ref(false)
const ghostCol = ref(GHOST_START_COL)
const ghostRow = ref(GHOST_START_ROW)
const ghostDir = ref(null)
let ghostMoveCounter = 0
const GHOST_MOVE_INTERVAL = 8 // ghost moves every N frames (slower than Joe)

const powerCells = ref([])
const eatenSet = reactive(new Set())
let totalPellets = 0
let animId = null

// ---------------------
// Computed
// ---------------------
const joeTransform = computed(() => {
  const d = currentDir.value
  if (d === "left") return "scaleX(-1)"
  return "scaleX(1)"
})

// Maze wall cells with border info (borders only on sides facing open space)
const mazeWalls = computed(() => {
  const list = []
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (MAZE[r][c] !== 1) continue
      list.push({
        row: r,
        col: c,
        bt: r > 0 && MAZE[r - 1][c] === 0,
        bb: r < ROWS - 1 && MAZE[r + 1][c] === 0,
        bl: c > 0 && MAZE[r][c - 1] === 0,
        br: c < COLS - 1 && MAZE[r][c + 1] === 0,
      })
    }
  }
  return list
})

// All pellet positions (static, visibility controlled by eatenSet)
const allPellets = computed(() => {
  const list = []
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (MAZE[r][c] === 0) {
        const power = powerCells.value.some(([pr, pc]) => pr === r && pc === c)
        list.push({ row: r, col: c, power, key: r + "," + c })
      }
    }
  }
  return list
})

// Dollar bill images at power pellet positions
const powerPelletPositions = computed(() =>
  powerCells.value.map(([r, c]) => ({ row: r, col: c, key: r + "," + c }))
)

// ---------------------
// Functions
// ---------------------
function isWall(row, col) {
  if (col < 0) col = COLS + col
  if (col >= COLS) col = col % COLS
  if (row < 0 || row >= ROWS) return true
  return MAZE[row][col] === 1
}

function canMoveFrom(row, col, dir) {
  let nr = row
  let nc = col
  if (dir === "up") nr--
  if (dir === "down") nr++
  if (dir === "left") nc--
  if (dir === "right") nc++
  return !isWall(nr, nc)
}

function eatPelletAt(row, col) {
  if (col < 0) col = COLS + col
  if (col >= COLS) col = col % COLS
  const key = row + "," + col
  if (MAZE[row] && MAZE[row][col] === 0 && !eatenSet.has(key)) {
    eatenSet.add(key)
    const power = powerCells.value.some(([pr, pc]) => pr === row && pc === col)
    score.value += power ? 100 : 1
    if (score.value > highScore.value) highScore.value = score.value

    chompX.value = col * cellW.value + cellW.value / 2
    chompY.value = row * cellH.value
    showChomp.value = true
    setTimeout(() => (showChomp.value = false), 300)

    // All pellets eaten -> respawn after a brief pause
    if (eatenSet.size >= totalPellets) {
      setTimeout(() => {
        eatenSet.clear()
        randomizePowerCells()
      }, 1000)
    }
  }
}

// BFS to find shortest path from ghost to Joe
function ghostBFS() {
  const gr = Math.round(ghostRow.value)
  const gc = Math.round(ghostCol.value)
  const jr = Math.round(joeRow.value)
  const jc = Math.round(joeCol.value)

  if (gr === jr && gc === jc) return null

  const visited = new Set()
  const queue = [{ r: gr, c: gc, firstDir: null }]
  visited.add(gr + "," + gc)

  const dirs = [
    { name: "up", dr: -1, dc: 0 },
    { name: "down", dr: 1, dc: 0 },
    { name: "left", dr: 0, dc: -1 },
    { name: "right", dr: 0, dc: 1 },
  ]

  while (queue.length > 0) {
    const { r, c, firstDir } = queue.shift()
    for (const d of dirs) {
      let nr = r + d.dr
      let nc = c + d.dc
      // Tunnel wrap
      if (nc < 0) nc = COLS - 1
      if (nc >= COLS) nc = 0
      if (nr < 0 || nr >= ROWS) continue
      const key = nr + "," + nc
      if (visited.has(key)) continue
      if (MAZE[nr][nc] === 1) continue
      visited.add(key)
      const fd = firstDir || d.name
      if (nr === jr && nc === jc) return fd
      queue.push({ r: nr, c: nc, firstDir: fd })
    }
  }
  return null // no path found
}

function moveGhost() {
  const dir = ghostBFS()
  if (!dir) return

  const gr = Math.round(ghostRow.value)
  const gc = Math.round(ghostCol.value)
  let nr = gr
  let nc = gc
  if (dir === "up") nr--
  if (dir === "down") nr++
  if (dir === "left") nc--
  if (dir === "right") nc++

  // Tunnel wrap
  if (nc < 0) nc = COLS - 1
  if (nc >= COLS) nc = 0

  if (nr >= 0 && nr < ROWS && MAZE[nr][nc] === 0) {
    ghostRow.value = nr
    ghostCol.value = nc
  }
}

function checkGhostCollision() {
  const dist =
    Math.abs(joeCol.value - ghostCol.value) + Math.abs(joeRow.value - ghostRow.value)
  return dist < 0.8
}

function resetGame() {
  joeCol.value = START_COL
  joeRow.value = START_ROW
  ghostCol.value = GHOST_START_COL
  ghostRow.value = GHOST_START_ROW
  currentDir.value = null
  nextDir.value = null
  ghostDir.value = null
  ghostMoveCounter = 0
  score.value = 0
  gameOver.value = false
  eatenSet.clear()
  randomizePowerCells()
}

function gameLoop() {
  if (gameOver.value) {
    stopEatingSound()
    animId = requestAnimationFrame(gameLoop)
    return
  }

  if (!gameStarted.value || !currentDir.value) {
    stopEatingSound()
    animId = requestAnimationFrame(gameLoop)
    return
  }

  playEatingSound()

  // Current snapped position before moving
  const prevCol = Math.round(joeCol.value)
  const prevRow = Math.round(joeRow.value)

  // Move
  let nc = joeCol.value
  let nr = joeRow.value
  if (currentDir.value === "left") nc -= moveSpeed.value
  if (currentDir.value === "right") nc += moveSpeed.value
  if (currentDir.value === "up") nr -= moveSpeed.value
  if (currentDir.value === "down") nr += moveSpeed.value

  // The target grid cell we're moving toward
  const targetCol = Math.round(nc)
  const targetRow = Math.round(nr)

  // Did we arrive at a new cell?
  if (targetCol !== prevCol || targetRow !== prevRow) {
    // Check if that new cell is a wall
    if (isWall(targetRow, targetCol)) {
      // Stop at previous cell
      joeCol.value = prevCol
      joeRow.value = prevRow
      currentDir.value = null
    } else {
      // Snap to new cell
      joeCol.value = targetCol
      joeRow.value = targetRow
      eatPelletAt(targetRow, targetCol)

      // Try buffered direction
      if (nextDir.value && canMoveFrom(targetRow, targetCol, nextDir.value)) {
        currentDir.value = nextDir.value
        nextDir.value = null
      }

      // Check if continuing hits a wall
      if (currentDir.value && !canMoveFrom(targetRow, targetCol, currentDir.value)) {
        currentDir.value = null
      }
    }
  } else {
    // Still moving between cells, just update position
    joeCol.value = nc
    joeRow.value = nr
  }

  // Tunnel wrap (row 5 open on both sides)
  if (joeCol.value < -0.5) joeCol.value = COLS - 0.5
  if (joeCol.value > COLS - 0.5) joeCol.value = -0.5

  // Move ghost (slower than Joe)
  ghostMoveCounter++
  if (ghostMoveCounter >= GHOST_MOVE_INTERVAL) {
    ghostMoveCounter = 0
    moveGhost()
  }

  // Check collision with ghost
  if (checkGhostCollision()) {
    gameOver.value = true
  }

  animId = requestAnimationFrame(gameLoop)
}

function setDirection(dir) {
  if (gameOver.value) return
  if (!gameStarted.value) {
    gameStarted.value = true
    gameContainer.value?.focus()
  }
  const sc = Math.round(joeCol.value)
  const sr = Math.round(joeRow.value)
  if (canMoveFrom(sr, sc, dir)) {
    currentDir.value = dir
    nextDir.value = null
  } else {
    nextDir.value = dir
  }
}

function onKeydown(e) {
  const keyMap = {
    ArrowUp: "up",
    ArrowDown: "down",
    ArrowLeft: "left",
    ArrowRight: "right",
    w: "up",
    s: "down",
    a: "left",
    d: "right",
  }
  const dir = keyMap[e.key]
  if (dir) setDirection(dir)
}

function startGame() {
  if (gameOver.value) {
    resetGame()
    gameContainer.value?.focus()
    return
  }
  if (!gameStarted.value) gameStarted.value = true
  gameContainer.value?.focus()
}

function resizeHandler() {
  if (!gameContainer.value) return
  const rect = gameContainer.value.getBoundingClientRect()
  cellW.value = rect.width / COLS
  cellH.value = rect.height / ROWS
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  // Count total pellets
  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++) if (MAZE[r][c] === 0) totalPellets++

  randomizePowerCells()
  resizeHandler()
  window.addEventListener("resize", resizeHandler)
  animId = requestAnimationFrame(gameLoop)
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeHandler)
  if (animId) cancelAnimationFrame(animId)
  stopEatingSound()
})
</script>

<style scoped>
div {
  -webkit-user-drag: none;
}
img {
  -webkit-user-drag: none;
  pointer-events: none;
}
*:active {
  opacity: 1 !important;
}
.dpad-btn {
  width: 2.75rem;
  height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  border: 2px solid #e51929;
  border-radius: 0.375rem;
  color: #facc15;
  font-size: 1.25rem;
  touch-action: manipulation;
  cursor: pointer;
}
.dpad-btn:active {
  background: #e51929;
  color: #000;
}
.dpad-arrow {
  line-height: 1;
}
</style>
