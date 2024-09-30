import React, { CSSProperties, useState } from "react";
import { fetchDealDetails } from "../utils/api";
import { ClipLoader } from "react-spinners";
import ExpandedDealCard from "./ExpendedCard";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "00FFFF",
};

const DataTableItem = ({ deal, activeDealId, setActiveDealId, expandedDeal, setExpandedDeal }: any) => {
    const [loading, setLoading] = useState<boolean>(false);

    const handleCardClick = async (dealId: number) => {
        if (activeDealId === dealId) {
            setActiveDealId(null);
            setExpandedDeal(null);
            return;
        }

        setActiveDealId(dealId);
        setLoading(true);
        setExpandedDeal(null);

        try {
            const expandedData = await fetchDealDetails(dealId);
            setExpandedDeal(expandedData);
        } catch (error) {
            console.error("Error fetching deal details:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <tr onClick={() => handleCardClick(deal.id)}>
                <td>{deal.id}</td>
                <td>{deal.name}</td>
                <td>{deal.price}</td>
            </tr>

            {activeDealId === deal.id && (
                <tr>
                    <td colSpan={3}>
                        {loading ? (
                            <ClipLoader
                                color={"00FFFF"}
                                loading={loading}
                                cssOverride={override}
                                size={50}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                        ) : expandedDeal ? (
                            <ExpandedDealCard deal={expandedDeal} />
                        ) : (
                            <p style={{ textAlign: "center" }}>No data</p>
                        )}
                    </td>
                </tr>
            )}
        </>
    );
};

export default DataTableItem;
