import { FiArrowUpRight } from 'react-icons/fi'
import { formatCompactCurrency } from '../../data/sales.js'
import { stages } from '../../data/sales.js'
import styles from './styles.module.css'

const PipelineFunnel = ({ activeStage, onStageChange }) => {
  const total = stages.reduce((sum, stage) => sum + stage.value, 0)
  const highestValue = Math.max(...stages.map((stage) => stage.value))

  return (
    <section className={styles.pipelineFunnel} id="pipeline" aria-labelledby="pipeline-title">
      <div className={styles.header}>
        <div>
          <h2 id="pipeline-title">Pipeline by stage</h2>
          <p>Open and recently closed opportunities</p>
        </div>
        <FiArrowUpRight aria-hidden="true" />
      </div>

      <div className={styles.total}>
        <span>Pipeline value</span>
        <strong>{formatCompactCurrency(total)}</strong>
      </div>

      <div className={styles.stageList} aria-label="Filter deals by stage">
        {stages.map((stage) => (
          <button
            className={`${styles.stage} ${activeStage === stage.name ? styles.active : ''}`}
            type="button"
            key={stage.name}
            aria-pressed={activeStage === stage.name}
            onClick={() => onStageChange(activeStage === stage.name ? '' : stage.name)}
          >
            <span className={styles.stageDetails}>
              <span className={styles.stageName}>{stage.name}</span>
              <span className={styles.stageCount}>{stage.count} deals</span>
            </span>
            <span className={styles.stageValue}>{formatCompactCurrency(stage.value)}</span>
            <span className={styles.track}>
              <span style={{ width: `${Math.max(10, (stage.value / highestValue) * 100)}%` }} />
            </span>
          </button>
        ))}
      </div>
      <p className={styles.helperText}>Choose a stage to filter the deal list.</p>
    </section>
  )
}

export default PipelineFunnel
