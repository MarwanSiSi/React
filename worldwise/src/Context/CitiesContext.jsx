import { createContext, useEffect, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const CitiesContext = createContext();

const BASE_URL = "http://localhost:8000";

CitiesProvider.propTypes = {
  children: PropTypes.node,
};

const initialState = {
  cities: [],
  isLoading: false,
  currCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };

    case "city/loaded":
      return { ...state, isLoading: false, currCity: action.payload };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currCity: action.payload,
      };

    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currCity: {},
      };

    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error("Unknown action type");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    async function fetchCities() {
      dispatch({ type: "loading" });

      try {
        // Simulate a slow network request (delay of 5 seconds)
        const sleep = (ms = 0) =>
          new Promise((resolve) => setTimeout(resolve, ms));

        await sleep(2000);

        const response = await fetch(`${BASE_URL}/cities`);

        const data = await response.json();

        if (data) {
          dispatch({ type: "cities/loaded", payload: data });
        } else {
          throw new Error("Failed to fetch cities");
        }
      } catch (error) {
        dispatch({ type: "rejected", payload: error.message });
      }
    }

    fetchCities();
  }, []);

  async function getCity(id) {
    if (+id === currCity.id) return;

    dispatch({ type: "loading" });
    try {
      const response = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await response.json();

      if (data) {
        dispatch({ type: "city/loaded", payload: data });
      } else {
        throw new Error("Failed to fetch city");
      }
    } catch (error) {
      dispatch({ type: "rejected", payload: error.message });
    }
  }

  async function createCity(city) {
    dispatch({ type: "loading" });
    try {
      const response = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(city),
      });
      const data = await response.json();
      dispatch({ type: "city/created", payload: data });
    } catch {
      dispatch({ type: "rejected", payload: "Failed to create city" });
    }
  }

  async function deleteCity(id) {
    dispatch({ type: "loading" });
    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "city/deleted", payload: id });
    } catch (error) {
      dispatch({ type: "rejected", payload: "Failed to delete city" });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currCity,
        getCity,
        createCity,
        deleteCity,
        error,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);

  if (!context) {
    throw new Error("useCities must be used within a CitiesProvider");
  }

  return context;
}

export { CitiesProvider, useCities };
