import { createSlice } from "@reduxjs/toolkit";
import { getHirarchyListMiddleware, getHirarchyListByIdMiddleware, postAddHirarchyMiddleware, patchHirarchyEditMiddleware, getSearchHirarchyMiddleware } from "./hierarchyMiddleware";
import SvgIconeye from "../../../../../assets/icons/SvgIconeye";
const initialState = {
  loading: false,
  error: "",
  hierarchTableList: [
    {
      id: 1,
      rankCode: "RC1234",
      rankName: "RankName",
      levelNumber: "50",
      modifiedBy: "Johnson",
      modifiedOn: "12/12/23",
      status: "",
      action: ""
    },
    {
      id: 2,
      rankCode: "RC1237",
      rankName: "RankName",
      levelNumber: "60",
      modifiedBy: "Johnson",
      modifiedOn: "2/1/24",
      status: "",
      action: ""
    }, {
      id: 3,
      rankCode: "RC1234",
      rankName: "RankName",
      levelNumber: "50",
      modifiedBy: "Johnson",
      modifiedOn: "12/12/23",
      status: "",
      action: ""
    },
    {
      id: 4,
      rankCode: "RC1234",
      rankName: "RankName",
      levelNumber: "50",
      modifiedBy: "Johnson",
      modifiedOn: "12/12/23",
      status: "",
      action: ""
    },
    {
      id: 5,
      rankCode: "RC1234",
      rankName: "RankName",
      levelNumber: "50",
      modifiedBy: "Johnson",
      modifiedOn: "12/12/23",
      status: "",
      action: ""
    },
    {
      id: 6,
      rankCode: "RC1234",
      rankName: "RankName",
      levelNumber: "50",
      modifiedBy: "Johnson",
      modifiedOn: "12/12/23",
      status: "",
      action: ""
    },
    {
      id: 7,
      rankCode: "RC1234",
      rankName: "RankName",
      levelNumber: "50",
      modifiedBy: "Johnson",
      modifiedOn: "12/12/23",
      status: "",
      action: ""
    },
    {
      id: 8,
      rankCode: "RC1234",
      rankName: "RankName",
      levelNumber: "50",
      modifiedBy: "Johnson",
      modifiedOn: "12/12/23",
      status: "",
      action: ""
    },
    {
      id: 9,
      rankCode: "RC1234",
      rankName: "RankName",
      levelNumber: "50",
      modifiedBy: "Johnson",
      modifiedOn: "12/12/23",
      status: "",
      action: ""
    },
    {
      id: 10,
      rankCode: "RC1234",
      rankName: "RankName",
      levelNumber: "50",
      modifiedBy: "Johnson",
      modifiedOn: "12/12/23",
      status: "",
      action: ""
    },
  ]
  ,
  hierarchSeachList: [],
  hierarchListDetails: {}

};
const receiptsReducer = createSlice({
  name: "designation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHirarchyListMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getHirarchyListMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.hierarchTableList = action.payload;
    });
    builder.addCase(getHirarchyListMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.hierarchTableList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });
    builder.addCase(getHirarchyListByIdMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getHirarchyListByIdMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.hierarchListDetails = action.payload;
    });
    builder.addCase(getHirarchyListByIdMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.hierarchListDetails = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });

    builder.addCase(getSearchHirarchyMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSearchHirarchyMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.hierarchSeachList = action.payload;
    });
    builder.addCase(getSearchHirarchyMiddleware.rejected, (state, action) => {
      state.loading = false;

      state.hierarchSeachList = {};
      state.error = typeof action.payload === "string" ? action.payload : "";
    });



    builder.addCase(postAddHirarchyMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(postAddHirarchyMiddleware.fulfilled, (state, action) => {
      console.log(action.payload, 'find action.payload')
      state.loading = false;
      state.hierarchyTableList = [...state.receiptsTableList, action.payload];
    });
    builder.addCase(postAddHirarchyMiddleware.rejected, (state, action) => {
      state.loading = false;

      //   state.paymentVocherList = state.paymentVocherList;
      state.error = typeof action.payload === "string" ? action.payload : "";
    });


    builder.addCase(patchHirarchyEditMiddleware.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      patchHirarchyEditMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;

        state.hierarchTableList = action.payload;
      }
    );
    builder.addCase(
      patchHirarchyEditMiddleware.rejected,
      (state, action) => {
        state.loading = false;

        state.editList = {};
        state.error = typeof action.payload === "string" ? action.payload : "";
      }
    );

  },
});

export default receiptsReducer.reducer;
