import { createAsyncThunk } from "@reduxjs/toolkit";
import { POST_ADJUSTER_SUBMISSION_DATA } from "../../../../redux/actionTypes";





export const postAdjusterSubmission = createAsyncThunk(
    POST_ADJUSTER_SUBMISSION_DATA,
    async (payload, { rejectWithValue }) => {
        console.log(payload, "payload");
        let data = {
            adjusterName: payload?.adjusterName,
            claimNumber: payload?.claimNumber,
            dateOfReported: payload?.dateOfReported.toLocaleDateString("en-US", {
                month: "numeric",
                day: "2-digit",
                year: "numeric",
            }),
            dateOfLoss: payload?.dateOfLoss.toLocaleDateString("en-US", {
                month: "numeric",
                day: "2-digit",
                year: "numeric",
            }),
            placeOfAccident: payload?.placeOfAccident,
            driversName: payload?.driversName,
            houseNumber: payload?.houseNumber,
            barangay: payload?.barangay,
            country: payload?.country,
            province: payload?.province,
            city: payload?.city,
            zipCode: payload?.zipCode,
            name:payload?.name,
            contactNumber:payload?.contactNumber,
            plateNumber:payload?.plateNumber,
            unit: payload?.unit,
            shop: payload?.shop,
            insuranceCompanyName: payload?.insuranceCompanyName,
        };

        try {
            return data
        } catch (error) {
            return rejectWithValue(error?.response?.data?.error?.message);
        }
    }
);