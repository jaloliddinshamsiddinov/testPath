import React from 'react'

const App = () => {
  return (
    <div>
      <img src="src/assets/svg/hero.svg" alt="src/assets/svg/hero.svg" />
      <img src="/src/assets/svg/hero.svg" alt="/src/assets/svg/hero.svg" />
      <img src="./src/assets/svg/hero.svg" alt="./src/assets/svg/hero.svg" />
      <img src="./assets/svg/hero.svg" alt="./assets/svg/hero.svg" />
      <p>png images</p>
      <img src="src\assets\png\img.webp" alt="src/assets/svg/hero.svg" />
      <img src="/src\assets\png\img.webp" alt="/src\assets\png\img.webp" />
      <img src="./src\assets\png\img.webp" alt="./src\assets\png\img.webp" />
    </div>
  )
}

export default App