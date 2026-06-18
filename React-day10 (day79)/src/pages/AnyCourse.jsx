import React from 'react'
import { useParams } from 'react-router-dom';

const AnyCourse = () => {
    const params = useParams()
    console.log(params)
  return (
    <h1 className="text-3xl underline font-semibold absolute top-1/2 left-1/2 -translate-1/2">
      {params.CourseID} Course page..
    </h1>
  )
}

export default AnyCourse
