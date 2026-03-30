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
import { db } from "./firebase";



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
    </Box>
  )
}

export default StudentsTable