import { JSONFileSyncPreset } from "lowdb/node";

type Data = {
  messages: string[]
}

const defaultData: Data = { messages: [] }

export class Repository {

  private db;

  constructor() {
    this.db = JSONFileSyncPreset<Data>('db.json', defaultData)
  }

  add(foo: string) {
    this.db.data.messages.push(foo) // ✅ Success
  }
}