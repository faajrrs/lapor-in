import '../assets/css/auth.css'
export default function LayoutAuth({children}) {
    return(
        <div className="form">
            <div className="form-content">
                {children}
            </div>
        </div>
    )
}