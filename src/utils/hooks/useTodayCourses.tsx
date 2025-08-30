import { useQuery } from "@tanstack/react-query"
import { fetchTodayCourses } from "../../api/coursesApi.js"

export const useTodayCourses=()=>{
    return useQuery({
        queryKey:['todayCourses'],
        queryFn: fetchTodayCourses,
    })
}

// Hook to create a new post
// export function useCreatePost() {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: createPost,
//     onSuccess: () => {
//       // Refetch posts after creating
//       queryClient.invalidateQueries({ queryKey: ["posts"] });
//     },
//   });
// }