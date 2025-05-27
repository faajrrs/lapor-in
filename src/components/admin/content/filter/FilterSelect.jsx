export default function FilterSelect({children,value,onChange}) {
    return(
        <select className="filter-select" aria-label="Filter by status" value={value} onChange={onChange}>
            {children}
        </select>
    )
}