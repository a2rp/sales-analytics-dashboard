import { FiBriefcase, FiDollarSign, FiTarget, FiTrendingUp } from 'react-icons/fi'
import { formatCurrency } from '../../data/sales.js'
import styles from './styles.module.css'

const MetricCards = ({ report }) => {
  const metrics = [
    {
      label: 'Revenue',
      value: formatCurrency(report.total),
      note: `+${report.change}% from previous period`,
      icon: <FiDollarSign aria-hidden="true" />,
      tone: styles.orange,
    },
    {
      label: 'Quota reached',
      value: `${report.quota}%`,
      note: `${formatCurrency(report.total)} of ${formatCurrency(report.target)}`,
      icon: <FiTarget aria-hidden="true" />,
      tone: styles.blue,
      progress: report.quota,
    },
    {
      label: 'Win rate',
      value: `${report.winRate}%`,
      note: 'Won deals / closed deals',
      icon: <FiTrendingUp aria-hidden="true" />,
      tone: styles.green,
    },
    {
      label: 'Average deal',
      value: formatCurrency(report.averageDeal),
      note: 'Across won opportunities',
      icon: <FiBriefcase aria-hidden="true" />,
      tone: styles.violet,
    },
  ]

  return (
    <section className={styles.metricCards} aria-label="Sales performance metrics">
      {metrics.map((metric) => (
        <article className={styles.metric} key={metric.label}>
          <div className={styles.metricTop}>
            <span className={`${styles.icon} ${metric.tone}`}>{metric.icon}</span>
            {metric.progress && <span className={styles.change}>On track</span>}
          </div>
          <p className={styles.label}>{metric.label}</p>
          <p className={styles.value}>{metric.value}</p>
          <p className={styles.note}>{metric.note}</p>
          {metric.progress && (
            <div className={styles.progress} role="progressbar" aria-label="Quota reached" aria-valuenow={metric.progress} aria-valuemin="0" aria-valuemax="100">
              <span style={{ width: `${metric.progress}%` }} />
            </div>
          )}
        </article>
      ))}
    </section>
  )
}

export default MetricCards
