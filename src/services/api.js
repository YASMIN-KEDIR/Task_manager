import axiosBase from "../Api/AxiosBase";



// ==========================================
// 1️⃣ CREATE TASK - matches @PostMapping
// ==========================================
export const createTask = (task) => {
    return axiosBase.post('', task);
    // POST http://localhost:8080/api/tasks
};

// ==========================================
// 2️⃣ GET ALL TASKS - matches @GetMapping
// ==========================================
export const getTasks = () => {
    return axiosBase.get();
    // GET http://localhost:8080/api/tasks
};

// ==========================================
// 3️⃣ GET ONE TASK - matches @GetMapping("/{id}")
// ==========================================
export const getTask = (id) => {
    return axiosBase.get(`${id}`);
    // GET http://localhost:8080/api/tasks/1
};

// ==========================================
// 4️⃣ UPDATE TASK - matches @PutMapping("/{id}")
// ==========================================
export const updateTask = (id, task) => {
    return axiosBase.put(`${id}`, task);
    // PUT http://localhost:8080/api/tasks/1
};

// ==========================================
// 5️⃣ DELETE TASK - matches @DeleteMapping("/{id}")
// ==========================================
export const deleteTask = (id) => {
    return axiosBase.delete(`${id}`);
    // DELETE http://localhost:8080/api/tasks/1
};

// ==========================================
// 6️⃣ COMPLETE TASK - matches @PatchMapping("/{id}/complete")
// ==========================================
export const completeTask = (id) => {
    return axiosBase.patch(`${id}/complete`);
    // PATCH http://localhost:8080/api/tasks/1/complete
};

export const startTask = (id) => {
    return axiosBase.patch(`${id}/start`);
    // PATCH http://localhost:8080/api/tasks/1/start
};