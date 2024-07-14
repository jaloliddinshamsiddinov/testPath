import React from 'react'

const App = () => {
  return (
    <div>
      <img src="src/assets/svg/hero.svg" alt="src/assets/svg/hero.svg" />
      <img src="/src/assets/svg/hero.svg" alt="/src/assets/svg/hero.svg" />
      <img src="./src/assets/svg/hero.svg" alt="./src/assets/svg/hero.svg" />
      <img src="./assets/svg/hero.svg" alt="./assets/svg/hero.svg" />
    </div>
  )
}

export default App