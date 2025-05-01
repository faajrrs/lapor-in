export default function FilterSelect({children}) {
    return(
        <select className="filter-select" aria-label="Filter by status">
            {children}
        </select>
    )
}