import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

const initialState: DashboardState = {
  loading: false,
  statistics: {
    maleCount: 0,
    femaleCount: 0,
    highMarkCount: 0,
    lowMarkCount: 0,
  },
  hightestStudentList: [],
  lowestStudentList: [],
  rankingByCityList: [],
}

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    fetchData(state) {
      state.loading = true
    },

    fetchDataSuccess(state) {
      state.loading = false
    },

    fetchDataFailed(state) {
      state.loading = false
    },

    setStatistics(state, action: PayloadAction<DashboardStatistics>) {
      state.statistics = action.payload
    },

    setHightestStudentList(state, action: PayloadAction<Student[]>) {
      state.hightestStudentList = action.payload
    },

    setLowestStudentList(state, action: PayloadAction<Student[]>) {
      state.lowestStudentList = action.payload
    },

    setRankingByCityList(state, action: PayloadAction<RankingByCity[]>) {
      state.rankingByCityList = action.payload
    },
  },
})

// Actions
export const dashboardActions = dashboardSlice.actions

// Selectors

export const dashboardLoading = (state: RootState) => state.dashboard.loading
export const dashboardStatistics = (state: RootState) =>
  state.dashboard.statistics
export const dashboardHightestStudentList = (state: RootState) =>
  state.dashboard.hightestStudentList
export const dashboardLowestStudentList = (state: RootState) =>
  state.dashboard.lowestStudentList
export const dashboardRankingByCityList = (state: RootState) =>
  state.dashboard.rankingByCityList

// Reducers
const dashboardReducer = dashboardSlice.reducer
export default dashboardReducer
