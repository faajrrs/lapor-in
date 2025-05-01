import '../assets/css/auth.css'
import LayoutHome from './LayoutHome'
export default function LayoutAuth({children}) {
    return(
        <LayoutHome>
        <div className="form">
            <div className="form-content">
                {children}
            </div>
        </div>
        </LayoutHome>
    )
}