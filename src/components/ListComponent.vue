<template>
    <div class="row">
        <div class="col-md-12">
        <!-- A table is created to list the student data inside -->
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                <!-- Vue information is displayed as long as there is students in the List -->
                    <tr v-for="student in Students" :key="student._id">
                        <td>{{ student.name }}</td>
                        <td>{{ student.email }}</td>
                        <td>{{ student.phone }}</td>
                        <td>
                        <!-- Router links to edit-component when button is clicked -->
                            <router-link :to="{name: 'edit', params: { id: student._id }}" class="btn btn-success">Edit
                            </router-link>
                            <!-- The function deletestudent is run at button click -->
                            <button @click.prevent="deleteStudent(student._id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    // Information here is exported and used in the above section of the file 
    export default {
        // Students-property is made an array
        data() {
            return {
                Students: []
            }
        },
        // Axios is connected with our backend and Students is updated with a list of students
        created() {
            let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.Students = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            // Here our function deleteStudent is made
            deleteStudent(id){
                // Id is used to determine the post
                let apiURL = `http://localhost:4000/api/delete-student/${id}`;
                let indexOfArrayItem = this.Students.findIndex(i => i._id === id);

                // A confirmation-warning is made and if true, the post is spliced and removed from the array
                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Students.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>

<style>
    .btn-success {
        margin-right: 10px;
    }
</style>