import React from 'react'
import techimg1 from '../../assets/images/logo-corenlp.png'
import techimg2 from '../../assets/images/logo-gpt-4.png'
import techimg3 from '../../assets/images/logo-langchain.png'
import techimg4 from '../../assets/images/logo-pytorch.svg'
import techimg5 from '../../assets/images/logo-tensorfloww.png'
import techimg6 from '../../assets/images/logo-nltk.png'

const Technology = () => {

     const technologies = [
     
        { name: "GPT-4", image: techimg2 },
        { name: "LangChain", image: techimg3 },
        { name: "TensorFlow", image: techimg5 },
        { name: "NLTK", image: techimg6 },
        { name: "CoreNLP", image: techimg1 },
        { name: "PyTorch", image: techimg4 },
       
        
      ];
    return (
        <>
            <section className="container mx-auto  sm:px-20 md:py-4 text-center my-4">
                {/* <h1 className=" text-4xl md:text-6xl font-semibold mb-8 px-6">Technologies We Use</h1> */}
                <div className=" grid grid-cols-2 sm:grid-cols-6  place-items-center  ">
                    {technologies.map((tech, index) => (
                        <img key={index} src={tech.image} alt={tech.name} className=" w-20 sm:w-26 md:w-20 lg:w-26 h-12 object-contain" />
                    ))}
                </div>
            </section>


        </>
    )
}

export default Technology