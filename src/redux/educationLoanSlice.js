import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const submitEducationLoanForm = createAsyncThunk(
  'educationLoan/submit',
  async (formData) => {
    // Here you can add API call if needed
    return formData
  }
)

const educationLoanSlice = createSlice({
  name: 'educationLoan',
  initialState: {
    loanData: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitEducationLoanForm.pending, (state) => {
        state.loading = true
      })
      .addCase(submitEducationLoanForm.fulfilled, (state, action) => {
        state.loading = false
        state.loanData = action.payload
      })
      .addCase(submitEducationLoanForm.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export default educationLoanSlice.reducer
