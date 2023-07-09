import axios from "axios";
import { create } from "zustand";

interface SystemState {
  docsUrl: string;
  fetchData: () => Promise<void>;
  setDocsUrl: (url: string) => Promise<void>;
}

type SystemAPI = {
  data: {
    docs_url: string;
  };
};

const apiUrl = "http://127.0.0.1:5000/api";

const useSystemStore = create<SystemState>((set) => ({
  docsUrl: "",
  fetchData: async () => {
    try {
      const response: SystemAPI = await axios.get(`${apiUrl}/system`);
      set({ docsUrl: response.data.docs_url });
    } catch (error) {
      console.error("Failed to fetch URL:", error);
    }
  },
  setDocsUrl: async (newUrl: string) => {
    try {
      await axios.put(`${apiUrl}/system`, { docs_url: newUrl });
      set({ docsUrl: newUrl });
    } catch (error) {
      console.error("Failed to update URL:", error);
    }
  },
}));

export default useSystemStore;
