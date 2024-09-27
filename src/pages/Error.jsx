import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404)
    return (
      <main className="grid min-h-[100vh] bg-accent-content place-items-center px-8 ">
        <div className="text-center">
          <p className="text-9xl font-semibold text-warning">404</p>
          <h1 className="mt-4 text-3xl font-bold text-base-100 tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg text-base-100 leading-7 ">
            Es tut uns leid, wir konnten die von Ihnen gesuchte Seite nicht
            finden.
          </p>
          <p className="mt-6 text-lg text-base-100 leading-7 ">
            Bitte überprüfen Sie die URL oder kehren Sie zur Startseite zurück.
          </p>
          <div className="mt-10 ">
            <Link to="/" className="btn btn-warning">
              zurück Startseite
            </Link>
          </div>
        </div>
      </main>
    );

  return (
    <main className="grid min-h-[100vh] place-items-center px-8 ">
      <h4 className="text-center text-yellow-500 font-bold text-4xl">
        there was an error...{" "}
      </h4>
    </main>
  );
};

export default Error;
