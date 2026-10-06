import { useMemo, useState } from "react";
import { FiChevronDown, FiDownload, FiSearch } from "react-icons/fi";
import { deals, dealStages, formatCurrency } from "../../data/sales.js";
import styles from "./styles.module.css";

const periodRanges = {
    month: { start: "2026-09-07", end: "2026-10-06" },
    quarter: { start: "2026-07-01", end: "2026-09-30" },
    year: { start: "2026-01-01", end: "2026-10-06" },
};

const stageStyles = {
    Prospecting: styles.prospecting,
    Qualified: styles.qualified,
    Proposal: styles.proposal,
    Negotiation: styles.negotiation,
    "Closed won": styles.closedWon,
    "Closed lost": styles.closedLost,
};

const formatDate = (date) =>
    new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
    }).format(new Date(`${date}T12:00:00`));

const makeCsvValue = (value) => `"${String(value).replaceAll('"', '""')}"`;

const DealsTable = ({ period, activeStage, onStageChange }) => {
    const [search, setSearch] = useState("");

    const visibleDeals = useMemo(() => {
        const range = periodRanges[period];
        const query = search.trim().toLowerCase();

        return deals.filter((deal) => {
            const matchesDate =
                deal.date >= range.start && deal.date <= range.end;
            const matchesStage = !activeStage || deal.stage === activeStage;
            const searchableText =
                `${deal.id} ${deal.company} ${deal.contact} ${deal.owner}`.toLowerCase();
            return (
                matchesDate && matchesStage && searchableText.includes(query)
            );
        });
    }, [activeStage, period, search]);

    const totalValue = visibleDeals.reduce((sum, deal) => sum + deal.value, 0);

    const exportDeals = () => {
        const headings = [
            "Deal ID",
            "Company",
            "Contact",
            "Value",
            "Stage",
            "Owner",
            "Date",
        ];
        const rows = visibleDeals.map((deal) => [
            deal.id,
            deal.company,
            deal.contact,
            deal.value,
            deal.stage,
            deal.owner,
            deal.date,
        ]);
        const csv = [headings, ...rows]
            .map((row) => row.map(makeCsvValue).join(","))
            .join("\r\n");
        const file = new Blob([csv], { type: "text/csv;charset=utf-8" });
        const url = URL.createObjectURL(file);
        const link = document.createElement("a");
        link.href = url;
        link.download = `sales-deals-${new Date().toISOString().slice(0, 10)}.csv`;
        document.body.append(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
    };

    return (
        <section
            className={styles.dealsTable}
            id="deals"
            aria-labelledby="deals-title"
        >
            <div className={styles.heading}>
                <div>
                    <h2 id="deals-title">Recent deals</h2>
                    <p>
                        {visibleDeals.length} deals /{" "}
                        {formatCurrency(totalValue)}
                    </p>
                </div>
                <button
                    className={styles.exportButton}
                    type="button"
                    onClick={exportDeals}
                    disabled={visibleDeals.length === 0}
                >
                    <FiDownload aria-hidden="true" />
                    <span>Export CSV</span>
                </button>
            </div>

            <div className={styles.filters}>
                <label className={styles.search}>
                    <FiSearch aria-hidden="true" />
                    <input
                        type="search"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Search deals or people"
                        aria-label="Search deals, companies, contacts, or owners"
                    />
                </label>
                <label className={styles.stagePicker}>
                    <span>Deal stage</span>
                    <span className={styles.selectWrap}>
                        <select
                            value={activeStage}
                            onChange={(event) =>
                                onStageChange(event.target.value)
                            }
                            aria-label="Filter deals by stage"
                        >
                            <option value="">All stages</option>
                            {dealStages.map((stage) => (
                                <option value={stage} key={stage}>
                                    {stage}
                                </option>
                            ))}
                        </select>
                        <FiChevronDown aria-hidden="true" />
                    </span>
                </label>
            </div>

            <div className={styles.tableWrap}>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Deal</th>
                            <th scope="col">Value</th>
                            <th scope="col">Stage</th>
                            <th scope="col">Owner</th>
                            <th scope="col">Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {visibleDeals.map((deal) => (
                            <tr key={deal.id}>
                                <td data-label="Deal">
                                    <span className={styles.company}>
                                        {deal.company}
                                    </span>
                                    <span className={styles.contact}>
                                        {deal.contact} / {deal.id}
                                    </span>
                                </td>
                                <td data-label="Value" className={styles.value}>
                                    {formatCurrency(deal.value)}
                                </td>
                                <td data-label="Stage">
                                    <span
                                        className={`${styles.stagePill} ${stageStyles[deal.stage]}`}
                                    >
                                        {deal.stage}
                                    </span>
                                </td>
                                <td data-label="Owner">{deal.owner}</td>
                                <td data-label="Updated">
                                    {formatDate(deal.date)}
                                </td>
                            </tr>
                        ))}
                        {visibleDeals.length === 0 && (
                            <tr>
                                <td className={styles.empty} colSpan="5">
                                    No deals match these filters.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default DealsTable;
