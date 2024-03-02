import React from 'react'

const About = () => {
  return (
   
      <div className="w-full h-screen rounded-md bg-gradient-to-t from-[#818cf8] to-[#d8b4fe] text-white " > 
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-indigo-500 ">
            Food Mania
          </p>
        </div>
        <p className="text-xl mt-2">
        Greetings, I'm Durgesh, an aspiring full-stack developer driven by a passion for crafting exceptional digital experiences. With a keen eye for detail and a deep understanding of web technologies, I specialize in seamlessly blending captivating user interfaces with robust backend solutions.
        </p>
        <br />
        <p className="text-xl pb-20">
        When I'm not immersed in the world of development, you'll often find me exploring new avenues such as DevOps and 3D rendering, eager to delve deeper into their possibilities and streamline development processes. During my downtime, I channel my creativity into editing videos and photos, transforming moments into captivating visual stories. And yes, I must admit, I'm a big fan of cats! 😸
        </p>
      </div>
    </div>
  )
}

export default About
