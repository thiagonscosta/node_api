import { Challenge } from "../domain/entities/challenge";

export interface ChallengeRepository {
  findById(id: string | number): Promise<Challenge | null>;
}
