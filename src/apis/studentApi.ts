import axiosClient from "./axiosClient"

const studentApi = {
  getAll(params: ListtParams): Promise<ListResponse<Student>> {
    const url = "/students"

    return axiosClient.get(url, { params })
  },
}

export default studentApi
