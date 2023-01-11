import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import Icon from "../Icon";

const PerformanceCard = ({ icon, sx, type, data }) => {
  return (
    <Card sx={{ minWidth: 400, ...sx }}>
      <CardContent>
        <Box sx={{ mb: 2.5 }} display="flex" alignItems="center">
          <Icon style={{ marginRight: "8px" }} icon={icon} />
          <Typography sx={{ fontSize: 20 }} color="text.secondary">
            Total {type}
          </Typography>
        </Box>
        <Typography fontWeight={800} variant="h4">
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PerformanceCard;
