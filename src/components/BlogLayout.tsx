import React from 'react'
import BlogPost from '@/components/BlogPost'
import Pagination from '@/components/Pagination'
import Sidebar from '@/components/Sidebar'


const BlogLayout: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <BlogPost />
          <Pagination />
        </div>
        <div className="lg:w-1/3">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default BlogLayout