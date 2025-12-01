import { Provider } from "react-redux"
import { Outlet } from "react-router-dom"
import appStore from "../utils/appStore"


const Body = () => {

    return (
        <div>
            <Provider store={appStore}>
                <Outlet />
            </Provider>


        </div>
    )
}
export default Body