import React, { useState } from "react";
import "./DataTable.scss";
import { Deal } from "../../types/deal.type";
import DataTableItem from "../DataTableItem";
import { DealDetails } from "../../types/dealDetails.type";

type DealsTableProps = {
    deals: Deal[];
};

const DealsTable: React.FC<DealsTableProps> = ({ deals }) => {
    const [activeDealId, setActiveDealId] = useState<number | null>(null);
    const [expandedDeal, setExpandedDeal] = useState<DealDetails | null>(null);

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {deals.length ? (
                    deals.map((deal) => (
                        <DataTableItem
                            deal={deal}
                            key={deal.id}
                            activeDealId={activeDealId}
                            setActiveDealId={setActiveDealId}
                            expandedDeal={expandedDeal}
                            setExpandedDeal={setExpandedDeal}
                        />
                    ))
                ) : (
                    <tr></tr>
                )}
            </tbody>
        </table>
    );
};

export default DealsTable;
