export const COLUMNS = [
    {
        Header:'Collection Name',
        Footer: 'Collection Name',
        accessor: "collection_name",
        
    },
    {
        Header: 'Most Popular NFT',
        Footer: 'Most Popular NFT',
        accessor: "most_popular",
        Cell: tableProps => (
            <img 
                src={tableProps.row.original.most_popular}
                width={60}
                height={60} 
                alt="Most Popular"
            />
        )
    },
    {
        Header:'Description',
        Footer: 'Description',
        accessor: "collection_description",
        
    },
    {
        Header:'Rating',
        Footer: 'Rating',
        accessor: "collection_rating",
       
    }
]