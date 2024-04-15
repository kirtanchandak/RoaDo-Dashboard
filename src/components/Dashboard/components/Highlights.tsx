import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Highlights() {
  const completedActicities = [
    {
      id: 1,
      name: "Gurpreet Singh",
      desc: "(Dispatch team) has created",
      loadNo: "Load No. I-I-AAA-1325",
    },
    {
      id: 2,
      name: "Aman",
      desc: "(Driver) has picked up",
      loadNo: "Location_Name for Load No. I-I-AAA-1325",
    },
    {
      id: 3,
      name: "Gurpreet Singh",
      desc: "(Dispatch team) has created",
      loadNo: "Load No. I-I-AAA-1325",
    },
    {
      id: 4,
      name: "Kirtan Singh",
      desc: "(RoaDo team) is a good intern for",
      loadNo: "2024",
    },
  ];
  return (
    <>
      <Box sx={{ padding: 3 }}>
        <Box>
          <h3 style={{ margin: 0 }}>Todays Highlights (14)</h3>
          <p style={{ color: "#CBCBCB", margin: 0 }}>19 Mar 2024</p>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            marginTop: 2,
          }}
        >
          <Box
            sx={{
              border: "2px solid #676666",
              borderRadius: "4px",
              padding: 1,
              paddingLeft: 2,
              paddingRight: 2,
            }}
          >
            <p style={{ margin: 0, color: "#676666" }}>Income</p>
            <Box sx={{ marginTop: 1 }}>
              <h3 style={{ margin: 0, color: "#148714" }}>100000 CAD</h3>
              <p style={{ margin: 0, color: "#676666" }}>2 payments received</p>
            </Box>
          </Box>
          <Box
            sx={{
              border: "2px solid #676666",
              borderRadius: "4px",
              padding: 1,
              paddingLeft: 2,
              paddingRight: 2,
            }}
          >
            <p style={{ margin: 0, color: "#676666" }}>Income</p>
            <Box sx={{ marginTop: 1 }}>
              <h3 style={{ margin: 0, color: "red" }}>50000 CAD</h3>
              <p style={{ margin: 0, color: "#676666" }}>5 payments received</p>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <h3>Completed Activities (14)</h3>
            <p
              style={{
                paddingTop: 5,
                color: "#111111",
                textDecoration: "underline",
              }}
            >
              View All
            </p>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Stack>
              {completedActicities.map((activity) => (
                <Item
                  style={{
                    boxShadow: "none",
                    color: "#676666",
                    border: "1px solid #CBCBCB",
                  }}
                >
                  <span style={{ color: "#1A3875" }}>{activity.name}</span>{" "}
                  {activity.desc}{" "}
                  <span style={{ color: "black" }}>{activity.loadNo}</span>
                </Item>
              ))}
            </Stack>
          </Box>
        </Box>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <h3>Scheduled Activities (14)</h3>
            <p
              style={{
                paddingTop: 5,
                color: "#111111",
                textDecoration: "underline",
              }}
            >
              View All
            </p>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Stack>
              {completedActicities.map((activity) => (
                <Item
                  style={{
                    boxShadow: "none",
                    color: "#676666",
                    border: "1px solid #CBCBCB",
                  }}
                >
                  <span style={{ color: "#1A3875" }}>{activity.name}</span>{" "}
                  {activity.desc}{" "}
                  <span style={{ color: "black" }}>{activity.loadNo}</span>
                </Item>
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Highlights;
