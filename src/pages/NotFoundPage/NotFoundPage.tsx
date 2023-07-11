import "./NotFoundPage.scss";
import error from "../../assets/images/404-error.svg";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
   return (
      <main className="not-found-page">
         <section className="not-found-page__left-box">

         </section>
         <section className="not-found-page__center-box">
            <h2 className="not-found-page__title">Sorry, page not found</h2>
            <img
               src={error}
               alt="error"
               className="not-found-page__image"
            />
            <Link to={"/signup"} className="not-found-page__back-link">
               Back to Home page
            </Link>
         </section>
         <section className="not-found-page__right-box">
            
         </section>
      </main>
   );
};
