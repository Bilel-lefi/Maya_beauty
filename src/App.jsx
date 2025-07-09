import React from "react";
// import Home from "./components/home";
import fermuture from "./assets/fermuture.png"; // Assurez-vous que l'image est dans le dossier public
function App() {
  return (
    <>
      <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4 text-center">
        <img
          src={fermuture} // Remplace par ton image (mets-la dans le dossier /public)
          alt="Annonce fermeture"
          className="w-full max-w-md rounded-xl shadow-lg mb-6"
        />
        <h1 className="text-2xl font-bold text-pink-800 mb-2">
          Fermeture exceptionnelle
        </h1>
        <p className="text-gray-700 text-lg">
          Votre salon <strong>Maya Beauty</strong> sera fermé du{" "}
          <strong>vendredi 11</strong> au <strong>jeudi 17 juillet</strong>{" "}
          inclus.
        </p>
        <p className="text-gray-700 text-lg mt-2">
          Nous vous accueillerons de nouveau avec le sourire dès le{" "}
          <strong>vendredi 18 juillet 💖</strong>
        </p>
        <p className="text-sm text-gray-600 mt-4">
          Pensez à anticiper vos rendez-vous 🗓
        </p>
      </div>
      {/* <Home /> */}
    </>
  );
}

export default App;
