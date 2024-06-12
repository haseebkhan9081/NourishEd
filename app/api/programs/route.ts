import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
 
export  async function GET(
  req:Request
) {
  try {
    const programs = [
      {
        id: 1,
        title: "Ibrahim Goth Library Food Support",
        count: 120,
        description: "Children supported by the Ibrahim Goth Library food program.",
        longDescription: "The Ibrahim Goth Library Food Support program aims to provide nutritional assistance to children in need within the community served by the library. Through this initiative, we ensure that 120 children receive essential meals regularly, contributing to their overall health and well-being. Additionally, we strive to promote a culture of learning and literacy by combining food support with educational activities at the library.",
        image: "/ibrahim-goth-library-food-support.png"
      },
      {
        id: 3,
        title: "Target Schools",
        count: 50,
        description: "Target schools and learning centers identified for future inclusion.",
        longDescription: "The Target Schools program identifies specific schools and learning centers for future inclusion in our food support and educational initiatives. By targeting these institutions, we aim to reach a larger number of children and families in need of assistance. Through careful selection and planning, we ensure that our resources are allocated efficiently and that our programs have a meaningful impact on the communities we serve.",
        image: "/target-schools.png"
      },
      {
        id: 4,
        title: "Nutrition Education",
        count: 200,
        description: "Nutrition education programs for parents and teachers.",
        longDescription: "Our Nutrition Education program provides valuable resources and workshops to parents and teachers on topics related to nutrition and healthy living. By empowering caregivers and educators with knowledge and skills, we aim to promote positive health behaviors within families and schools. Through interactive sessions and practical tips, we support individuals in making informed choices about diet and lifestyle.",
        image: "/nutrition-education.png"
      },
      {
        id: 5,
        title: "Infrastructure Development",
        count: 10,
        description: "Kitchen build-outs and distribution logistics established.",
        longDescription: "Infrastructure Development is essential for ensuring the efficient operation of our food support programs. This initiative focuses on building and equipping kitchens, as well as establishing distribution logistics, to facilitate the preparation and delivery of meals to beneficiaries. By investing in infrastructure, we improve the quality and scalability of our services, ultimately reaching more people in need.",
        image: "/infrastructure-development.png"
      },
      
      {
        id: 7,
        title: "Monitoring and Evaluation",
        count: 8,
        description: "Mechanisms established to track progress and identify improvements.",
        longDescription: "Monitoring and Evaluation are integral components of our programs, enabling us to assess our impact and make data-driven decisions. This initiative involves establishing mechanisms to track progress, collect feedback, and measure outcomes across all our activities. Through rigorous monitoring and evaluation, we identify areas for improvement and ensure accountability to our stakeholders, ultimately enhancing the effectiveness and efficiency of our interventions.",
        image: "/monitoring-and-evaluation.jpg"
      },
      {
        id: 8,
        title: "Income Generation Support",
        count: 150,
        description: "Parents supported through vocational training programs.",
        longDescription: "Our Income Generation Support program aims to empower parents and caregivers through vocational training programs. By equipping individuals with marketable skills and entrepreneurship training, we enable them to generate sustainable income to support their families. Through partnerships with local businesses and training providers, we create opportunities for economic empowerment and poverty alleviation within the communities we serve.",
        image: "/income-generation-support.png"
      }
    ];
       return NextResponse.json(programs)
  } catch (err) {
return new NextResponse("internal server error",{status:500})
  }
}

