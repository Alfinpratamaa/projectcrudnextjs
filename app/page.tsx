"use client"
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Ini adalah Project <a href="https://nextjs.org/blog/next-13"> <span className='font-bold text-slate-800 hover:text-slate-300'>Next.js</span> </a>crud sederhana memakai Tools dari <a href="https://daisyui.com/"> <span className='font-bold text-slate-800 hover:text-slate-300'>Daisyui</span> </a> untuk fe dan <a href="https://github.com/typicode/json-server/"> <span className='font-bold text-slate-800 hover:text-slate-300'>json-server</span> </a> dalam be untuk penggunakan fake API</p>
      <button type='button' onClick={() => router.push("/product")} className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  );
}
