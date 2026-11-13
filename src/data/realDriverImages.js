function screenshot(name, alt) {
  const base = `/images/real-driver/${name}`
  return {
    src: `${base}-1600.webp`,
    srcSet: `${base}-800.webp 800w, ${base}-1600.webp 1600w`,
    width: 1600,
    height: 900,
    alt,
  }
}

export const driverImages = {
  lineup: screenshot('lineup', 'A group of colorful sports cars gathered on a Real Driver city street'),
  streetCoupe: screenshot('street-coupe', 'A red sports coupe parked between city buildings in Real Driver'),
  online: screenshot('online', 'Three sports cars lined up in the city with the Real Driver Online title'),
  race: screenshot('race', 'A red sports car competing with other drivers on a tree-lined road'),
  scenic: screenshot('scenic', 'Cars taking a winding junction among trees in Real Driver'),
  cockpit: screenshot('cockpit', 'The detailed red interior and steering wheel of a sports car during a city race'),
  tuning: screenshot('tuning', 'A white coupe and its performance statistics in the Real Driver car store'),
}

export const galleryImageSizes = '(max-width: 700px) calc(100vw - 40px), (max-width: 1000px) calc((100vw - 82px) / 2), (max-width: 1376px) calc((100vw - 122px) / 2), 627px'
export const wideImageSizes = '(max-width: 700px) calc(100vw - 40px), (max-width: 1000px) calc(100vw - 56px), (max-width: 1376px) calc(100vw - 96px), 1280px'
