import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import driver from "../../../assets/Icon  Container.png";
import temp from "../../../assets/Icon  Container (1).png";

export default function Alerts() {
  const alertCards = [
    {
      id: 1,
      issue: "Driver Raised Concern",
      truckNo: "Load No : 12454, Bill To : RoaDo demo Bangalore",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua",
      date: "13 Feb 24",
      img: driver,
    },
    {
      id: 2,
      issue: "Reefer Temp. out of range",
      truckNo: "Load No : 12454, Bill To : RoaDo demo Bangalore",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua",
      date: "13 Feb 24",
      img: temp,
    },
  ];

  return (
    <>
      <h2>High Priority alerts (14)</h2>
      <Box sx={{ display: "flex", gap: 5 }}>
        {alertCards.map((card) => (
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box sx={{ display: "flex", gap: 1 }}>
                  <img src={card.img} style={{ objectFit: "contain" }} />
                  <Box>
                    <p style={{ margin: 0, fontSize: "14px" }}>{card.issue}</p>
                    <p style={{ margin: 0, fontSize: "13px" }}>
                      {card.truckNo}
                    </p>
                  </Box>
                </Box>
                <Box>
                  <p>{card.date}</p>
                </Box>
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 3, pb: 1 }}>
                <p style={{ margin: 0, fontSize: "12px" }}>{card.desc}</p>
              </Box>
              <Box sx={{ display: "flex", gap: 6, pl: 3, pb: 1 }}>
                <button
                  style={{
                    color: "#1A3875",
                    backgroundColor: "transparent",
                    border: "none",
                    textDecoration: "underline",
                  }}
                >
                  Ignore
                </button>
                <button
                  style={{
                    backgroundColor: "#1A3875",
                    border: "none",
                    color: "white",
                    padding: 4,
                    borderRadius: "4px",
                  }}
                >
                  Resolve
                </button>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </>
  );
}
