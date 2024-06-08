import axios from "axios"
import { CardDetails } from "../types";

const ENDPOINT = "https://jsonplaceholder.typicode.com"

const fetchMyHotels = async (): Promise<CardDetails[]> => {
  const response = await fetch(`${ENDPOINT}/photos`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching hotels");
  }

  return response.json();
};


const FetchProducts = async (): Promise<CardDetails[]> => {
  const response = await axios.get(`${ENDPOINT}/photos`)
  if (!response) {
    throw new Error("Failed To Fetch Products")
  }
  return response.data
}



export const ApiClient = { fetchMyHotels, FetchProducts }


