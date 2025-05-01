export default function TableHead({ headers }) {
  return (
    <thead>
      <tr>
        <th>
          <input type="checkbox" aria-label="Select all rows" />
        </th>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
  );
}
