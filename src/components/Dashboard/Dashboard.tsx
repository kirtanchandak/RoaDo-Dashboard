import Box from "@mui/material/Box";
import ChartBox from "./components/ChartBox";
import indent from "../../assets/quick-actions/addIndents.png";
import truck from "../../assets/quick-actions/truck.png";
import trailer from "../../assets/quick-actions/trailer.png";
import driver from "../../assets/quick-actions/driver.png";
import addIdents from "../../assets/quick-actions/addIndents.png";
import Highlights from "./components/Highlights";
import Alerts from "./components/Alerts";
import search from "../../assets/search.png";
import notification from "../../assets/notification.png";
import dots from "../../assets/3dots.png";

function Dashboard() {
  const quickActions = [
    {
      id: 1,
      name: "Create Indents",
      img: indent,
    },
    {
      id: 2,
      name: "Add Vehicle",
      img: truck,
    },
    {
      id: 3,
      name: "Add Trailer",
      img: trailer,
    },
    {
      id: 4,
      name: "Add Driver",
      img: driver,
    },
    {
      id: 4,
      name: "Add Driver",
      img: driver,
    },
    {
      id: 5,
      name: "Add Indents",
      img: addIdents,
    },
  ];

  const topBar = [
    {
      id: 1,
      img: search,
    },
    {
      id: 2,
      img: notification,
    },
    {
      id: 3,
      img: dots,
    },
  ];
  return (
    <>
      <Box sx={{ display: "flex", paddingLeft: 8 }}>
        <Box
          sx={{
            width: "70%",
            backgroundColor: "#F7FAFF",
            padding: 3,
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h1 style={{ fontWeight: 500, margin: 0, marginBottom: 4 }}>
                Dashboard
              </h1>
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "white",
                  padding: 1,
                  borderRadius: "100px",
                  gap: 2,
                }}
              >
                {topBar.map((icon) => (
                  <Box key={icon.id} sx={{}}>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 8,
                      }}
                    >
                      <img
                        src={icon.img}
                        style={{ width: 22, marginLeft: 3 }}
                      />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <ChartBox />
            <ChartBox />
            <ChartBox />
            <ChartBox />
          </Box>
          <Box sx={{ marginTop: 2 }}>
            <h2>Quick Actions</h2>
            <Box
              sx={{
                display: "flex",
                backgroundColor: "white",
                padding: 4,
                borderRadius: "16px",
              }}
            >
              {quickActions.map((action, index) => (
                <Box
                  key={action.id}
                  sx={{ width: "200px", position: "relative" }}
                >
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={action.img}
                      alt={action.name}
                      style={{ width: 28 }}
                    />
                  </Box>
                  <Box sx={{ textAlign: "center" }}>
                    <h5>{action.name}</h5>
                  </Box>
                  {index !== quickActions.length - 1 && (
                    <Box
                      sx={{
                        position: "absolute",
                        height: "100%",
                        width: "1px",
                        backgroundColor: "#000000",
                        top: 0,
                        right: 0,
                      }}
                    />
                  )}
                </Box>
              ))}
            </Box>
          </Box>
          <Alerts />
        </Box>
        <Box sx={{ width: "30%" }}>
          <Highlights />
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
