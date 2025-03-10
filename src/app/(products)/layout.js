import { Footer } from '@/components/sections/footer'
import { ProductsNavBar } from '@/components/sections/productsNavbar'
// import { ProductsNavBar } from '@/components/sections/productsNavBar'


export default function layout({ children}) {
  return (
    <>
      <ProductsNavBar/>
      <main className=' min-h-screen'>

      {children}
      </main>
      <Footer/>
    </>
  )
}
