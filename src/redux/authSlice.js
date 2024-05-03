import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {},
  token: null,
  error: null,
};

// Async thunk pour la connexion de l'utilisateur
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Could not log in");
      }

      // Dispatch pour récupérer le profil utilisateur avec le token obtenu
      dispatch(fetchUserProfile({ token: data.body.token }));
      return data;
    } catch (error) {
      console.error("Login failed:", error);
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk pour récupérer le profil de l'utilisateur
export const fetchUserProfile = createAsyncThunk(
  "auth/fetchUserProfile",
  async ({ token }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const profileData = await response.json();
      if (!response.ok) {
        throw new Error(profileData.message || "Could not fetch user profile");
      }
      return profileData.body;
    } catch (error) {
      console.error("Fetch profile failed:", error);
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.isAuthenticated = false;
      state.user = {};
      state.token = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload.body.token;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user = {};
        state.token = null;
        state.error = action.payload || "Failed to login";
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.error = action.payload || "Failed to fetch profile";
      });
  },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
