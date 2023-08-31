import { createCanvas, loadImage } from 'canvas';
import * as fs from 'fs';

const data = {
  // ... (tus datos aquí)
};

const width = 800;
const height = 600;

const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Dibujar un fondo
ctx.fillStyle = 'white'; // Color de fondo
ctx.fillRect(0, 0, width, height);

// Dibujar el título
ctx.font = 'bold 24px Arial';
ctx.fillStyle = 'black';
ctx.fillText('Lista de Compras', 50, 50);

// Dibujar los detalles
let y = 100;
[1,2,3].forEach((item) => {
  ctx.font = '18px Arial';
  ctx.fillText(`items de lista numero 1`, 50, y);
  y += 30; // Aumentar la posición vertical
});

// Dibujar el total
ctx.font = 'bold 20px Arial';
ctx.fillText(`Total: 500 soles`, 50, y + 20);

// Guardar la imagen generada en un archivo
const out = fs.createWriteStream('lista-de-compras.png');
const stream = canvas.createPNGStream();
stream.pipe(out);
out.on('finish', () => console.log('Imagen generada.'));