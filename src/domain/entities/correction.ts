import { Entity } from "../../core/Entitys";

type CorrectionProps = {
  grade: number;
  submissionId: string;
  createdAt: Date;
};

export class Correction extends Entity<CorrectionProps> {
  private constructor(props: CorrectionProps, id?: string | number) {
    super(props, id);
  }

  public static create(props: CorrectionProps, id?: string | number) {
    const correction = new Correction(props, id);
    return correction;
  }
}
