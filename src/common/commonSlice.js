import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
  name: "common",
  initialState: {
    genresList: [],
    loading: true,
    isNormalTheme: localStorage.getItem("moviesBrowsertheme")
      ? JSON.parse(localStorage.getItem("moviesBrowsertheme"))
      : true,
  },
  reducers: {
    fetchCommon: (state) => {
      state.loading = true;
    },
    fetchCommonSuccess: (state, { payload: data }) => {
      state.genresList = data.genres.map((genre) => ({
        ...genre,
        enabled: false,
      }));
      state.loading = false;
    },
    fetchCommonError: (state) => {
      state.loading = false;
    },
    setTheme: (state, { payload }) => {
      state.isNormalTheme = payload;
      localStorage.setItem("theme", JSON.stringify(payload));
    },
    switchGenreEnabled: ({ genresList }, { payload: id }) => {
      const index = genresList.findIndex((genre) => genre.id === id);
      genresList[index].enabled = !genresList[index].enabled;
    },
  },
});

export const {
  fetchCommon,
  fetchCommonSuccess,
  fetchCommonError,
  setTheme,
  switchGenreEnabled,
} = commonSlice.actions;

export const selectGenres = (state) => state.common.genresList;
export const selectLoading = (state) => state.common.loading;
export const selectTheme = (state) => state.common.isNormalTheme;

export default commonSlice.reducer;
