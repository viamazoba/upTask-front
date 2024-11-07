import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/api/AuthAPI";


export const useAuth = () => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: getUser,
        retry: 1,
        refetchOnWindowFocus: false // Para que no se recargue cuando salgan de la tab del navegador a otra y vuelvan
    })

    return { data, isError, isLoading }
}