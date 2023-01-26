# deno_make_table
Make csv to ascii table.

## Usage

```typescript
    const input = `h1, h2
col1, col2
col3, col4
    `;

    // table will be
    // ┌──────┬──────┐
    // │ h1   │ h2   │
    // ├──────┼──────┤
    // │ col1 │ col2 │
    // ├──────┼──────┤
    // │ col3 │ col4 │
    // └──────┴──────┘
    const table = makeTable(input);
```
