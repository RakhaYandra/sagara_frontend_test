import React, { useState, useMemo } from "react";
import {
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
  Container,
  Typography,
  Checkbox,
  FormGroup,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TablePagination,
  FormControlLabel,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const STATIC_STUDENTS = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    instance: "Telkom University",
    createdAt: "2024-08-01",
  },
  {
    id: 2,
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "123-456-7890",
    instance: "Telkom University",
    createdAt: "2024-08-02",
  },
  {
    id: 3,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "234-567-8901",
    instance: "Telkom University",
    createdAt: "2024-08-03",
  },
  {
    id: 4,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "234-567-8901",
    instance: "Telkom University",
    createdAt: "2024-08-04",
  },
  {
    id: 5,
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "555-123-4567",
    instance: "Institut Teknologi Bandung",
    createdAt: "2024-08-05",
  },
  {
    id: 6,
    name: "Alice Williams",
    email: "alice.williams@example.com",
    phone: "987-654-3210",
    instance: "Universitas Padjadjaran",
    createdAt: "2024-08-06",
  },
  {
    id: 7,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "123-456-7890",
    instance: "Universitas Indonesia",
    createdAt: "2024-08-07",
  },
];

const StudentPage = () => {
  const [students, setStudents] = useState(STATIC_STUDENTS);
  const [search, setSearch] = useState("");
  const [filterColumn, setFilterColumn] = useState("");
  const [filterCondition, setFilterCondition] = useState("");
  const [settings, setSettings] = useState({
    id: true,
    name: true,
    email: true,
    phone: true,
    instance: true,
    createdAt: true,
  });
  const [showFilter, setShowFilter] = useState(false);
  const [showSettingsDialog, setShowSettingsDialog] = useState(false);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [sortColumn, setSortColumn] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");

  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    phone: "",
    instance: "",
    createdAt: new Date().toISOString().split("T")[0],
  });

  const [editStudent, setEditStudent] = useState(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filterStudents = useMemo(() => {
    return STATIC_STUDENTS.filter((student) => {
      const lowercasedSearch = search.toLowerCase();
      const matchesSearch = Object.values(student).some((value) =>
        value.toString().toLowerCase().includes(lowercasedSearch)
      );
      const matchesFilter = filterColumn
        ? student[filterColumn]
            ?.toString()
            .toLowerCase()
            .includes(filterCondition.toLowerCase())
        : true;
      return matchesSearch && matchesFilter;
    });
  }, [search, filterColumn, filterCondition]);

  const sortedStudents = useMemo(() => {
    return [...filterStudents].sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) {
        return sortDirection === "asc" ? -1 : 1;
      }
      if (a[sortColumn] > b[sortColumn]) {
        return sortDirection === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [filterStudents, sortColumn, sortDirection]);

  const paginatedStudents = useMemo(() => {
    return sortedStudents.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  }, [sortedStudents, page, rowsPerPage]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFilterChange = () => {
    setStudents(paginatedStudents);
  };

  const handleSettingsChange = (event) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [event.target.name]: event.target.checked,
    }));
  };

  const handleDelete = (id) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id)
    );
  };

  const handleEdit = (student) => {
    setEditStudent(student);
    setShowEditDialog(true);
  };

  const handleAddStudent = () => {
    setStudents((prevStudents) => [
      ...prevStudents,
      {
        id: prevStudents.length + 1,
        ...newStudent,
        createdAt: new Date().toISOString().split("T")[0],
      },
    ]);
    setNewStudent({
      name: "",
      email: "",
      phone: "",
      instance: "",
      createdAt: new Date().toISOString().split("T")[0],
    });
    setShowAddDialog(false);
  };

  const handleUpdateStudent = () => {
    if (editStudent) {
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.id === editStudent.id
            ? { ...editStudent, createdAt: student.createdAt }
            : student
        )
      );
      setEditStudent(null);
      setShowEditDialog(false);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort = (column) => {
    const isAsc = sortColumn === column && sortDirection === "asc";
    setSortColumn(column);
    setSortDirection(isAsc ? "desc" : "asc");
  };

  return (
    <Box sx={{ mt: 10 }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Data Student
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Box>
            <Button
              onClick={() => setShowFilter(!showFilter)}
              variant="outlined"
              sx={{
                borderColor: "#A51535",
                color: "#A51535",
                mr: 2,
                "&:hover": {
                  backgroundColor: "#A51535",
                  color: "white",
                },
              }}
            >
              Filters
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#A51535",
                "&:hover": { backgroundColor: "#851e1f" },
              }}
              onClick={() => setShowAddDialog(true)}
            >
              Add User
            </Button>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              label="Search"
              variant="outlined"
              value={search}
              onChange={handleSearchChange}
              sx={{ mr: 2 }}
            />
            <Button
              onClick={() => setShowSettingsDialog(true)}
              variant="outlined"
              sx={{
                borderColor: "#A51535",
                color: "#A51535",
                "&:hover": {
                  backgroundColor: "#A51535",
                  color: "white",
                },
              }}
            >
              Settings
            </Button>
          </Box>
        </Box>
        {showFilter && (
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "16px",
              marginBottom: "16px",
              backgroundColor: "white",
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: "8px" }}>
              Filters
            </Typography>
            <FormControl fullWidth sx={{ marginBottom: "16px" }}>
              <InputLabel>Filter Column</InputLabel>
              <Select
                value={filterColumn}
                onChange={(e) => setFilterColumn(e.target.value)}
                label="Filter Column"
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="name">Name</MenuItem>
                <MenuItem value="email">Email</MenuItem>
                <MenuItem value="phone">Phone</MenuItem>
                <MenuItem value="instance">Instance</MenuItem>
                <MenuItem value="createdAt">Created At</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Filter Condition"
              variant="outlined"
              value={filterCondition}
              onChange={(e) => setFilterCondition(e.target.value)}
              sx={{ marginBottom: "16px" }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#A51535",
                "&:hover": { backgroundColor: "#851e1f" },
              }}
              onClick={handleFilterChange}
            >
              Apply
            </Button>
          </Box>
        )}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {settings.id && <TableCell>#</TableCell>}
                {settings.name && (
                  <TableCell onClick={() => handleSort("name")}>Name</TableCell>
                )}
                {settings.email && (
                  <TableCell onClick={() => handleSort("email")}>
                    Email
                  </TableCell>
                )}
                {settings.phone && (
                  <TableCell onClick={() => handleSort("phone")}>
                    Phone
                  </TableCell>
                )}
                {settings.instance && (
                  <TableCell onClick={() => handleSort("instance")}>
                    Instance
                  </TableCell>
                )}
                {settings.createdAt && (
                  <TableCell onClick={() => handleSort("createdAt")}>
                    Created At
                  </TableCell>
                )}
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedStudents.map((student) => (
                <TableRow key={student.id}>
                  {settings.id && <TableCell>{student.id}</TableCell>}
                  {settings.name && <TableCell>{student.name}</TableCell>}
                  {settings.email && <TableCell>{student.email}</TableCell>}
                  {settings.phone && <TableCell>{student.phone}</TableCell>}
                  {settings.instance && (
                    <TableCell>{student.instance}</TableCell>
                  )}
                  {settings.createdAt && (
                    <TableCell>{student.createdAt}</TableCell>
                  )}
                  <TableCell>
                    <IconButton onClick={() => handleEdit(student)}>
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(student.id)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={sortedStudents.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <Dialog
          open={showSettingsDialog}
          onClose={() => setShowSettingsDialog(false)}
        >
          <DialogTitle>Settings</DialogTitle>
          <DialogContent>
            <FormGroup>
              {Object.keys(settings).map((key) => (
                <FormControlLabel
                  key={key}
                  control={
                    <Checkbox
                      checked={settings[key]}
                      onChange={handleSettingsChange}
                      name={key}
                    />
                  }
                  label={key.charAt(0).toUpperCase() + key.slice(1)}
                />
              ))}
            </FormGroup>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setShowSettingsDialog(false)}>Close</Button>
          </DialogActions>
        </Dialog>
        <Dialog open={showAddDialog} onClose={() => setShowAddDialog(false)}>
          <DialogTitle>Add Student</DialogTitle>
          <DialogContent>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              value={newStudent.name}
              onChange={(e) =>
                setNewStudent({ ...newStudent, name: e.target.value })
              }
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={newStudent.email}
              onChange={(e) =>
                setNewStudent({ ...newStudent, email: e.target.value })
              }
            />
            <TextField
              label="Phone"
              fullWidth
              margin="normal"
              value={newStudent.phone}
              onChange={(e) =>
                setNewStudent({ ...newStudent, phone: e.target.value })
              }
            />
            <TextField
              label="Instance"
              fullWidth
              margin="normal"
              value={newStudent.instance}
              onChange={(e) =>
                setNewStudent({ ...newStudent, instance: e.target.value })
              }
            />
            <TextField
              label="Created At"
              type="date"
              fullWidth
              margin="normal"
              value={newStudent.createdAt}
              onChange={(e) =>
                setNewStudent({ ...newStudent, createdAt: e.target.value })
              }
              InputLabelProps={{ shrink: true }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setShowAddDialog(false)}>Cancel</Button>
            <Button onClick={handleAddStudent}>Add</Button>
          </DialogActions>
        </Dialog>
        <Dialog open={showEditDialog} onClose={() => setShowEditDialog(false)}>
          <DialogTitle>Edit Student</DialogTitle>
          <DialogContent>
            {editStudent && (
              <>
                <TextField
                  label="Name"
                  fullWidth
                  margin="normal"
                  value={editStudent.name}
                  onChange={(e) =>
                    setEditStudent({ ...editStudent, name: e.target.value })
                  }
                />
                <TextField
                  label="Email"
                  fullWidth
                  margin="normal"
                  value={editStudent.email}
                  onChange={(e) =>
                    setEditStudent({ ...editStudent, email: e.target.value })
                  }
                />
                <TextField
                  label="Phone"
                  fullWidth
                  margin="normal"
                  value={editStudent.phone}
                  onChange={(e) =>
                    setEditStudent({ ...editStudent, phone: e.target.value })
                  }
                />
                <TextField
                  label="Instance"
                  fullWidth
                  margin="normal"
                  value={editStudent.instance}
                  onChange={(e) =>
                    setEditStudent({ ...editStudent, instance: e.target.value })
                  }
                />
                <TextField
                  label="Created At"
                  type="date"
                  fullWidth
                  margin="normal"
                  value={editStudent.createdAt}
                  onChange={(e) =>
                    setEditStudent({
                      ...editStudent,
                      createdAt: e.target.value,
                    })
                  }
                  InputLabelProps={{ shrink: true }}
                />
              </>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setShowEditDialog(false)}>Cancel</Button>
            <Button onClick={handleUpdateStudent}>Update</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default StudentPage;
