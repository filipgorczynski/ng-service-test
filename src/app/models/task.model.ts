export class Task {
  body: string;
  isDone: boolean;

  constructor(body: string, isDone: boolean) {
    this.body = body;
    this.isDone = isDone;
  }
}
