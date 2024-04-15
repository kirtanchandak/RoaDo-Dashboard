import Box from "@mui/material/Box";
import PieChart from "./PieChart";

function ChartBox() {
  return (
    <Box
      sx={{
        width: "245px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        borderRadius: "12px",
        paddingBottom: 2,
      }}
    >
      <Box sx={{}}>
        <h3 style={{ paddingLeft: 20 }}>Orders</h3>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              marginBottom: "10px", // Adjust spacing as needed
            }}
          >
            <PieChart /> {/* Center only PieChart */}
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
              maxHeight: 45,
            }}
          >
            <p style={{ margin: 5 }}>Upcoming</p>
            <p style={{ margin: 5 }}>50</p>
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
              maxHeight: 45,
            }}
          >
            <p style={{ margin: 5 }}>Ongoing</p>
            <p style={{ margin: 5 }}>100</p>
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
              maxHeight: 45,
            }}
          >
            <p style={{ margin: 5 }}>Completed</p>
            <p style={{ margin: 5 }}>50</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ChartBox;
