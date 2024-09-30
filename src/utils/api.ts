import { DealDetails } from "../types/dealDetails.type";
import axiosInstance from "./axios.interceptors";

export const fetchDeals = async (page = 1, limit = 3) => {
    try {
        const response: any = await axiosInstance.get(`/leads?page=${page}&limit=${limit}`);

        return response.data._embedded.leads;
    } catch (error) {
        console.error("Error fetching deals:", error);
        return [];
    }
};

export const fetchDealDetails = async (dealId: number): Promise<DealDetails> => {
    try {
        const response = await axiosInstance.get(`/leads/${dealId}`);

        const deal = response.data;
        const taskDate = deal.closest_task_at ? new Date(deal.closest_task_at * 1000) : null;

        let taskStatus: "red" | "green" | "yellow" = "red";
        const today = new Date();

        if (taskDate) {
            if (taskDate < today) {
                taskStatus = "red";
            } else if (taskDate.toDateString() === today.toDateString()) {
                taskStatus = "green";
            } else {
                taskStatus = "yellow";
            }
        }

        const formattedDate = new Date(deal.closest_task_at * 1000).toLocaleDateString("ru-RU", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });

        return {
            id: deal.id,
            name: deal.name,
            date: formattedDate,
            taskStatus,
        };
    } catch (error) {
        console.error("Error fetching deal details:", error);
        throw new Error("Error fetching deal details");
    }
};
