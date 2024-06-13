import React, { useState } from 'react'

import { ChevronDown, ChevronRight } from 'lucide-react'
import CollapsibleComponent from './Collapsible'
 const data=[
    {
      "question": "How can I volunteer with your organization?",
      "answer": "To volunteer with us, please fill out our volunteer form on our Get Involved page. We'll get in touch with you shortly after receiving your submission."
    },
    {
      "question": "What kind of volunteer opportunities are available?",
      "answer": "We offer a variety of volunteer roles ranging from event support, fundraising, administrative tasks, to specialized roles depending on our current projects and needs."
    },
    {
      "question": "How do I become a partner with your organization?",
      "answer": "To become a partner, please complete our partner form located on our Get Involved page. We'll review your application and get back to you to discuss potential collaboration opportunities."
    },
    {
      "question": "What are the benefits of partnering with your organization?",
      "answer": "Partnering with us allows you to contribute directly to our mission, gain visibility among our supporters, and collaborate on projects that make a significant impact in our community."
    },
    {
      "question": "Can my company/organization collaborate with yours on specific projects?",
      "answer": "Absolutely! We welcome collaborations with companies and organizations that align with our mission. Please fill out our partner form with details of your proposal."
    }
  ]
   
function Faqs() {
   
  return (
<div
className='flex

flex-col
w-full

justify-center
items-center'>
    <div
    className='
    mt-8
    lg:w-1/2
    bg-slate-50
    p-6
    grid
    space-y-2
    items-center
    justify-center
    grid-cols-1
    rounded-md
'>

        <h1
        className='text-xl'>Frequently Asked Questions</h1>
{data?.map((qa,index)=>(
     <CollapsibleComponent
     q={qa.question}
     a={qa.answer}
     key={index}
     />
))}

    
</div>
</div>)
}

export default Faqs