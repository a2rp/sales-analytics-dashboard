import { FiArrowUpRight, FiAward } from "react-icons/fi";
import { formatCurrency, salesTeam } from "../../data/sales.js";
import styles from "./styles.module.css";

const TeamLeaderboard = ({ period }) => {
    const topRevenue = Math.max(
        ...salesTeam.map((member) => member.results[period].revenue),
    );
    const totalWins = salesTeam.reduce(
        (sum, member) => sum + member.results[period].closed,
        0,
    );

    return (
        <section
            className={styles.teamLeaderboard}
            id="team"
            aria-labelledby="team-title"
        >
            <div className={styles.header}>
                <div>
                    <span className={styles.titleIcon}>
                        <FiAward aria-hidden="true" />
                    </span>
                    <h2 id="team-title">Team leaderboard</h2>
                    <p>Top performers, ranked by closed revenue</p>
                </div>
                <div className={styles.marketNote}>
                    <img
                        src={`${import.meta.env.BASE_URL}images/city-markets.jpg`}
                        alt="City skyline representing the sales team's markets"
                    />
                    <span>
                        <strong>8 markets</strong>
                        <small>Team coverage</small>
                    </span>
                </div>
            </div>

            <div className={styles.teamList}>
                {salesTeam.map((member, index) => {
                    const results = member.results[period];
                    const progress = Math.round(
                        (results.revenue / topRevenue) * 100,
                    );

                    return (
                        <article className={styles.member} key={member.name}>
                            <span className={styles.rank}>
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className={styles.avatar}>
                                {member.image ? (
                                    <img
                                        src={`${import.meta.env.BASE_URL}${member.image}`}
                                        alt=""
                                    />
                                ) : (
                                    member.initials
                                )}
                            </span>
                            <span className={styles.identity}>
                                <strong>{member.name}</strong>
                                <small>{member.role}</small>
                            </span>
                            <span className={styles.results}>
                                <span className={styles.resultText}>
                                    <strong>
                                        {formatCurrency(results.revenue)}
                                    </strong>
                                    <small>{results.closed} deals won</small>
                                </span>
                                <span
                                    className={styles.track}
                                    role="progressbar"
                                    aria-label={`${member.name} revenue compared with the top performer`}
                                    aria-valuenow={progress}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    <span style={{ width: `${progress}%` }} />
                                </span>
                            </span>
                            <FiArrowUpRight
                                className={styles.arrow}
                                aria-hidden="true"
                            />
                        </article>
                    );
                })}
            </div>
            <p className={styles.summary}>
                {totalWins} wins from the top three in this period.
            </p>
        </section>
    );
};

export default TeamLeaderboard;
