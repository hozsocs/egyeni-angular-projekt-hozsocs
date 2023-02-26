# MuviskGallery indítása:

JSON szervert használok: json-server server\output.json --watch
Az angular projekt az npm start paranccsal lehet indítani.

## A projekt leírása

Ebben a projektben egy valós felmerült igényt próbálok meg feldolgozni, amelyben egy művészeti iskola évek óta felgyűlt képanyagát rendszerezem és teszem szerkeszthetővé.

A feldolgozás során első sorban a feladat leírás paramétereit követtem, de terveim szerint néhány változtatással a valóságbanis integrálható lesz, az intézmény honlapjába.

Fontos elérendő cél volt a főoldalán található összefoglaló, az elérhető tanévekről, amelyből
közvetlenül megnyithatóak az adott tanév képei. A galéria oldalról illetve a tanévekre szűrt aloldalakról bármely képre kattintva a szerkesztő ablakba lépve lehet szerkeszteni az adott kép elemeit!

Az összes rendelkezésre álló adat adatbázisba szervezése után több ezer rekord keletkezett, amelyeket egyelőre benne hagytam, a komplexebb kép kipróbálása miatt. Néhány helyen ezek miatt lassú lett az adatok megjelenése, amelyet a későbbiekben orvosolni kell.

A projekt létrehozásához Bootstrap 5 formázásokat használtam.
