import { FiCalendar, FiChevronDown } from "react-icons/fi";
import { periods } from "../../data/sales.js";
import styles from "./styles.module.css";

const ReportControls = ({ period, onPeriodChange }) => (
    <section className={styles.reportControls} aria-labelledby="report-title">
        <div className={styles.titleGroup}>
            <p className={styles.dateLabel}>
                <FiCalendar aria-hidden="true" /> Sales performance / October
                2026
            </p>
            <h1 id="report-title">See the full sales picture.</h1>
            <p className={styles.description}>
                Revenue, pipeline, and people, together in one view.
            </p>
        </div>

        <label className={styles.periodPicker}>
            <span>Reporting period</span>
            <span className={styles.selectWrap}>
                <select
                    value={period}
                    onChange={(event) => onPeriodChange(event.target.value)}
                >
                    {periods.map((option) => (
                        <option key={option.id} value={option.id}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <FiChevronDown aria-hidden="true" />
            </span>
        </label>
    </section>
);

export default ReportControls;
