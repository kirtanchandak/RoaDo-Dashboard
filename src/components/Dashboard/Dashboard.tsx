import Box from "@mui/material/Box";
import ChartBox from "./components/ChartBox";

function Dashboard() {
  return (
    <>
      <Box sx={{ display: "flex", paddingLeft: 8 }}>
        <Box
          sx={{
            width: "70%",
            backgroundColor: "#F7FAFF",
            height: "100vh",
            padding: 3,
          }}
        >
          <Box>
            <h1 style={{ fontWeight: 500 }}>Dashboard</h1>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <ChartBox />
            <ChartBox />
            <ChartBox />
            <ChartBox />
          </Box>
        </Box>
        <Box sx={{ width: "30%" }}>
          <Box sx={{ maxWidth: "100%" }}>sdlkf</Box>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
