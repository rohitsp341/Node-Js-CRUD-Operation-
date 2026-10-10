
import * as departmentService from "../services/userService.js";


export const createDepartment = async (req, res) => {
    try {
        if (!req.body.department?.trim()) {
            return res.json({ message: "Department name is required" });
        }

        const result = await departmentService.createDepartment(req.body);

        res.json({
            message: "Department created successfully",
            id: result.insertId
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// READ ALL
export const getAllDepartments = async (req, res) => {
    try {
        const data = await departmentService.getAllDepartments();
        res.json(data);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// READ BY ID
export const getDepartmentById = async (req, res) => {
    try {
        const data = await departmentService.getDepartmentById(req.params.id);

        if (!data) {
            return res.json({ message: "Department not found" });
        }

        res.json(data);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const updateDepartment = async (req, res) => {
    try {
        if (!req.body.department?.trim()) {
            return res.json({ message: "Department name is required" });
        }

        const result = await departmentService.updateDepartment(req.params.id, req.body);

        if (result.affectedRows === 0) {
            return res.json({ message: "Department not found or no changes made" });
        }

        res.json({ message: "Department updated successfully" });
    } catch (error) {
        res.json({ message: error.message });
    }
};


export const deleteDepartment = async (req, res) => {
    try {
        const result = await departmentService.deleteDepartment(req.params.id);

        if (result.affectedRows === 0) {
            return res.json({ message: "Department not found" });
        }

        res.json({ message: "Department deleted successfully" });
    } catch (error) {
        res.json({ message: error.message });
    }
};