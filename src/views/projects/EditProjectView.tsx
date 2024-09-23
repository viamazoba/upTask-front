import { Navigate, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getProjectById } from "@/api/ProjectAPI"


export default function EditProjectView() {

    const params = useParams()
    const projectId = params.projectId!

    const { data, isError, isLoading } = useQuery({
        queryKey: ['editProject', projectId],
        queryFn: () => getProjectById(projectId),
        retry: false
    })

    console.log(isLoading)
    console.log(data)

    if (isLoading) return 'Cargando ...'
    if (isError) return <Navigate to='/404' />
    if (data) return <EditProjectView data={data} />

}