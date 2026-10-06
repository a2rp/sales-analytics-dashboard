import { useState } from "react";
import AppFooter from "./components/appFooter/index.jsx";
import BackToTop from "./components/backToTop/index.jsx";
import Header from "./components/header/index.jsx";
import DealsTable from "./components/dealsTable/index.jsx";
import MetricCards from "./components/metricCards/index.jsx";
import PipelineFunnel from "./components/pipelineFunnel/index.jsx";
import ReportControls from "./components/reportControls/index.jsx";
import RevenueChart from "./components/revenueChart/index.jsx";
import TeamLeaderboard from "./components/teamLeaderboard/index.jsx";
import { reports } from "./data/sales.js";
import styles from "./App.module.css";

const App = () => {
    const [period, setPeriod] = useState("month");
    const [activeStage, setActiveStage] = useState("");

    return (
        <div className={styles.app} id="top">
            <Header />
            <main className={styles.workspace} id="overview">
                <ReportControls period={period} onPeriodChange={setPeriod} />
                <MetricCards report={reports[period]} />
                <div className={styles.analysisGrid}>
                    <RevenueChart report={reports[period]} />
                    <PipelineFunnel
                        activeStage={activeStage}
                        onStageChange={setActiveStage}
                    />
                </div>
                <DealsTable
                    period={period}
                    activeStage={activeStage}
                    onStageChange={setActiveStage}
                />
                <TeamLeaderboard period={period} />
            </main>
            <AppFooter />
            <BackToTop />
        </div>
    );
};

export default App;
