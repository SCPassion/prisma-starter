# prisma-starter

npm install prisma @prisma/client

npx prisma init

## update your prisma schema

### migrate the prisma schema using cli:

npx prisma migrate dev --name init

migrate: telling prisma to apply the schema changes to the our database.
dev: This is all in development
--name: give a name init for this migration

### To let the client access and make changes to this postgres table using prisma:

npx prisma generate

### Add seed data to the database

Add this to package json

```
  "prisma": {
    "seed": "ts-node prisma/seed.ts"
  },
```

npx prisma db seed
