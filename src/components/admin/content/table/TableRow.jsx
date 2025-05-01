export default function TableRow({ item, index, renderRow }) {
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      {renderRow(item, index)}
    </tr>
  );
}
