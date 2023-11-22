import { call, put, takeLatest, all } from "redux-saga/effects"
import { dashboardActions } from "./dashboardSlice"

import studentApi from "../../apis/studentApi"
import cityApi from "../../apis/cityApi"

function* fetchStatistics() {
  const responseList: Array<ListResponse<Student>> = yield all([
    call(studentApi.getAll, {
      _page: 1,
      _limit: 1,
      gender: "male",
    }),
    call(studentApi.getAll, {
      _page: 1,
      _limit: 1,
      gender: "female",
    }),
    call(studentApi.getAll, {
      _page: 1,
      _limit: 1,
      mark_gte: 8,
    }),
    call(studentApi.getAll, {
      _page: 1,
      _limit: 1,
      mark_lte: 5,
    }),
  ])

  const statisticList = responseList.map((x) => x.pagination._totalRows)

  const [maleCount = 0, femaleCount = 0, highMarkCount = 0, lowMarkCount = 0] =
    statisticList

  yield put(
    dashboardActions.setStatistics({
      maleCount,
      femaleCount,
      highMarkCount,
      lowMarkCount,
    }),
  )
}
function* fetchHighestStudentList() {
  const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
    _page: 1,
    _limit: 5,
    _sort: "mark",
    _order: "desc",
  })

  yield put(dashboardActions.setHightestStudentList(data))
}
function* fetchLowestStudentList() {
  const { data }: ListResponse<Student> = yield call(studentApi.getAll, {
    _page: 1,
    _limit: 5,
    _sort: "mark",
    _order: "asc",
  })

  yield put(dashboardActions.setLowestStudentList(data))
}
function* fetchRankingByCityList() {
  const { data: cityList }: ListResponse<City> = yield call(cityApi.getAll)

  const callList = cityList.map((x) =>
    call(studentApi.getAll, {
      _page: 1,
      _limit: 5,
      _sort: "mark",
      _order: "desc",
      city: x.code,
    }),
  )

  const responseList: Array<ListResponse<Student>> = yield all(callList)
  const rankingByCityList: Array<RankingByCity> = responseList.map(
    (x, idx) => ({
      cityId: cityList[idx].code,
      rankingList: x.data,
    }),
  )

  //update state
  yield put(dashboardActions.setRankingByCityList(rankingByCityList))
}

function* fetchDashboardData() {
  try {
    yield all([
      call(fetchStatistics),
      call(fetchHighestStudentList),
      call(fetchLowestStudentList),
      call(fetchRankingByCityList),
    ])
    yield put(dashboardActions.fetchDataSuccess())
  } catch (error) {
    console.error(error)
    yield put(dashboardActions.fetchDataFailed())
  }
}

export default function* dashboardSaga() {
  yield takeLatest(dashboardActions.fetchData.type, fetchDashboardData)
}
