import { computeDateAndTime } from "@/util/weightUtils";

import axios from "axios";

const BASEURL = "http://localhost:8081/api/v1/";

export async function logWeight(weight: number, note: string) {
  const { date, time } = computeDateAndTime();

  const data = {
    weight,
    note,
    date,
    time,
  };

  try {
    const response = await axios.post(`${BASEURL}logWeight`, data);
    console.log(response.data);
  } catch (error) {
    console.error(`Error logging weight: ${error}`);
  }
}

export async function fetchWeights() {
  try {
    const response = await axios.get(`${BASEURL}viewWeights`);
    return response.data.reverse();
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
  }
}

export async function updateEntry(
  id: number,
  weight: number,
  note: String,
  time: String,
  date: String,
) {
  const data = {
    weight,
    note,
    date,
    time,
  };

  try {
    const response = await axios.put(`${BASEURL}updateWeight/${id}`, data);
    console.log(response.data);
  } catch (error) {
    console.error(`Problem updating a weight: ${error}`);
  }
}
