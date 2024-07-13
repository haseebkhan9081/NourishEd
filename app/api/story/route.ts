import Programs from '@/app/(home)/programs/page';
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
const stories = [
    {
      id: 1,
      img: "/2.jpg",
      title: "Meet Rani",
      story: "Before I started receiving meals at school, I used to feel tired and hungry all the time. Now, I can concentrate in class and my grades have improved. - Rani, Student",
      longStory: "Before I started receiving meals at school, I used to feel tired and hungry all the time. I would often find it hard to concentrate in class, and my grades suffered because of it. Since the school started providing meals, I feel much better. I can concentrate more in class and my grades have improved significantly. I am very grateful for this support. - Rani, Student"
    },
    {
      id: 2,
      img: "/2.jpg",
      title: "Mr. Kumar's Experience",
      story: "The mid-day meals provided by NourishED have been a blessing for our school. Attendance rates have gone up, and the children are more active and engaged. - Mr. Kumar, Teacher",
      longStory: "The mid-day meals provided by NourishED have been a blessing for our school. Before the program started, we had issues with student attendance and engagement. Many children would come to school without having had a proper meal, making it hard for them to focus and participate in class. Since the introduction of the meals, we've seen a remarkable improvement. Attendance rates have gone up, and the children are more active and engaged in their learning. It's made a significant difference in our school community. - Mr. Kumar, Teacher"
    },
    {
      id: 3,
      img: "/2.jpg",
      title: "Priya's Relief",
      story: "As a parent, I am relieved knowing that my child is getting a nutritious meal at school. It has made a significant difference in their health and happiness. - Priya, Parent",
      longStory: "As a parent, I am relieved knowing that my child is getting a nutritious meal at school. Before this program, I was always worried about whether my child was eating enough during the day. Since the school started providing meals, I've noticed a significant difference in my child's health and happiness. They come home more energetic and excited about what they've learned in school. This program has truly been a blessing for our family. - Priya, Parent"
    },
    {
      id: 4,
      img: "/2.jpg",
      title: "Meet Ahmed",
      story: "The lunch program has allowed me to focus more on my studies instead of worrying about being hungry. I feel more energetic throughout the day. - Ahmed, Student",
      longStory: "The lunch program has allowed me to focus more on my studies instead of worrying about being hungry. Before, I used to get distracted in class because I was thinking about food. Now, I feel more energetic throughout the day and can participate in activities with my friends. It's made a big difference in how I experience school. - Ahmed, Student"
    },
    {
      id: 5,
      img: "/2.jpg",
      title: "Mrs. Sharma's Joy",
      story: "Seeing my students well-fed and happy has been one of the most rewarding experiences. Their enthusiasm for learning has noticeably increased. - Mrs. Sharma, Teacher",
      longStory: "Seeing my students well-fed and happy has been one of the most rewarding experiences of my teaching career. Before the meal program, many of my students would struggle to stay focused and engaged. Now, there's a noticeable increase in their enthusiasm for learning. They come to class with smiles on their faces and are more eager to participate. It's amazing to see how proper nutrition can impact their academic performance and overall well-being. - Mrs. Sharma, Teacher"
    },
    {
      id: 6,
      img: "/2.jpg",
      title: "Lakshmi's Gratitude",
      story: "As a single parent, it's reassuring to know that my child is receiving a healthy meal at school. This program has been a great support for our family. - Lakshmi, Parent",
      longStory: "As a single parent, it's reassuring to know that my child is receiving a healthy meal at school. Before the meal program, it was challenging to ensure my child had a nutritious lunch every day due to financial constraints. This program has been a great support for our family, providing one less thing to worry about. I've seen positive changes in my child's energy levels and mood, which has made a huge difference in our daily lives. - Lakshmi, Parent"
    }
  ];
  
export  async function GET(
  req:Request
) {
  try {
       return NextResponse.json(stories)
  } catch (err) {
return new NextResponse("internal server error",{status:500})
  }
}




export async function POST(req:Request) {
try{

const {id}=await req.json()

const result=stories.find((storie)=>storie.id===Number(id))

return NextResponse.json(result);

}catch(err){

  console.log("err at api/progarms/post",err)
  return new NextResponse("internal server err",{status:500})
}


}