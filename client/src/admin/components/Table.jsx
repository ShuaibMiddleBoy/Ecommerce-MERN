import React from 'react'
import {useTable} from "react-table"

const Table = ({columns, data}) => {
    console.log(columns);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({columns, data})

  return (
    <table {...getTableProps()} className='mt-5 m-auto min-w-[90%] border-separate border border-slate-200'>
        <thead className=''>
            {headerGroups.map((headerGroup)=>(
                <tr {...headerGroup.getHeaderGroupProps()}>
{headerGroup.headers.map((column)=>(
    <th className='border' {...column.getHeaderProps()}>
        {column.render("Header")}
    </th>
))}
                </tr>
            ))}
        </thead>

        <tbody {...getTableBodyProps()}>
{
    rows.map((row,)=> {
        prepareRow(row);
        return (
            <tr {...row.getRowProps()}>
                {
                    row.cells.map((cell)=>(
                        <td className='border' {...cell.getCellProps()}>
                            {cell.render("Cell")}
                        </td>
                    ))
                }
            </tr>
        )
    })
}
        </tbody>
    </table>
  )
}

export default Table