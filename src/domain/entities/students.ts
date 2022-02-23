import { Entity } from "../../core/Entitys";

type StudentProps = {
  name: string;
  email: string;
};

export class Student extends Entity<StudentProps> {
  private constructor(props: StudentProps, id?: string | number) {
    super(props, id);
  }

  public static create(props: StudentProps, id?: string | number) {
    const student = new Student(props, id);
    return student;
  }
}
