import React, { useMemo } from 'react'
import { useTable, usePagination } from 'react-table'
import NFT_DATA from './NFT_DATA.json'
import { COLUMNS } from './column'
import ReviewRender from './ReviewRender'

function CollectionTable() {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => NFT_DATA, [])

    const {
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        page, 
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        prepareRow
    } = useTable({
        columns,
        data,
        initialState: { pageSize: 5}
    }, usePagination)


    const { pageIndex, pageSize } = state

    return (
        <div className='table-parent'>
            <div className='table-uncle'>
                <h1>Collection Ratings</h1>
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map( column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))} 
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map(row => {
                            prepareRow(row)
                            return(
                                <tr {...row.getRowProps()}>
                                    {row.cells.map( cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </table>
                    <div className='table-btn-div'>
                        <span className='table-span'>
                            Page{' '}
                            <strong>
                                {pageIndex + 1} of {pageOptions.length}
                            </strong>{' '}
                        </span>
                        <span className='table-span'>
                            | Go to page: {' '}
                            <input type='number' 
                            defaultValue={pageIndex + 1} 
                            onChange={(e) => {const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(pageNumber)
                            }}
                            style={{width: '50px'}}
                            />
                        </span>
                        <select value ={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
                            {[5, 10, 15].map((pageSize) => (
                                <option key={pageSize} value={pageSize}>
                                    Show {pageSize}
                                </option>
                            ))}
                        </select>
                        <div className='table-btn-div'>
                            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                                {'<<'}
                            </button>
                        
                            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                                Previous
                            </button>
                            <button onClick={() => nextPage()} disabled={!canNextPage}>
                                Next
                            </button>

                            <button onClick={() => gotoPage(pageCount -1)} disabled={!canNextPage}>
                                {'>>'}
                            </button>
                        </div>
                    </div>
                </div>
                <div className='entire-review-div'>
                <div>
                    <h1>Reviews</h1>
                </div>
                <div className='review-render'>
                    <ReviewRender />
                </div>
            </div>
            
        </div>
    )
}

export default CollectionTable

