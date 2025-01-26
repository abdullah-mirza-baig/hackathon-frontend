import { configureStore } from '@reduxjs/toolkit'
import educationLoanReducer from './educationLoanSlice'

export const store = configureStore({
  reducer: {
    educationLoan: educationLoanReducer
  }
})
