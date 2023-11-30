function BasicTable({headCells, tableData, rowBorder = true}) {
  return (
    <table className="w-full">
      <thead className="text-left">
        <tr className="border-b">
          {headCells.map(({key, name}) => (
            <th className="py-2" key={key}>
              {name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr
            key={`table-row-${rowIndex}`}
            className={`${rowBorder ? "border-b" : ""}`}
          >
            {headCells.map((col, colIndex) => (
              <td
                className={`py-2`}
                align="left"
                key={`-row_${rowIndex}-col_${colIndex}`}
              >
                {row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BasicTable;
