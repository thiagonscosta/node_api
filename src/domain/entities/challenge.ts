import { Entity } from "../../core/Entitys";

type ChallengeProps = {
  title: string;
  instructionsUrl: string;
};

export class Challenge extends Entity<ChallengeProps> {
  private constructor(props: ChallengeProps, id?: string | number) {
    super(props, id);
  }

  public static create(props: ChallengeProps, id?: string | number) {
    const challenge = new Challenge(props, id);
    return challenge;
  }
}
