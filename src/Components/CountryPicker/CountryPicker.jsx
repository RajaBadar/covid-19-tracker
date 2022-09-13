import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NativeSelect, FormControl } from "@mui/material";
import styles from "./country.module.css";
import { fetchCountries } from "../API";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            C<i className='fa-solid fa-virus-covid'></i>vid-19 Tracker
          </Typography>
        </Toolbar>
        <FormControl className={styles.formControl}>
          <NativeSelect
            defaultValue=''
            onChange={(e) => handleCountryChange(e.target.value)}
          >
            <option value=''>Global</option>
            {fetchedCountries.map((country, i) => (
              <option key={i} value={country} >
                {country}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </AppBar>
    </Box>
  );
};

export default CountryPicker;
