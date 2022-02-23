import { Submission } from "../../domain/entities/submission";
import { StudentRepository } from "../../repositories/StudentRepository";

type CreateChallengeSubmissionRequest = {
  studentId: string | number;
  challengeId: string | number;
};

export class CreateChallengeSubmission {
  constructor(private studentRepository: StudentRepository) {}

  handler({ studentId, challengeId }: CreateChallengeSubmissionRequest) {
    const student = this.studentRepository.findById(studentId);

    if (!student) {
    }

    const submission = Submission.create({ studentId, challengeId });
  }
}
