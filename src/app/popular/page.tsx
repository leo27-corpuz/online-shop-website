import React from "react"
import { headers } from 'next/headers'
const Popular: React.FC = () => {
  const nonce = headers().get('x-nonce') || '';
  console.log(`test ${nonce}`)
    return(
        <>
          <section className="w-full container mx-auto px-4">Popular</section>
        </>
    ) 
}
export default Popular