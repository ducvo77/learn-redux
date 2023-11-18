interface City {
  code: string
  name: string
}

interface PaginationParams {
  _limit: number
  _page: number
  _total: number
}

interface ListResponse<T> {
  data: T[]
  pagination: PaginationParams
}

interface User {
  id: number | string
  name: string
}
