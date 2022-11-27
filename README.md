## Starter template

NextAuth + MongoDB + Credential Sign in + Tailwind Starter template

### Basic Structure

- User model: firstName, lastName, email, password

### Layout

```jsx
  // when true, check for logged in
  <Auth useAuth={boolean} role={""}>
    <> Your component here </>
  </Auth>
```

### Pages Route

- `/auth/register`: registering the user
- `/auth/login`: login the user

### API Route

- `/api/users`:
    - GET: list of all users
    - POST: create a new user
    - PATCH: Login user

### Start the application

To run your site locally, use:

```
npm run dev
```

To run it in production mode, use:

```
npm run build
npm run start
```

### Preparing for Production

Follow the [Deployment documentation](https://next-auth.js.org/deployment)


## License

ISC

