import React, { useEffect } from 'react'



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
    <div>StudentsTable</div>
  )
}

export default StudentsTable