import { Box, Button, CircularProgress, Typography } from '@mui/material';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [fact, setFact] = useState("")
  const [loading, setLoading] = useState(false)
  const generateFact = () => {
    setLoading(true)
    axios.get("https://catfact.ninja/fact").then((res) => {
      setFact(res.data.fact)
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setLoading(false)
    })
  }
  useEffect(() => {
    generateFact()
  }, [])
  return (
    <Box sx={{ width: "100%", height: "95vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Box sx={{ width: "30%", boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px", textAlign: "center", backgroundColor: "gold", borderRadius: "20px", padding: "50px" }}>
        <Typography sx={{ fontSize: "100px" }}>😺</Typography>
        <Typography sx={{ margin: "20px auto" }}>{loading ? (
          <CircularProgress />
        ) : fact}</Typography>
        <Button onClick={generateFact} variant='contained' sx={{ fontWeight: "bold" }}>Generate New Fact</Button>
      </Box>
    </Box>
  );
}

export default App;
