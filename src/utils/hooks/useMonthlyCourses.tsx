import { useQuery } from "@tanstack/react-query"
import { fetchMonthlyCourses } from "../../api/coursesApi.js"

export const useMonthlyCourses=()=>{
    return useQuery({
        queryKey:['monthlyCourses'],
        queryFn: fetchMonthlyCourses
    })
}