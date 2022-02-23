import { Entity } from "../../core/Entitys";

type SubmissionProps = {
  challengeId: string | number;
  studentId: string | number;
  createdAt?: Date;
};

export class Submission extends Entity<SubmissionProps> {
  private constructor(props: SubmissionProps, id?: string | number) {
    super(props, id);
  }

  public static create(props: SubmissionProps, id?: string | number) {
    const submission = new Submission(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );
    return submission;
  }
}
