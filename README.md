# Stoocs

## First time setup
1. Fill the `.env` file with the following content and replace the placeholders with the actual values:
   ```plaintext
   DATABASE_URL="postgresql://<POSTGRES_USER>:<POSTGRES_PASSWORD>@db:5432/<POSTGRES_DB>"
   POSTGRES_USER=
   POSTGRES_PASSWORD=
   POSTGRES_DB=
   ```

2. Create the file containing the initial users
    ```shell
   touch prisma/seed/initialUser.ts
    ```

3. Add the users to the file `prisma/seed/initialUser.ts` in the following format:
    ```typescript
   import { Argon2id } from 'oslo/password';
   import { generateId } from 'lucia';
   export const users = [
     { 
       id: generateId(15),
       email: 'john.doe@mail.com',
       password: await new Argon2id().hash('password'),
       firstname: 'John',
       lastname: 'Doe',
     },
   ]
    ```

4. Put the `courses.json` file in the `prisma/seed/courses` directory.

5. Create the uploads directories
    ```shell
   mkdir -p uploads/enrollments uploads/reports
    ```

6. Start the application:
    ```shell
    docker compose up
    ```

7. Once started to fill the db with initial values execute the following command in the application container:
    ```shell
    bunx prisma migrate reset
    ```

## Restart the application
1. Restart the application:
    ```shell
    docker compose up
    ```

2. You can access the application at this url: [http://localhost](http://localhost)

## Pull changes from the repository
1. Pull the changes from the repository:
    ```shell
   git pull
    ```
2. Rebuild the application:
    ```shell
   docker compose build
   ```