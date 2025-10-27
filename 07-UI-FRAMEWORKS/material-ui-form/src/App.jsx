import { use, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './App.css'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function App() {
  const [checkbox, setCheckbox] = useState(false);
  const [radio, setRadio] = useState("First");

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    country: '',
    name: false
  });

  const handleChange = (event) => {
    const {name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checbox' ? checked : value,
    }));
  };

  return (
    <>
      <CssBaseline />
      <Container fixed>
        <h1>Vite + React + Shola</h1> 
        {/* checkbox */}
        <FormControl>
          <FormControlLabel 
            control={
              <Checkbox
                name="agree"
                checked={checkbox}
                onChange={() => setCheckbox(!checkbox)}
              />
            }
            label="I agree to the terms and conditions"   
          />
        </FormControl>

        {/* Radio button */}
        <FormControl component="fieldset" margin="normal">
          <FormLabel>Gender</FormLabel>
          <RadioGroup name="gender" onChange={e => setRadio(e.target.value)} row>
            <FormControlLabel value="male" control={<Radio/>} label="male"/>
            <FormControlLabel value="female" control={<Radio/>} label="female"/>
            <FormControlLabel value="other" control={<Radio/>} label="other"/>
          </RadioGroup>
        </FormControl>

        {/* button */}
        <Button 
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          >
          Submit
        </Button>

        {/* select dropdown */}
        <FormControl fullWidth margin="normal">
          <FormLabel>Country</FormLabel>
          <Select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required>
              <MenuItem value="">
                <em>Select a Country</em>
              </MenuItem>
              <MenuItem value="Nigeria">Nigeria</MenuItem>
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="UK">UK</MenuItem>
              <MenuItem value="Canada">Canada</MenuItem>
          </Select>
        </FormControl>
      </Container>
    </>
  )
}

export default App
