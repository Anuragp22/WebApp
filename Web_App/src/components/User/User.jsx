import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
    return (
        <div className='bg-grey-700 text-orange-600 p-4 '>User:{userid}</div>
    )
}

export default User