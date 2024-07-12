# Stoocs

## Docker deployment
1. Fill the `.env` file with the following content and replace the placeholders with the actual values:
    ```plaintext
    POSTEGRES_URL="postgresql://<POSTGRES_USER>:<POSTGRES_PASSWORD>@<POSTGRES_HOST>:<POSTGRES_PORT>/<POSTGRES_DB>"
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

5. Execute the following command to start the application:
    ```shell
    docker compose up
    ```

6. Once started to fill the db with initial values execute the following command in the application container:
    ```shell
    bunx prisma migrate reset
    ```