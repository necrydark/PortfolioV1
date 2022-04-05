import React from 'react'

function Card({ item }) {

    return (
        <div className='max-w-md flex flex-col bg-purple-600 h-40 mx-auto mb-5' >
            <div className='text-center text-lg p-2'>
                {item.title}
            </div>
            <div className='flex flex-1 flex-col'>
                <div className='flex-1 p-2'>
                    {item.content}
                </div>
                <div className='flex flex-row justify-between p-2 '>
                    {item.date}
                    <div>
                        {item.author}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card