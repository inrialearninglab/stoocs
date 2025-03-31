# Stoocs
An app to display stats from MOOCs on FUN MOOC.

## First time setup
1. Fill the `.env` file with the following content and replace the placeholders with the actual values:
   ```plaintext
   DATABASE_URL="postgresql://<POSTGRES_USER>:<POSTGRES_PASSWORD>@db:5432/<POSTGRES_DB>"
   POSTGRES_USER=
   POSTGRES_PASSWORD=
   POSTGRES_DB=
   COURSES_URL=
   ```
   `COURSES_URL` is the path to the json containing the list of all the courses that will be displayed in the app, the file should looks like this:
   
   ```json
   [
     {
       "course_id": "string",
       "course_title": "string",
       "organization": "string",
       "sessions": [
         {
           "session_name": "string",
           "start_date": "YYYY-MM-DD",
           "end_date": "YYYY-MM-DD",
           "grade_cutoffs": float,
           "session_url": "string"
         }
       ]
     }
   ]
   ```

2. create the `docker-compose.yml` file
   Here is an example:
   
   ```yml
   services:
       db:
           container_name: 'stoocs-db'
           image: postgres
           restart: always
           environment:
               POSTGRES_USER: ${POSTGRES_USER}
               POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
               POSTGRES_DB: ${POSTGRES_DB}
           volumes:
               - db-data:/var/lib/postgresql/data
           healthcheck:
               test: ['CMD-SHELL', 'pg_isready -U ${POSTGRES_USER} -d ${POSTGRES_DB}']
               interval: 10s
               timeout: 10s
               retries: 5
               start_period: 30s
   
       app:
           container_name: 'stoocs'
           restart: always
           env_file:
               - .env
           depends_on:
               db:
                   condition: service_healthy
           build: .
           command: ['/usr/local/bin/startup.sh']
   
       nginx:
           container_name: 'stooocs-nginx'
           image: nginx
           restart: always
           volumes:
               - ./nginx.conf:/etc/nginx/conf.d/default.conf
               # Uncomment the following line to enable SSL
               # - ${SSL_CERT_PATH}:/etc/nginx/ssl:ro
           ports:
               - '80:80'
               - '443:443'
           depends_on:
               - app
   
   volumes:
       db-data:
   
   ```
