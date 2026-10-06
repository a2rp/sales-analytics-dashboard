import { useState } from 'react'
import Header from './components/header/index.jsx'
import MetricCards from './components/metricCards/index.jsx'
import PipelineFunnel from './components/pipelineFunnel/index.jsx'
import ReportControls from './components/reportControls/index.jsx'
import RevenueChart from './components/revenueChart/index.jsx'
import { reports } from './data/sales.js'
import styles from './App.module.css'

const App = () => {
  const [period, setPeriod] = useState('month')
  const [activeStage, setActiveStage] = useState('')

  return (
    <div className={styles.app} id="top">
      <Header />
      <main className={styles.workspace} id="overview">
        <ReportControls period={period} onPeriodChange={setPeriod} />
        <MetricCards report={reports[period]} />
        <div className={styles.analysisGrid}>
          <RevenueChart report={reports[period]} />
          <PipelineFunnel activeStage={activeStage} onStageChange={setActiveStage} />
        </div>
      </main>
    </div>
  )
}

export default App
