import crypto from "crypto";

export abstract class Entity<T> {
  protected _id: string | number;
  public props: T;

  constructor(props: T, id?: string | number) {
    this.props = props;
    this._id = id ?? crypto.randomUUID();
  }
}
