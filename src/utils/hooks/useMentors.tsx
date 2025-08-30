import { useQuery } from "@tanstack/react-query";
import { fetchMentors } from "../../api/coursesApi.js";

export const useMentors=()=>{
    return useQuery({
        queryKey:["mentors"],
        queryFn: fetchMentors,
    })
}