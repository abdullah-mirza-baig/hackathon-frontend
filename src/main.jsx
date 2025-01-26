import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import WeddingLoan from './pages/WeddingLoan.jsx'
import HomeLoan from './pages/HomeLoan.jsx'
import BusinessLoan from './pages/BusinessLoan.jsx'
import EducationLoan from './pages/EducationLoan.jsx'
import LoanDetails from './pages/LoanDetails.jsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'wedding-loan',
        element: <WeddingLoan />
      },
      {
        path: 'home-loan',
        element: <HomeLoan />
      },
      {
        path: 'business-loan',
        element: <BusinessLoan />
      },
      {
        path: 'education-loan',
        element: <EducationLoan />
      },
      {
        path: 'loan-details',
        element: <LoanDetails />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
)
