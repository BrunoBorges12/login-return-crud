/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Logo from '@/components/Logo'
import Input from '@/components/Input'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=' flex w-full h-full overflow-  ' >
      <section className='container  px-28 flex-1 ' >
        <div className=' py-10'>
          <Logo/>
          <Input name='test' type='text' placeholder='ok' label='ok'/>
        </div>
      </section>
      <section className=' relative  flex-auto '>
        <div className=' h-screen w-full  bg-violet-600 absolute   mix-blend-screen z-30  '></div>
        <img src="/Rectangle 1.png" alt="Imagem" className=" object-cover inset-0  h-screen w-full     "/>

      </section>
    </main>
  )
}
