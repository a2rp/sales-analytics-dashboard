import Header from './components/header/index.jsx'
import styles from './App.module.css'

const App = () => (
  <div className={styles.app} id="top">
    <Header />
    <main className={styles.workspace} id="overview">
      <h1>Sales overview</h1>
    </main>
  </div>
)

export default App