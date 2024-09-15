
import { Outlet } from 'react-router-dom'

export default function AppLayout() {

    return(
        <>
            <div>
                UpTask Api
            </div>

            <Outlet/>
        </>
    )
}