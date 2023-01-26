import { Table } from "./deps.ts";

export function makeTable(input: string): string {
  const lines = input.split("\n").filter((v) => v.trim());
  const header = lines.shift()!.split(",").map((v) => v.trim());
  const body = lines.map((line) => line.split(",").map((l) => l.trim()));

  return new Table()
    .header(header)
    .body(body)
    .maxColWidth(15)
    .padding(1)
    .border(true)
    .toString();
}
