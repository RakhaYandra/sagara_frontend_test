import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const DashboardContent = () => {
  const studentData = [
    { category: "Back End", count: 289 },
    { category: "Front End", count: 200 },
    { category: "Quality Assurance", count: 300 },
    { category: "UI/UX", count: 124 },
  ];

  return (
    <Box sx={{ mt: 15 }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #e0e0e0",
              borderRadius: 1,
              p: 1,
            }}
          >
            <CalendarTodayIcon sx={{ mr: 1 }} />
            <Typography variant="body1">Dec 29, 2023 - Jan 4, 2024</Typography>
          </Box>
          <Select defaultValue="daily" size="small">
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="monthly">Monthly</MenuItem>
          </Select>
        </Box>

        <Grid container spacing={3}>
          {/* Metrics */}
          <Grid item xs={12} sm={4}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle1">Total Students</Typography>
              <Typography variant="h4">513</Typography>
              <Typography variant="body2" color="success.main">
                8.5% Up from yesterday
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle1">
                Total Certified Students
              </Typography>
              <Typography variant="h4">489</Typography>
              <Typography variant="body2" color="success.main">
                8.5% Up from yesterday
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle1">
                Average Certification Score
              </Typography>
              <Typography variant="h4">84.62</Typography>
              <Typography variant="body2" color="success.main">
                8.5% Up from yesterday
              </Typography>
            </Paper>
          </Grid>

          {/* Chart */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Student Distribution
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={studentData}>
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#A51535" />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DashboardContent;
