import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  dashboardActions,
  dashboardHightestStudentList,
  dashboardLoading,
  dashboardLowestStudentList,
  dashboardRankingByCityList,
  dashboardStatistics,
} from "./dashboardSlice"

export default function DashboardPage() {
  const dispatch = useAppDispatch()

  const loading = useAppSelector(dashboardLoading)
  const statistics = useAppSelector(dashboardStatistics)
  const highestStudentList = useAppSelector(dashboardHightestStudentList)
  const lowestStudentList = useAppSelector(dashboardRankingByCityList)
  const rankingByCityList = useAppSelector(dashboardLowestStudentList)

  useEffect(() => {
    dispatch(dashboardActions.fetchData())
  }, [])

  useEffect(() => {
    console.log("loading:", loading)
    console.log("statistics:", statistics)
    console.log("highestStudentList:", highestStudentList)
    console.log("lowestStudentList:", lowestStudentList)
    console.log("rankingByCityList:", rankingByCityList)
  }, [
    loading,
    statistics,
    highestStudentList,
    lowestStudentList,
    rankingByCityList,
  ])
  return <div>dashboard</div>
}
