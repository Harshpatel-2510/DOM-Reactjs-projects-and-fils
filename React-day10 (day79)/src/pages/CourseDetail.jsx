import React from 'react'
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
    const params = useParams()
  return (
    <h1 className="text-3xl underline font-semibold absolute top-1/2 left-1/2 -translate-1/2">
      {params.CourseID} Course Detail page..
    </h1>
  )
}

export default CourseDetail