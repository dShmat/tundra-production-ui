import {mkdir} from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const assets = path.join(root, 'src/assets/images');
const optimized = path.join(assets, 'optimized');

async function writeVariants(input, outputBase, widths, aspectRatio) {
  await mkdir(path.dirname(outputBase), {recursive: true});
  for (const width of widths) {
    let pipeline = sharp(input).rotate().resize({width, withoutEnlargement: true});
    if (aspectRatio) {
      pipeline = pipeline.resize({width, height: Math.round(width / aspectRatio), fit: 'cover', position: 'centre'});
    }
    await Promise.all([
      pipeline.clone().webp({quality: 78, effort: 5}).toFile(`${outputBase}-${width}.webp`),
      pipeline.clone().avif({quality: 52, effort: 5}).toFile(`${outputBase}-${width}.avif`),
    ]);
  }
}

await writeVariants(path.join(assets, 'studio-hero.png'), path.join(optimized, 'studio-hero'), [768, 1280, 1920]);
await writeVariants(path.join(assets, 'equipment/equipment-overview.png'), path.join(optimized, 'equipment'), [768, 1280, 1920]);

const spaces = ['cyclorama.png', 'stylised.png', 'terrace.jpg'];
for (const [index, filename] of spaces.entries()) {
  await writeVariants(path.join(assets, 'spaces', filename), path.join(optimized, 'spaces', `space-${index + 1}`), [640, 1024]);
}

const instagram = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15];
for (const image of instagram) {
  await writeVariants(path.join(assets, 'instagram', `${image}.png`), path.join(optimized, 'instagram', String(image)), [400]);
}

await sharp(path.join(assets, 'studio-hero.png'))
  .rotate()
  .resize({width: 1200, height: 630, fit: 'cover', position: 'centre'})
  .jpeg({quality: 82, progressive: true})
  .toFile(path.join(assets, 'og-tundra-studio.jpg'));

console.log('Optimized image variants generated.');
