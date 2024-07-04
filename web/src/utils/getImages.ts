import fs from 'fs'
import path from 'path'

export function getImages() {
  const imagesDir = path.join(process.cwd(), 'public/projetos')
  const imageFiles = fs.readdirSync(imagesDir).filter((file) => {
    const ext = path.extname(file).toLowerCase()
    return ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.gif'
  })

  return imageFiles.map((file) => `/projetos/${file}`)
}
