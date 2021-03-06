export async function renderTile(args: {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  size: number;
  padding: number;
  offset: number;
  color: string;
  left?: boolean;
  top?: boolean;
  topLeft?: boolean;
  scale?: number;
  image?: string;
  type?: number;
  img?: any;
}) {
  const {
    ctx,
    x,
    y,
    size,
    padding,
    offset,
    color,
    left,
    top,
    topLeft,
    scale,
    image,
    type,
    img,
  } = args;

  ctx.fillStyle = color;

  const tileSize = scale ? size * scale : size * 1.01;

  // draw background
  // ctx.save();
  // if (image) {
  // } else {
  //   if (type) {
  //     ctx.fillStyle = "#110e13";
  //     ctx.fillRect(x - size - offset, y - size - offset, size, size);
  //   }
  // }

  if (image) {
    // const img = await loadImage();
    // console.log(img);
    if (type === 8) {
      ctx.drawImage(
        img as CanvasImageSource,
        x - tileSize * 19.8 - offset,
        y - tileSize * 19.8 - offset,
        tileSize * 20 + offset,
        tileSize * 20 + offset
      );
    }
  } else if (!top && !left) {
    // disconnected everywhere: it's a square
    ctx.fillStyle = color;
    ctx.fillRect(
      x - tileSize + padding,
      y - tileSize + padding,
      tileSize - padding,
      tileSize - padding
    );
  } else if (top && left && topLeft) {
    // connected everywhere: it's a square
    ctx.fillStyle = color;
    ctx.fillRect(
      x - tileSize - offset,
      y - tileSize - offset,
      tileSize + offset,
      tileSize + offset
    );
  } else {
    if (left) {
      // connected left: it's a rectangle
      ctx.fillStyle = color;
      ctx.fillRect(
        x - tileSize - offset,
        y - tileSize + padding,
        tileSize + offset,
        tileSize - padding
      );
    }
    if (top) {
      // connected top: it's a rectangle
      ctx.fillStyle = color;
      ctx.fillRect(
        x - tileSize + padding,
        y - tileSize - offset,
        tileSize - padding,
        tileSize + offset
      );
    }
  }
  // ctx.restore();
}
