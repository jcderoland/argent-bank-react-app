import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.userName = action.payload.userName;
    },
    clearUserProfile: (state) => {
      state.userName = "";
    },
  },
});

// Action asynchrone pour récupérer informations profil utilisateur depuis API
export const fetchUserProfile = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Error fetching user profile");
    }
    const data = await response.json();
    dispatch(setUserProfile(data.body));
  } catch (error) {
    console.error("Error fetching user profile:", error);
  }
};

export const { setUserProfile, clearUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;
