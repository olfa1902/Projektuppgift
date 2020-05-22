<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
        <!-- A form for Updating existing students is created -->
            <h3 class="text-center">Update Student</h3>
            <form @submit.prevent="handleUpdateForm">
            <!-- The form prints out the existing information and lets the user update from there -->
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="student.name" required>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="student.email" required>
                </div>

                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" v-model="student.phone" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-danger btn-block">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            student: { }
        }
    },
    created() {
        // The information of the student is fetched from our backend
        let apiURL = `api/edit-student/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.student = res.data;
        })
    },
    methods: {
        // Function gets studentid and Axios updates the backend information
        handleUpdateForm() {
            let apiURL = `api/update-student/${this.$route.params.id}`;

            axios.post(apiURL, this.student).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>