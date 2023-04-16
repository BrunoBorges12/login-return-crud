/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Logo from '@/components/Logo'
import Input from '@/components/Input'
import Form from '@/components/Form'



export default function Home() {
  return (
    <main className=' flex w-full h-screen  lg:overflow-hidden font-titilliumWeb ' >
      <section className='container   px-8 relative w-full  lg:w-1/2   lg:px-28'  >
        <div className=' lg:py-10 py-3 w-full h-full'>
          <Logo/>
          <Form/>
          
        </div>
      </section>
      <section className=' relative lg:block  hidden w-1/2'>
        <div className=' h-screen w-full  bg-violet-600 absolute   mix-blend-screen z-30  '></div>
        <img src="/Rectangle 1.png" alt="Imagem" className=" object-cover inset-0  h-screen w-full       mix-blend-screen  "/>

      </section>


    </main>
  )
}
