import { WrapperApp } from '@/layouts/default'
import { useContext } from 'react'

export const useWrapperApp = () => {
  const context = useContext(WrapperApp)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}
