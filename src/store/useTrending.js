import create from "zustand";
import axios from "axios";

const useTrending = create(set => ({
  trending: [],
  fetch: async (url) => {
    const response = await axios.get(`https://kitsu.io/api/edge` + url)
    set({ 
      trending: await response.data
    })
  }
}))

export default useTrending;