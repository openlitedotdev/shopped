import Footer from '@/components/footer'
import Header from '@/components/header'
import { createContext } from 'react'

interface WrapperAppProps {
  theme: 'dark' | 'light'
}

export const WrapperApp = createContext<WrapperAppProps | undefined>(undefined)

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <WrapperApp.Provider value={{ theme: 'light' }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </WrapperApp.Provider>
  )
}
