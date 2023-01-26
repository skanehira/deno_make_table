import { makeTable } from "./table.ts";
import { assertEquals } from "./deps.ts";

Deno.test({
  name: "make table",
  fn: () => {
    const input = `h1, h2
col1, col2
col3, col4
    `;

    const got = makeTable(input);
    const want = `┌──────┬──────┐
│ h1   │ h2   │
├──────┼──────┤
│ col1 │ col2 │
├──────┼──────┤
│ col3 │ col4 │
└──────┴──────┘`;
    assertEquals(got, want);
  },
});
