import React from 'react'
import Card from './components/Card';

const App = () => {

    const users = [
  {
    fullName: "Aarav Sharma",
    smellDescription: "Fresh citrus with a light woody touch.",
    userImage: "https://randomuser.me/api/portraits/men/1.jpg",
    coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
    likesCount: 1240,
    postCount: 48,
    viewsCount: 15200,
  },
  {
    fullName: "Priya Patel",
    smellDescription: "Soft floral fragrance with hints of jasmine.",
    userImage: "https://randomuser.me/api/portraits/women/2.jpg",
    coverImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    likesCount: 2180,
    postCount: 65,
    viewsCount: 24800,
  },
  {
    fullName: "Rohan Mehta",
    smellDescription: "Clean ocean breeze with a refreshing feel.",
    userImage: "https://randomuser.me/api/portraits/men/3.jpg",
    coverImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200",
    likesCount: 980,
    postCount: 32,
    viewsCount: 11200,
  },
  {
    fullName: "Neha Verma",
    smellDescription: "Sweet vanilla mixed with soft floral notes.",
    userImage: "https://randomuser.me/api/portraits/women/4.jpg",
    coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
    likesCount: 3560,
    postCount: 91,
    viewsCount: 41200,
  },
  {
    fullName: "Karan Singh",
    smellDescription: "Earthy sandalwood with a subtle spice aroma.",
    userImage: "https://randomuser.me/api/portraits/men/5.jpg",
    coverImage: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200",
    likesCount: 1450,
    postCount: 54,
    viewsCount: 18900,
  },
  {
    fullName: "Ananya Joshi",
    smellDescription: "Fresh lavender and calming herbal scent.",
    userImage: "https://randomuser.me/api/portraits/women/6.jpg",
    coverImage: "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200",
    likesCount: 2710,
    postCount: 73,
    viewsCount: 30100,
  }
];

  return (
    <div className='bg-white text-black h-screen flex flex-wrap gap-6 justify-center m-8'>
        {
        users.map(function(elem, index){
          return <Card key={index} user={elem} />
        })
      }
    </div>
  )
}

export default App