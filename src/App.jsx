import React from 'react'
import svg from './assets/svg/svg.svg'
import png from './assets/png/img.webp'

const App = () => {
  return (
    <div>
      <img src="/assets/svg/hero.svg" alt="/assets" />
      <img src="/src/assets/svg/hero.svg" alt="/src" />
      <img src="./src/assets/svg/hero.svg" alt="./src" />
      <img src={svg} alt="import" />
      <p>png images</p>
      <img src="\assets\png\img.webp" alt="/assets" />
      <img src="/src\assets\png\img.webp" alt="/src" />
      <img src="./src\assets\png\img.webp" alt="./src" />
      <img src={png} alt="import" />
    </div>
  )
}

export default App