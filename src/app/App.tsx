import React, { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toogle theme</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage/>}/>
          <Route path={'/'} element={<MainPage />}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App