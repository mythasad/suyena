import { defineDb, defineTable,  column } from 'astro:db';



const Comment = defineTable({
  columns:{
    author: column.text(),
    content: column.text(),
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: {Comment}
});
