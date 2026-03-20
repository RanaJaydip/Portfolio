export default function NotFound() {
  return (
    <div className="py-16">
      <div className="card p-8">
        <p className="text-sm text-muted">404</p>
        <h1 className="mt-2 text-2xl font-semibold text-text">Page not found</h1>
        <p className="mt-2 text-sm text-muted">
          The page you’re looking for doesn’t exist.
        </p>
        <a className="btn btn-primary mt-6" href="/">
          Go home
        </a>
      </div>
    </div>
  );
}

