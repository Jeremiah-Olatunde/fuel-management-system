<script lang="ts">

  //--- DOT ANIMATION FUNCTIONS -----------------------------------------------

  // const r = 2 + 2 * Math.sin((d/D) * 4 * Math.PI) ** 2;  
  // const r = 1 + 1 * Math.cos((d/D) * 4 * Math.PI) ** 2;  

  // const sigmoid = (x: number) => Math.pow(Math.E, x) / ( Math.pow(Math.E, x) + 1 ); 
  // const s = sigmoid(4.5 * d/D);
  // const r = 1 + 2 * (4 * s * (1 - s)) *  (Math.cos((d/D) * 10 * Math.PI) ** 2);

  //----------------------------------------------------------------------------


  function initializeCanvas(ref: any): { canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D } {
      const canvas = ref as HTMLCanvasElement | null;
      const ctx = canvas?.getContext("2d");

      if(!canvas) throw new Error("CANVAS INITIALIZATION FAILED");
      if(!ctx) throw new Error("CANVAS INITIALIZATION FAILED");

      const { width: w, height: h } = canvas.getBoundingClientRect();
      canvas.width = w; canvas.height = h;

      return { canvas, ctx }  
  }

  function drawPoint(
    { ctx, fill }: { ctx: CanvasRenderingContext2D, fill?: string | CanvasGradient | CanvasPattern },
    { point: [x, y], r } : { point: [number, number], r: number }
  ): void {
    ctx.fillStyle = fill ?? "black";
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    ctx.fill();    
  }

  function createGrid(width: number, height: number, spacing: number, callback?: (point: [number, number]) => void){
    const points: [number, number][] = [];

    for(let y = spacing; y < height; y += spacing) {
      for(let x = spacing; x < width; x += spacing) {
        if(callback?.([x, y])) continue; 
        points.push([x, y]);
      }
    }

    return points;
  }

  function initializeGrid(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void {
    const { width: w, height: h } = canvas;

    const grid = createGrid(w, h, 15, ([x, y]) => {
      drawPoint({ ctx }, { point: [x, y], r: 1 })
    });

    canvas.parentElement?.addEventListener("mouseleave", () => {
      ctx.clearRect(0, 0, w, h);
      grid.map(([x, y]) => drawPoint(
        { ctx }, 
        { point: [x, y], r: 1 }
      ))
    });

    canvas.parentElement?.addEventListener("mousemove", ({pageX: mouseX, pageY: mouseY}) => {
      const { x: canvasXOffset, y: canvasYOffset } = canvas.getBoundingClientRect(); // coor of canvas relative to window
      const { pageXOffset, pageYOffset } = window;
      const x0 = mouseX - (canvasXOffset + pageXOffset); // coor of mouse relative to canvas origin
      const y0 = mouseY - (canvasYOffset + pageYOffset); // coor of mouse relative to canvas origin
      
      ctx.clearRect(0, 0, w, h);
      // ctx.clearRect(x0 - 50, y0 - 50, 100, 100);

      for(const [x, y] of grid){
        // if(100 < Math.abs(x0 - x), 100 < Math.abs(y0 - y)) continue;

        const D = Math.sqrt((w/2) ** 2 + (h/2) ** 2)
        const d = Math.sqrt((x - x0) ** 2 + (y - y0) ** 2);
        const r = 1 + 2 * Math.pow(Math.E, - 10 * d / D);

        drawPoint({ ctx }, { point: [x, y], r })
      }
    });
  }

  export default {
    mounted: function() {
      const { canvas, ctx } = initializeCanvas(this.$refs.canvas);
      initializeGrid(canvas, ctx);
    }
  }
</script>
<template>
    <canvas ref="canvas"></canvas>
</template>

<style lang="scss">
  canvas {
    top: 0; left: 0;
    position: absolute;
    width: 100%; height: 100%;
  }
</style>
