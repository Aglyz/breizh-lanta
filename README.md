# breizh-lanta

# Build & Run Env
*all from project root*
>build
```bash
docker compose build
```

>run
```bash
docker compose up -d
```

>stop
```bash
docker compose down
```

# Access database
>db
```bash
docker compose exec db mysql -u <appuser> -p <monprojet>
```

>exec script
```bash
docker compose exec -T db sh -c "mysql -u\"<appuser>\" -p\"<usermp>\" \"<monprojet>\"" < script.sql
```

# Debug Env
>show
```bash
docker compose ps
```

>logs
```bash
docker compose logs backend
```

# Routes
```http
http://localhost:8080
```
```http
http://localhost:8080/api/health
```
