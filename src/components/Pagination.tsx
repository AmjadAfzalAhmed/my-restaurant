import React from 'react'
import Link from 'next/link'

const Pagination: React.FC = () => {
  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      <Link href="#" className="px-4 py-2 border rounded hover:bg-amber-500 hover:text-white transition-colors">
        Previous
      </Link>
      <Link href="#" className="px-4 py-2 border rounded bg-amber-500 text-white">
        1
      </Link>
      <Link href="#" className="px-4 py-2 border rounded hover:bg-amber-500 hover:text-white transition-colors">
        2
      </Link>
      <Link href="#" className="px-4 py-2 border rounded hover:bg-amber-500 hover:text-white transition-colors">
        3
      </Link>
      <span className="px-4 py-2">...</span>
      <Link href="#" className="px-4 py-2 border rounded hover:bg-amber-500 hover:text-white transition-colors">
        Next
      </Link>
    </div>
  )
}

export default Pagination
