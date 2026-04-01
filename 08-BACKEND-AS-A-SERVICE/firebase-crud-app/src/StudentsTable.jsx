import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  TextField,
  Stack
} from "@mui/material";
import {
  DataGrid,
  GridActionsCellItem
} from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore";
import { auth, db } from "./firebase";
import { signOut } from 'firebase/auth';



function StudentsTable() {

    const [students, setStudents] = useState([]);
    const [newStudent, setNewStudent] = useState({
        name: "",
        email: ""
    });

    // 🔹 READ: Fetch all students
    const fetchStudents = async () => {
        const snapshot = await getDocs(collection(db, "students"));
        const data = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setStudents(data);
    };

    // 🔹 CREATE: Add a new student
    const handleAdd = async () => {
      if (!newStudent.name || !newStudent.email) return;

      await addDoc(collection(db, "students"), newStudent);
      setNewStudent({ name: "", email: ""});
      fetchStudents();
    };

    // 🔹 UPDATE: Inline edit of a student record
    const handleUpdate = async (id, updatedRow) => {
      // retrieve student record to be edited
      const ref = doc(db, "students", id);
      // update the student record with new values from the form
      await updateDoc(ref, {
        name: updatedRow.name,
        email: updatedRow.email
      });
    };

    // 🔹 DELETE: delete a student record
    const handleDelete = async (id) => {
      await deleteDoc(doc(db, "students", id));
      fetchStudents();
    };

    // 🔹 LOGOUT: Logout a user via google
    const handleLogout = async () => {
      await signOut(auth);
    };

    useEffect(() => {
        fetchStudents();
    }, []);

        // 🔹 DataGrid columns
        const columns = [
            {
                field: "name",
                headerName: "Name",
                flex: 1,
                editable: true
            },
            {
                field: "email",
                headerName: "Email",
                flex: 1,
                editable: true
            },
            {
                field: "actions",
                type: "actions",
                getActions: (params) => [
                    <GridActionsCellItem
                    icon={<DeleteIcon />}
                    label="Delete"
                    onClick={() => handleDelete(params.id)}
                    />
                ]
            }
        ];


  return (
    <Box p={3}>
      {/* 🔹 CREATE FORM */}
      <Stack direction="row" spacing={2} mb={2}>
        <TextField 
          label="Name"
          value={newStudent.name}
          onChange={(e) =>
            setNewStudent({ ...newStudent, name: e.target.value})
          }
        />
        <TextField 
          label="Email"
          value={newStudent.email}
          onChange={(e) =>
            setNewStudent({ ...newStudent, email: e.target.value})
          }
        />
        <Button variant="contained" onClick={handleAdd}>
          Add Student
        </Button>
      </Stack>

      {/* 🔹 DATA TABLE */}
      <DataGrid
        rows={students}
        columns={columns}
        autoHeight
        pageSizeOptions={[5, 10]}
        processRowUpdate={(updatedRow) => {
          handleUpdate(updatedRow.id, updatedRow);
          return updatedRow;
        }}
        experimentalFeatures={{ newEditingApi: true }}
      />
      <Button variant="outlined" onClick={handleLogout} sx={{ mb: 2 }}>
        Logout
      </Button>
    </Box>
  )
}

export default StudentsTable