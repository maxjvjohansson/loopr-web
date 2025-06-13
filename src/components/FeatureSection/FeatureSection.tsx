import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import LandscapeIcon from "@mui/icons-material/Landscape";
import RouteIcon from "@mui/icons-material/Route";

export default function FeatureSection() {
  return (
    <section className="flex justify-center items-center px-8 py-20 bg-white">
      <div className="max-w-4xl w-full text-center space-y-8">
        <h2 className="text-4xl font-bold text-gray-900">
          Smartare golf. Färre dåliga beslut.
        </h2>

        <p className="text-xl text-gray-700">
          Loopr kombinerar din bag, realtidsdata och bana för att hjälpa dig
          fatta bättre beslut, ett slag i taget.
        </p>

        <div className="grid md:grid-cols-3 gap-8 pt-6">
          <div className="space-y-3">
            <div className="mx-auto h-12 w-12 rounded-lg bg-lime-900/10 flex items-center justify-center text-lime-900 text-xl">
              <EmojiObjectsIcon />
            </div>
            <h3 className="font-semibold text-lg text-gray-900">
              Personligt klubbval
            </h3>
            <p className="text-gray-600">
              Dina klubbor, dina längder – Loopr anpassar varje rekommendation
              utifrån hur långt du faktiskt slår.
            </p>
          </div>

          <div className="space-y-3">
            <div className="mx-auto h-12 w-12 rounded-lg bg-lime-900/10 flex items-center justify-center text-lime-900 text-xl">
              <LandscapeIcon />
            </div>
            <h3 className="font-semibold text-lg text-gray-900">
              Vind & höjd i beräkningen
            </h3>
            <p className="text-gray-600">
              Automatisk justering av slaglängd baserat på vindriktning och
              höjdskillnader. Du slår inte lika långt uppför.
            </p>
          </div>

          <div className="space-y-3">
            <div className="mx-auto h-12 w-12 rounded-lg bg-lime-900/10 flex items-center justify-center text-lime-900 text-xl">
              <RouteIcon />
            </div>
            <h3 className="font-semibold text-lg text-gray-900">
              Guidning hål för hål
            </h3>
            <p className="text-gray-600">
              Få en tydlig överblick av varje hål med smarta rekommendationer
              från tee till green.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
