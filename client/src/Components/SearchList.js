import React from 'react'

export default function SearchList({ results }) {
    return (
        results && results.length > 0 &&
        results.map((result, id) => {
            return <div key={id} className='text-gray-800 px-2 pt-1'>
                <h1 className='border-b-2 text-xl h-10'>{result.title}</h1>
            </div>
        })
        // <div className='text-gray-800 px-2 pt-1 bg-blue-300'>
        //     <h1 className='border-b-2 text-xl h-10'>SearchList</h1>
        //     <h1 className='border-b-2 text-xl h-10'>SearchList</h1>
        //     <h1 className='border-b-2 text-xl h-10'>SearchList</h1>
        //     <h1 className='border-b-2 text-xl h-10'>SearchList</h1>
        //     <h1 className='border-b-2 text-xl h-10'>SearchList</h1>
        //     <h1 className='border-b-2 text-xl h-10'>SearchList</h1>
        //     <h1 className='border-b-2 text-xl h-10'>SearchList</h1>
        // </div>
    )
}
