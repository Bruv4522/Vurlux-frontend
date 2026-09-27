import { Box, Link, Typography } from "@mui/material";

export default function App() {
  return (
    <>
      <Box sx={{
        color: 'white',
        display: 'flex',
        minHeight: '90vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Typography sx={{
          fontWeight: "700",
          fontSize: "150px"
        }}>
          Vurlux
        </Typography>

        <Typography sx={{
          fontSize: "30px"
        }}>
          The modern URL shortener, built for the best
        </Typography>
        
        <br/>

        <Link href="/signup" underline="none" sx={{
          fontSize: "20px"
        }}>Get started</Link>
      </Box>
    </>
  );
}