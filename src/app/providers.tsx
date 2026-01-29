import { Provider } from 'react-redux'
import { store } from './store'

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>
}

//Provider — подключает Redux store к React, чтобы компоненты могли читать состояние и диспатчить экшены.
