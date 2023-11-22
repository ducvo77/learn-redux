interface City {
  code: string
  name: string
}

interface PaginationParams {
  _limit?: number
  _page?: number
  _totalRows?: number
}

interface ListtParams {
  _page?: number
  _limit?: number
  _sort?: string
  _order?: "asc" | "desc"

  [key: string]: any
}

interface ListResponse<T> {
  data: T[]
  pagination: PaginationParams
}

interface User {
  id: number | string
  name: string
}

interface Student {
  id?: string
  name: string
  age: number
  mark: number
  gender: "male" | "female"
  city: string
}

interface DashboardStatistics {
  maleCount: number
  femaleCount: number
  highMarkCount: number
  lowMarkCount: number
}

interface RankingByCity {
  cityId: string
  rankingList: Student[]
}

interface DashboardState {
  loading: boolean
  statistics: DashboardStatistics
  hightestStudentList: Student[]
  lowestStudentList: Student[]
  rankingByCityList: RankingByCity[]
}

interface LoginPayload {
  username: string
  password: string
}

interface AuthState {
  isLoggedIn: boolean
  logging: boolean
  currentUser?: User
}
