import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
const partners = [
    {
      id: 1,
      img: "/partner1.png",
      title: "Global Health Organization",
      involvement: "Global Health Organization has been a pivotal partner in providing nutritional guidelines and funding for our mid-day meal program. Their expertise in child nutrition has greatly enhanced the quality and impact of our meals."
    },
    {
      id: 2,
      img: "/partner2.png",
      title: "Education for All",
      involvement: "Education for All has supported our program by supplying educational materials and resources, ensuring that children not only receive nutritious meals but also have access to quality education. Their holistic approach has been invaluable."
    },
    {
      id: 3,
      img: "/partner3.png",
      title: "Community Support Foundation",
      involvement: "Community Support Foundation has played a key role in mobilizing community volunteers and resources. Their grassroots efforts have strengthened community engagement and ownership of the mid-day meal program."
    },
    {
      id: 4,
      img: "/partner4.png",
      title: "Nutrition Initiative",
      involvement: "Nutrition Initiative has contributed significantly through their research and development of balanced meal plans. Their innovative solutions ensure that every meal provided is both nutritious and appealing to children."
    },
    {
      id: 5,
      img: "/partner5.png",
      title: "Tech for Good",
      involvement: "Tech for Good has revolutionized our program's logistics and monitoring through their technological solutions. Their support has enabled efficient meal distribution and real-time tracking of program outcomes."
    },
    {
      id: 6,
      img: "/partner6.png",
      title: "Sustainable Futures",
      involvement: "Sustainable Futures focuses on environmental sustainability in our meal program. They have helped us source eco-friendly packaging and reduce waste, ensuring that our program is both healthy for the children and the planet."
    }
  ];
  
export  async function GET(
  req:Request
) {
  try {
   
       return NextResponse.json(partners)
  } catch (err) {
return new NextResponse("internal server error",{status:500})
  }
}



 