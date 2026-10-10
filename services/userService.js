
import db from "../db.js";


export const createDepartment = async (departmentData) => {
    
    const client_id=departmentData.client_id;
    const department=departmentData.department;
    const status=departmentData.status;
    const outlet_staff=departmentData.outlet_staff;

    const sql = `
        INSERT INTO master_department_data
        (client_id, department, status, outlet_staff)
        VALUES (?, ?, ?, ?)
    `;

    const [result] = await db.query(sql, [
        client_id ?? null,
        department,
        status,
        outlet_staff
    ]);

    return result;
};


export const getAllDepartments = async () => {
    const [rows] = await db.query(
        "SELECT * FROM master_department_data ORDER BY id DESC"
    );

    return rows;
};



export const getDepartmentById = async (id) => {
    const [rows] = await db.query(
        "SELECT * FROM master_department_data WHERE id = ?",
        [id]
    );

    return rows[0];
};


export const updateDepartment = async (id, departmentData) => {
    const client_id=departmentData.client_id;
    const department=departmentData.department;
    const status=departmentData.status;
    const outlet_staff=departmentData.outlet_staff;

    const sql = `
        UPDATE master_department_data
        SET client_id = ?,
            department = ?,
            status = ?,
            outlet_staff = ?
        WHERE id = ?
    `;

    const [result] = await db.query(sql, [
        client_id ?? null,
        department,
        status,
        outlet_staff,
        id
    ]);

    return result;
};


export const deleteDepartment = async (id) => {
    const [result] = await db.query(
        "DELETE FROM master_department_data WHERE id = ?",
        [id]
    );

    return result;
};