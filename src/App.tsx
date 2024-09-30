import React, { useEffect, useState } from "react";
import DealsTable from "./components/DataTable/DataTable";
import { Deal } from "./types/deal.type";
import { fetchDeals } from "./utils/api";

const App = () => {
    const [deals, setDeals] = useState<Deal[]>([]);

    useEffect(() => {
        let isMounted = true;

        const fetchDealsThrottled = async () => {
            let page = 1;
            const limit = 3;

            let allDeals: Deal[] = [];

            while (isMounted) {
                const newDeals = await fetchDeals(page, limit);
                if (newDeals.length === 0) break;

                allDeals = [...allDeals, ...newDeals];
                setDeals(allDeals);

                page++;

                await new Promise((resolve) => setTimeout(resolve, 1000));
            }
        };

        fetchDealsThrottled();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div className="App">
            <DealsTable deals={deals} />
        </div>
    );
};

export default App;
