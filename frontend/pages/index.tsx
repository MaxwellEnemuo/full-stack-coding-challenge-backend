import { useEffect, useState } from "react";
import axios from "axios";

import { NextPage } from "next";
import Link from "next/link";

import Layout from "../components/layout";
import Airport from "../types/airport";

import styles from "../styles/InputField.module.css";

const Page: NextPage = () => {
  const [value, setValue] = useState("China");
  const [airports, setAirports] = useState<Airport[]>();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3001/api/airports/${value}`)
      .catch((err) => err.response)
      .then((response) => {
        setAirports(response.data);
      });
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Code Challenge: Airports</h1>

      <h2 className="mt-10 text-xl font-semibold">All Airports</h2>

      <div>
        <form onSubmit={handleSubmit}>
          <label>Search:</label>
          <input
            className={styles.input}
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            required
          />
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>

        {airports && airports.length > 0
          ? airports.map((airport) => (
              <Link
                className="flex items-center p-5 mt-5 text-gray-800 border border-gray-200 rounded-lg shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:outline-none"
                href={`/airports/${airport.iata.toLowerCase()}`}
                key={airport.iata}
              >
                <span>
                  {airport.name}, {airport.city}
                </span>
                <span className="ml-auto text-gray-500">{airport.country}</span>
              </Link>
            ))
          : airports}
      </div>
    </Layout>
  );
};

export default Page;
