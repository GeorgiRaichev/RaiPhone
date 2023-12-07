import { useContext } from "react"
import { useNavigate, Navigate } from "react-router-dom";
import AuthContext from "../../contexts/authContexts"

export default function AuthGuard(props) {
    const { isAuthenticated } = useContext(AuthContext);
    if (!isAuthenticated) {

        return <Navigate to="/login" />
    }
    return (
        <>
            {props.children}
        </>
    )
}