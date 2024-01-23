import { createSlice } from "@reduxjs/toolkit";
import { getClientTableMiddleware, getClientTableSearchListMiddleware } from "./clientsMiddleware";


const initialState = {
    loading: false,
    error: "",
    clientListTable: [
        {
            id: "1",
            Name: "Sophie Clark",
            Category: "Individual",
            Date: "2024-01-26",
            Quotes: "01",
            LeadID: "123456",
            type: "motor",
            // Svg: <SvgMotorTable />,
        },
        {
            id: "2",
            Name: "John Smith",
            Category: "Individual",
            Date: "2024-02-10",
            Quotes: "02",
            LeadID: "126",
            type: "travel"
            // Svg: <SvgTravlesTable />,
        },
        {
            id: "3",
            Name: "Emma Davis",
            Category: "Individual",
            Date: "2024-03-15",
            Quotes: "02",
            LeadID: "1456",
            type: "home"
            // Svg: <SvgHomeTable />,
        },
        {
            id: "4",
            Name: "Michael Johnson",
            Category: "Individual",
            Date: "2024-04-20",
            Quotes: "03",
            LeadID: "1236",
            type: 'travel'
            // Svg: <SvgTravlesTable />,
        },
        {
            id: "5",
            Name: "Olivia Turner",
            Category: "Individual",
            Date: "2024-05-25",
            Quotes: "04",
            LeadID: "1456",
            type: 'motor'
            // Svg: <SvgMotorTable />,
        },
        {
            id: "6",
            Name: "David Rodriguez",
            Category: "Company",
            Date: "2024-06-30",
            Quotes: "05",
            LeadID: "123116",
            type: 'home'
            // Svg: <SvgHomeTable />,
        },
        {
            id: "7",
            Name: "Ava Williams",
            Category: "Company",
            Date: "2024-07-05",
            Quotes: "06",
            LeadID: "123411",
            type: 'travel'
            // Svg: <SvgTravlesTable />,
        },
        {
            id: "8",
            Name: "Daniel Brown",
            Category: "Company",
            Date: "2024-08-10",
            Quotes: "01",
            LeadID: "1234000",
            type: 'travel'

            // Svg: <SvgMotorTable />,
        },
        {
            id: "9",
            Name: "Sophia Carter",
            Category: "Individual",
            Date: "2024-09-15",
            Quotes: "02",
            LeadID: "1234555",
            type: 'home'

            // Svg: <SvgHomeTable />,
        },
        {
            id: "10",
            Name: "Ryan Walker",
            Category: "Company",
            Date: "2024-10-20",
            Quotes: "03",
            LeadID: "1234226",
            type: 'travel'

            // Svg: <SvgTravlesTable />,
        },
        {
            id: "11",
            Name: "Ella Adams",
            Category: "Company",
            Date: "2024-11-25",
            Quotes: "04",
            LeadID: "1234000",
            type: 'motor'

            // Svg: <SvgMotorTable />,
        },
    ],
    leadtabledata: [],
    LeadEditdata: {},
    ClientTableSearchList:[]
};
const clientReducer = createSlice({
    name: "clientReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        //postCreateleadMiddleware

        builder.addCase(getClientTableMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            getClientTableMiddleware.fulfilled,
            (state, action) => {
                state.loading = false;
                state.clientListTable = action.payload

            }
        );
        builder.addCase(
            getClientTableMiddleware.rejected,
            (state, action) => {
                state.loading = false;
                state.error = typeof action.payload === "string" ? action.payload : "";
            }
        );

        builder.addCase(getClientTableSearchListMiddleware.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            getClientTableSearchListMiddleware.fulfilled,
            (state, action) => {
                state.loading = false;
                state.ClientTableSearchList = action.payload

            }
        );
        builder.addCase(
            getClientTableSearchListMiddleware.rejected,
            (state, action) => {
                state.loading = false;
                state.ClientTableSearchList = {};
                state.error = typeof action.payload === "string" ? action.payload : "";
            }
        );
    }


});

export default clientReducer.reducer