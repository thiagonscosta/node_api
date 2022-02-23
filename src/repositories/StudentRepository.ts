import { Student } from "../domain/entities/students";

export interface StudentRepository {
  findById(id: string | number): Promise<Student | null>;
}
