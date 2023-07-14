import EmployeeDepartment from './employeeDepartment.enum';

export default interface Employee {
    id: EmployeeId;
    name: string;
    salary: number;
    department: EmployeeDepartment;
}

export type EmployeeId = number;
