import { createAsyncThunk } from "@reduxjs/toolkit";
import { POST_SENT_MAIL_DATA } from "../../../../redux/actionTypes";





export const postSendData = createAsyncThunk(
    POST_SENT_MAIL_DATA,
    async (payload, { rejectWithValue }) => {
        console.log(payload, "payload");
        const data = {
            mailSubject: payload?.mailSubject,
            write: payload?.write,
        }

        try {
            return data
        } catch (error) {
            return rejectWithValue(error?.response?.data?.error?.message);
        }
    }
);

// export const getSettlementupload = createAsyncThunk(
//     GET_SETTLEMENT_UPLOAD,
//     async (id, { rejectWithValue }) => {
//       try {
//         const { data } = await getRequest(`${APIROUTES.CLAIMSETTLEMENTDEATIL.GET_SETTLEMENT_UPLOAD}${id}`);
//         console.log(data,"cunData");
//         return data;
//       } catch (error) {
//         return rejectWithValue(error?.response.data.error.message);
//       }
//     }
//   );
