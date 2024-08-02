// import React, { useState } from 'react';
const DataSortComponent = ({ data }) => {
    console.log(data);
    // const [sortCriteria, setSortCriteria] = useState('Release');
    // const handleSortChange = (e) => {
    //     setSortCriteria(e.target.value);
    // };
    const sortedData = [...data].sort((a, b) => {
        // if (sortCriteria === 'Release') {
            return a.Release.localeCompare(b.Release);
        // }
        // else if (sortCriteria === 'Name') {
        //     return a.Name - b.Name;
        // } else if (sortCriteria === 'Author') {
        //     return a.Author - b.Author;
        // }
        // return 0;
    });


    console.log(sortedData);
    
    return (
        <>
            {/* <label htmlFor="sort">Sort by: </label>
            <select id="sort" value={sortCriteria} onChange={handleSortChange}>
                <option value="Release">Year</option>
                <option value="Name">Name</option>
                <option value="Author">Author</option>
            </select> */}

                {sortedData.map((item) => (
                    <p>
                        {item.Release} - Name: {item.Name} - Author: {item.Author}
                    </p>
                ))}
        </>
    );
};

export default DataSortComponent;
