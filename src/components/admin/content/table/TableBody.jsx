import TableRow from "./TableRow";

export default function TableBody({ datas, renderRow, headersCount }) {
  if (datas.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan={headersCount + 1} className="no-data">Tidak ada data.</td>
        </tr>
      </tbody>
    );
  }
  return (
    <tbody>
      {datas.map((item, index) => (
        <TableRow
          key={item.id || index}
          item={item}
          index={index}
          renderRow={renderRow}
        />
      ))}
    </tbody>
  );
}
