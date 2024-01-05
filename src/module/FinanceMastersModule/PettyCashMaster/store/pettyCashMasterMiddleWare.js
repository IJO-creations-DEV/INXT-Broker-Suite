import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_PETTY_CASH_BY_ID, GET_PETTY_CASH_SEARCH_LIST, GET_PETTY_CASH_VIEW, PATCH_PETTY_CASH_EDIT, POST_ADD_PETTY_CASH } from "../../../../redux/actionTypes";



export const pettyCashMaster = createAsyncThunk(
    GET_PETTY_CASH_BY_ID,
    async (payload, { rejectWithValue, getState }) => {
        const { pettyCashMainReducers } = getState();
        console.log(pettyCashMainReducers, "dta");
        const { pettyCashList } = pettyCashMainReducers
        const filteredData = pettyCashList.filter(item => item.id === 1);
        console.log(filteredData, "filteredData")
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return filteredData[0];
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },
)





export const postAddPettyCash = createAsyncThunk(
    POST_ADD_PETTY_CASH,
    async (payload, { rejectWithValue }) => {
        console.log(payload, "values")
        try {
            const postData = {
                prttycashcode: payload?.prttycashcode,
                pettycashname: payload?.pettycashname,
                pettycashsize: payload?.pettycashsize,
                avilabelcash: payload?.avilabelcash,
                mincashback: payload?.mincashback,
                transactionlimit: payload?.transactionlimit
            }
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            // const response = await postPetty(payload);
            console.log(postData, "postData")
            return postData;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },)




export const getPettyCashSearchList = createAsyncThunk(
    GET_PETTY_CASH_SEARCH_LIST,
    async (payload, { rejectWithValue, getState }) => {
        const { pettyCashMainReducers } = getState();
        console.log(pettyCashMainReducers, "dta");
        const { pettyCashList } = pettyCashMainReducers

        try {
            if (payload.trim() !== "") {
                const searchResults = pettyCashList.filter(item => {
                    return item.pettycashname.toLowerCase().includes(payload.toLowerCase());
                });
                console.log(searchResults, "searchResults")
                return searchResults;
            } else {
                return pettyCashList;
            }
        } catch (error) {
            return rejectWithValue(error?.response?.data?.error?.message);
        }
    },)

export const getPettyCashView = createAsyncThunk(
    GET_PETTY_CASH_VIEW,

    async (payload, { rejectWithValue }) => {
        try {
            // const { data } = await getRequest(APIROUTES.DASHBOARD.GET_DETAILS);
            return payload;
        } catch (error) {
            return rejectWithValue(error?.response.data.error.message);
        }
    },)
// export const patchPettyCashEdit = createAsyncThunk(
//     PATCH_PETTY_CASH_EDIT,
//     async (payload, { rejectWithValue, getState }) => {
//         console.log(payload.valueWithId.id, "payload")
//         const { pettyCashMainReducers } = getState();
//         const { pettyCashList } = pettyCashMainReducers;
//         try {
//             const editDataPettyCash = pettyCashList?.map((item) => {
//                 if (item.id === payload.valueWithId.id) {
//                     console.log(item.id === parseInt(payload.valueWithId.id), "hh")
//                     return {
//                         ...item,
//                         pettycashcode: payload?.pettycashcode,
//                         pettycashname: payload?.pettycashname,
//                         pettycashsize: payload?.pettycashsize,
//                         avilabelcash: payload?.avilabelcash,
//                         minicashbox: payload?.minicashbox,
//                         transactionlimit: payload?.transactionlimit
//                     };
//                 }
//                 return item;
//             });
//             console.log(editDataPettyCash, "editDataPettyCash")
//             return editDataPettyCash;
//         } catch (error) {
//             return rejectWithValue(error?.response?.data?.error?.message || "An error occurred");
//         }
//     },)
export const patchPettyCashEdit = createAsyncThunk(
    PATCH_PETTY_CASH_EDIT,
    async (payload, { rejectWithValue, getState }) => {
      console.log(payload.valueWithId, "payload");
      const { pettyCashMainReducers } = getState();
      const { pettyCashList } = pettyCashMainReducers;
      try {
        const updatedPettyCashList = pettyCashList.map((item) => {
          if (item.id === payload.valueWithId.id) {
            return {
              ...item,
              pettycashcode: payload.valueWithId.pettycashcode,
              pettycashname: payload.valueWithId.pettycashname,
              pettycashsize: payload.valueWithId.pettycashsize,
              avilabelcash: payload.valueWithId.avilabelcash,
              minicashbox: payload.valueWithId.minicashbox,
              transactionlimit: payload.valueWithId.transactionlimit,
            };
          }
          console.log(payload.valueWithId.transactionlimit,item,"jj")
          return item;
        });
  
        // Instead of dispatching an action here, return the updated list
        return updatedPettyCashList;
      } catch (error) {
        return rejectWithValue(
          error?.response?.data?.error?.message || "An error occurred"
        );
      }
    }
  );