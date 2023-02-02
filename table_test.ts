import { makeTable } from "./table.ts";
import { assertEquals, join } from "./deps.ts";

Deno.test({
  name: "make table",
  fn: async () => {
    const input = `h1, h2
col1, col2
col3, col4
    `;

    const got = makeTable(input);
    const want = await Deno.readTextFile(join("testdata", "expect_table.txt"));
    assertEquals(got, want.trim());
  },
});
