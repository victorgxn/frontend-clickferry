"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface Departure {
  departurePort: string;
  arrivalPort: string;
  departureTime: string;
  arrivalTime: string;
  shipName: string;
  shipType: string;
  supplier: number;
}

const ports = [
  { name: "Algeciras", code: "ALGE" },
  { name: "Ceuta", code: "CEUT" },
  { name: "Tangier Med", code: "TANM" },
];

const routes = {
  ALGE: ["CEUT", "TANM"],
  CEUT: ["ALGE"],
  TANM: ["ALGE"],
};

export default function FilterFlights() {
  const [departures, setDepartures] = useState<Departure[]>([]);
  const [date, setDate] = useState<string>("");
  const [returnDate, setReturnDate] = useState<string>("");
  const [departurePort, setDeparturePort] = useState<string>("");
  const [arrivalPort, setArrivalPort] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:8080/departures", {
        params: { date, returnDate, departurePort, arrivalPort },
      });
      if (response.data && response.data.departures) {
        setDepartures(response.data.departures);
      } else {
        setDepartures([]);
      }
    } catch (error) {
      console.error("Error fetching departures:", error);
      setError("Error fetching departures. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const filteredArrivalPorts = departurePort ? routes[departurePort] : [];

  return (
      <div className="">
          <div className="text-center">
        <span className="bg-white text-tertiary medium-16 py-4 px-12 rounded-l-xl rounded-r-xl">
            Encuentra tu billete de ferry
        </span>
          </div>
          <form onSubmit={handleSearch}>
              <div className="flex flex-col md:flex-row gap-6 px-8 py-10 md:py-6 md:px-12 bg-white rounded-xl">
                  <div className="flex flex-col w-full xl:px-6">
                      <label htmlFor="departurePort" className="block text-gray-50 pb-2">
                          Puertos de salida
                      </label>
                      <div className="flexCenter h-10 px-4 bg-primary rounded-full w-full">
                          <select
                              id="departurePort"
                              value={departurePort}
                              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                  setDeparturePort(e.target.value);
                                  setArrivalPort("");
                              }}
                              className="bg-transparent border-none outline-none w-full regular-14"
                              required
                          >
                              <option value="">Desde</option>
                              {ports.map((port) => (
                                  <option key={port.code} value={port.code}>
                                      {port.name}
                                  </option>
                              ))}
                          </select>
                      </div>
                  </div>
                  <div className="flex flex-col w-full xl:px-6">
                      <label htmlFor="arrivalPort" className="block text-gray-50 pb-2">
                          Puerto de llegada:
                      </label>
                      <div className="flexCenter h-10 px-4 bg-primary rounded-full w-full">
                          <select
                              id="arrivalPort"
                              value={arrivalPort}
                              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                                  setArrivalPort(e.target.value)
                              }
                              className="bg-transparent border-none outline-none w-full regular-14"
                              required
                              disabled={!departurePort}
                          >
                              <option value="">Hacia</option>
                              {filteredArrivalPorts.map((code: string) => {
                                  const port = ports.find((port) => port.code === code);
                                  return (
                                      <option key={port!.code} value={port!.code}>
                                          {port!.name}
                                      </option>
                                  );
                              })}
                          </select>
                      </div>
                  </div>
                  <div className="flex flex-col w-full xl:px-6">
                      <label htmlFor="date" className="block text-gray-50 pb-2">
                          Fecha ida:
                      </label>
                      <div className="flexCenter h-10 px-4 bg-primary rounded-full w-full">
                          <input
                              type="date"
                              id="date"
                              value={date}
                              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                  setDate(e.target.value)
                              }
                              className="bg-transparent border-none outline-none w-full regular-14"
                              required
                          />
                      </div>
                  </div>
                  <div className="flex flex-col w-full xl:px-6">
                      <label htmlFor="returnDate" className="block text-gray-50 pb-2">
                          Fecha de vuelta:
                      </label>
                      <div className="flexCenter h-10 px-4 bg-primary rounded-full w-full">
                          <input
                              type="date"
                              id="returnDate"
                              value={returnDate}
                              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                  setReturnDate(e.target.value)
                              }
                              className="bg-transparent border-none outline-none w-full regular-14"
                          />
                      </div>
                  </div>
              </div>
              <div className="flex justify-center mt-4">
                  <button
                      type="submit"
                      disabled={loading}
                      className="bg-secondary text-white py-2 px-4 rounded-full"
                  >
                      Buscar
                  </button>
              </div>
          </form>

          {loading && <p>Cargando...</p>}
          {error && <p className="error-message">{error}</p>}

          <div className="results mt-6">
              {departures.length > 0 ? (
                  departures.map((departure, index) => (
                      <div key={index} className="bg-white rounded-xl shadow-md p-4 mb-4">
                          <div className="flex justify-between items-center">
                              <div>
                                  <p className="text-gray-700"><strong>Departure
                                      Port:</strong> {departure.departurePort}</p>
                                  <p className="text-gray-700"><strong>Arrival Port:</strong> {departure.arrivalPort}
                                  </p>
                                  <p className="text-gray-700"><strong>Departure
                                      Time:</strong> {departure.departureTime}</p>
                                  <p className="text-gray-700"><strong>Arrival Time:</strong> {departure.arrivalTime}
                                  </p>
                                  <p className="text-gray-700"><strong>Ship Name:</strong> {departure.shipName}</p>
                                  <p className="text-gray-700"><strong>Ship Type:</strong> {departure.shipType}</p>
                                  <p className="text-gray-700"><strong>Supplier:</strong> {departure.supplier}</p>
                              </div>
                              <div className="text-right">
                                  <button className="bg-yellow-500 text-white py-2 px-4 rounded-full">Select</button>
                              </div>
                          </div>
                      </div>
                  ))
              ) : (
                  !loading &&
                  <p className="text-center text-gray-700">No departures found for the selected criteria.</p>
              )}
          </div>
      </div>
  );
}
