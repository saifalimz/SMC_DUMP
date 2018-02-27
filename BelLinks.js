var macro; 
macro =  "CODE:";
macro +=  "VERSION BUILD=9030808 RECORDER=FX" + "\n";
macro +=  "SET !ERRORIGNORE YES" + "\n"; 
macro +=  "SET !EXTRACT_TEST_POPUP NO" + "\n"; 
macro +=  "SET !EXTRACT NULL" + "\n";
macro +=  "TAB T=1" + "\n";
macro +=  "TAG POS={{i}} TYPE=A ATTR=HREF:* EXTRACT=HTM" + "\n";
macro +=  "SAVEAS TYPE=EXTRACT FOLDER=C:\\Users\\user\\Desktop\\EmailProject\\EmailData FILE=BelgiumLinks.csv" + "\n";
for (var i=1;i<500;i++)
{

iimSet("i",i)
iimPlay(macro)
}