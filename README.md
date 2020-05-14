# apv_positive_faelle

Sammelt [Daten](https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/Inzidenzen/FeatureServer/0/query?f=json&where=ID%3D%2708222%27&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=OBJECTID%20asc&resultOffset=0&resultRecordCount=6&resultType=standard&cacheHint=true) zur Anzahl postiv getesteter Fälle, samt soziodemgrafischen Attributen, ab dem 09.05.20.

Der Scraper läuft in Nodejs auf einer AWS EC2 VM.

Die bisher erfassten Daten sind [hier](https://github.com/Eugen987/apv_positive_faelle/blob/master/data/fallZahlenRKI.csv) verfügbar.
