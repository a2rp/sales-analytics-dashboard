import { FiArrowUpRight } from 'react-icons/fi'
import { formatCurrency } from '../../data/sales.js'
import styles from './styles.module.css'

const chartWidth = 720
const chartHeight = 252
const chartPadding = { left: 54, right: 12, top: 16, bottom: 34 }
const chartMax = 300
const chartTicks = [0, 50, 100, 150, 200, 250, 300]

const RevenueChart = ({ report }) => {
  const plotWidth = chartWidth - chartPadding.left - chartPadding.right
  const plotHeight = chartHeight - chartPadding.top - chartPadding.bottom
  const points = report.chart.map((point, index) => ({
    x: chartPadding.left + (report.chart.length === 1 ? plotWidth / 2 : (index / (report.chart.length - 1)) * plotWidth),
    y: chartPadding.top + plotHeight - (point.value / chartMax) * plotHeight,
    ...point,
  }))
  const linePath = points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ')
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${chartHeight - chartPadding.bottom} L ${points[0].x} ${chartHeight - chartPadding.bottom} Z`

  return (
    <section className={styles.revenueChart} id="revenue" aria-labelledby="revenue-title">
      <div className={styles.header}>
        <div>
          <h2 id="revenue-title">Revenue over time</h2>
          <p>Closed revenue, in thousands</p>
        </div>
        <span className={styles.periodTotal}><FiArrowUpRight aria-hidden="true" /> {formatCurrency(report.total)}</span>
      </div>

      <svg className={styles.chart} viewBox={`0 0 ${chartWidth} ${chartHeight}`} role="img" aria-labelledby="revenue-chart-name revenue-chart-description">
        <title id="revenue-chart-name">Revenue trend</title>
        <desc id="revenue-chart-description">Revenue across {report.chart.length} points, ending at {formatCurrency(report.chart[report.chart.length - 1].value * 1000)}.</desc>
        <defs>
          <linearGradient id="revenue-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#df6e39" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#df6e39" stopOpacity="0.01" />
          </linearGradient>
        </defs>
        {chartTicks.map((tick) => {
          const y = chartPadding.top + plotHeight - (tick / chartMax) * plotHeight
          return (
            <g className={styles.gridLine} key={tick}>
              <line x1={chartPadding.left} x2={chartWidth - chartPadding.right} y1={y} y2={y} />
              <text x={chartPadding.left - 10} y={y + 4} textAnchor="end">${tick}k</text>
            </g>
          )
        })}
        <path className={styles.area} d={areaPath} />
        <path className={styles.line} d={linePath} />
        {points.map((point) => (
          <g className={styles.point} key={point.label}>
            <circle cx={point.x} cy={point.y} r="5" />
            <text x={point.x} y={chartHeight - 8} textAnchor="middle">{point.label}</text>
          </g>
        ))}
      </svg>
    </section>
  )
}

export default RevenueChart
