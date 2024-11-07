import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
    name: 'popup',
    initialState: { isVisible: false },
    reducers: {
      showPopup: (state) => {
        state.isVisible = true;
      },
      hidePopup: (state) => {
        state.isVisible = false;
      }
    }
  });
  
  export const { showPopup, hidePopup } = popupSlice.actions;
  
  export default popupSlice.reducer;