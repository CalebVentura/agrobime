import { useContext } from "react"
import { UserContext } from "../../context"

export const Header = () => {
    const { user } = useContext(UserContext)

    return (
        <>
            <h2>Bienvenido <span className="text-success">{user?.email}</span>!</h2>
            <hr />
        </>
    )
}
