import Footer from '@/components/footer'
import Header from '@/components/header'

export default function Containter({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  )
}
