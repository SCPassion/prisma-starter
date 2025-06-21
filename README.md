# prisma-starter

```
npm install prisma @prisma/client
npx prisma init
```

## update your prisma schema

## migrate the prisma schema using cli:

```
npx prisma migrate dev --name init
npx prisma generate
```

migrate: telling prisma to apply the schema changes to the our database.
dev: This is all in development
--name: give a name init for this migration

To let the client access and make changes to this postgres table using prisma:
`npx prisma generate` // this regenerate a new prisma client so that your application can use the latest schema changes in your TS. You only need to run prisma generate if you change your prisma schema

### Add seed data to the database

Add this to package json

```
  "prisma": {
    "seed": "ts-node prisma/seed.ts"
  },
```

Run `npx prisma db seed`

## Do where sql with prisma

```
app.get("/users", async (_, res) => {
  const users = await prisma.user.findMany({
    where: { isMarried: true, age: { gt: 30 } },
  }); // Fetch all users from the database
  res.json(users);
});

```
