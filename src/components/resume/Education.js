import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master of Computer Applications"
            subTitle="APJ Abdul Kalam Technological University (2018 - 2020)"
            des="I completed my Master of Computer Applications (MCA) with a CGPA of 8.39, providing me with a strong foundation in programming."
          />
          <ResumeCard
            title="Bachelor of Computer Science"
            subTitle="Mahatma Gandhi University (2015 - 2018)"
            des="
              I completed my Bachelor of Computer Science (B.Sc CS), which gave me a solid foundation in programming, software development, and IT fundamentals."
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="Government of Kerala (2013 - 2015)"
            des="
              I completed my Higher Secondary Education with a focus on science, which helped build my analytical and problem-solving skills before transitioning into the field of computer applications."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Programmer"
            subTitle="University of Kerala - (Aug 2022 - Sep 2024)"
            des="Designed and implemented data-driven dashboards to provide real-time insights, improving system
            performance and user interaction."
          />
          <ResumeCard
            title="FOSS Innovation Fellow"
            subTitle="ICFOSS - (Jan 2022 - Aug 2022)"
            des="Led the design and development of custom web applications. Gained experience in developing UI components and managing application state with React Native"
          />
          <ResumeCard
            title="Software Developer"
            subTitle="NIC - (Sept 2021 - Jan 2022)"
            des="Contributed to internal development projects aimed at improving operational workflows through web-based applications."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education