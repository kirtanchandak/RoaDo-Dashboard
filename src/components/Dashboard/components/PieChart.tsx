import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 200, 500],
      backgroundColor: ["#FFCB49", "#7464FF", "#4FD2B5"],
      hoverOffset: 4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "lol",
    },
  },
};

const plugins = [
  {
    id: "insideText",
    beforeDraw: function (chart: any) {
      var width = chart.width,
        height = chart.height,
        ctx = chart.ctx;
      ctx.restore();
      var fontSize = (height / 160).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "top";

      // Split the text into multiple lines
      var lines = ["Total", "133224"];

      // Calculate the total height of all lines
      var totalHeight = lines.length * parseInt(fontSize);

      // Calculate the Y position for the first line to center the text vertically
      var startY = (height - totalHeight) / 2.4;

      // Draw each line of text
      lines.forEach(function (line, index) {
        var textX = Math.round((width - ctx.measureText(line).width) / 2),
          textY = startY + index * parseInt(fontSize) + index * 16; // Adding some extra spacing between lines
        ctx.fillText(line, textX, textY);
      });
      ctx.save();
    },
  },
];

export default function PieClickNoSnap() {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 0, md: 4 }}
      sx={{ width: "100%" }}
    >
      <Box sx={{ width: "110px", height: "110px" }}>
        <Doughnut
          plugins={plugins}
          data={data}
          options={{
            ...options,
            cutout: "80%", // Adjust the cutout to make the doughnut thinner
          }}
        />
      </Box>
    </Stack>
  );
}
