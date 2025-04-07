import { Player } from "./player";

export class List {
  constructor(
    public readonly groupId: string,
    public readonly players: Player[]
  ) {}
}
