import { useState } from 'react'
import Header from './components/header/index.jsx'
import ReportControls from './components/reportControls/index.jsx'
import styles from './App.module.css'

const App = () => {
  const [period, setPeriod] = useState('month')

  return (
    <div className={styles.app} id="top">
      <Header />
      <main className={styles.workspace} id="overview">
        <ReportControls period={period} onPeriodChange={setPeriod} />
      </main>
    </div>
  )
}

export default App
