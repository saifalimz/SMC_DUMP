var macro;
macro +=  "VERSION BUILD=8011895" + "\n"; 
macro +=  "TAB T=1" + "\n"; 
macro +=  "SET !ERRORIGNORE YES" + "\n"; 
macro +=  "SET !EXTRACT_TEST_POPUP NO" + "\n"; 
macro +=  "SET !EXTRACT NULL" + "\n";
macro =  "CODE:";
macro +=  "VERSION BUILD=1001 RECORDER=CR" + "\n";
macro +=  "TAG POS={{i}} TYPE=A ATTR=CLASS:alt-lnk&&TXT:* EXTRACT=TXT" + "\n";
macro +=  "SAVEAS TYPE=EXTRACT FOLDER=C:\\Users\\user\\Desktop\\EmailProject\\EmailData FILE=ArabCompanies.csv" + "\n";
for (var i=2;i<=100000;i++)
{

iimSet("i",i)
iimPlay(macro)
}