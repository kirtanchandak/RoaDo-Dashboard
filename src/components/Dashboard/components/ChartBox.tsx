import Box from "@mui/material/Box";
import PieChart from "./PieChart";

function ChartBox() {
  return (
    <Box
      sx={{
        width: "196px",
        height: "275px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        borderRadius: "12px",
      }}
    >
      <Box sx={{}}>
        <h3 style={{ paddingLeft: 20, fontSize: "14px" }}>Orders</h3>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              marginBottom: "10px",
            }}
          >
            <PieChart />
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Box
            sx={{
              background: "linear-gradient(to right, #FFFFFF, #FFCB49)",
              display: "flex",
              justifyContent: "space-between",
              borderRadius: "4px",
              paddingLeft: 2,
              paddingRight: 2,
              marginLeft: 2,
              marginRight: 2,
              maxHeight: "24px",
            }}
          >
            <p style={{ margin: 0 }}>Upcoming</p>
            <p style={{ margin: 0 }}>50</p>
          </Box>
          <Box
            sx={{
              background: "linear-gradient(to right, #FFFFFF, #7464FF)",
              display: "flex",
              justifyContent: "space-between",
              borderRadius: "4px",
              paddingLeft: 2,
              paddingRight: 2,
              marginLeft: 2,
              marginRight: 2,
              maxHeight: "24px",
            }}
          >
            <p style={{ margin: 0 }}>Ongoing</p>
            <p style={{ margin: 0 }}>100</p>
          </Box>
          <Box
            sx={{
              background: "linear-gradient(to right, #FFFFFF, #4FD2B5)",
              display: "flex",
              justifyContent: "space-between",
              borderRadius: "4px",
              paddingLeft: 2,
              paddingRight: 2,
              marginLeft: 2,
              marginRight: 2,
              maxHeight: "24px",
            }}
          >
            <p style={{ margin: 0 }}>Upcoming</p>
            <p style={{ margin: 0 }}>50</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ChartBox;
