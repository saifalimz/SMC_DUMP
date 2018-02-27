var macro; 
macro =  "CODE:";
macro +=  "VERSION BUILD=9030808 RECORDER=FX" + "\n";
macro +=  "SET !ERRORIGNORE YES" + "\n"; 
macro +=  "SET !EXTRACT_TEST_POPUP NO" + "\n"; 
macro +=  "SET !EXTRACT NULL" + "\n";
macro +=  "SET !TIMEOUT_STEP 3" + "\n";
macro +=  "TAB T=1" + "\n";
macro +=  "URL GOTO=https://www.top500.de/g0032406.htm" + "\n";
macro +=  "TAG POS={{i}} TYPE=A ATTR=HREF:*" + "\n";
macro +=  "WAIT SECONDS=2" + "\n";
macro +=  "TAG POS=34 TYPE=A ATTR=TXT:* EXTRACT=TXT" + "\n";
macro +=  "SET !ERRORIGNORE NO" + "\n";
macro +=  "URL GOTO={{!EXTRACT}}" + "\n";
macro +=  "WAIT SECONDS=2" + "\n";
macro +=  "TAG POS=1 TYPE=HTML ATTR=TXT:*" + "\n";
macro +=  "" + "\n";
macro +=  "EVENT TYPE=KEYPRESS SELECTOR=\"HTML\" CHAR=\"a\" MODIFIERS=\"ctrl\"" + "\n";
macro +=  "EVENT TYPE=KEYPRESS SELECTOR=\"HTML\" CHAR=\"c\" MODIFIERS=\"ctrl\"" + "\n";
macro +=  "" + "\n";
macro +=  "TAB OPEN" + "\n";
macro +=  "TAB T=2" + "\n";
macro +=  "URL GOTO=http://www.lite14.us/" + "\n";
macro +=  "'URL GOTO=http://eel.surf7.net.my/" + "\n";
macro +=  "TAG POS=1 TYPE=TEXTAREA FORM=NAME:extractor ATTR=NAME:rawdata CONTENT={{!CLIPBOARD}}" + "\n";
macro +=  "WAIT SECONDS=2" + "\n";
macro +=  "TAG POS=1 TYPE=INPUT:BUTTON FORM=NAME:extractor ATTR=*" + "\n";
macro +=  "TAG POS=1 TYPE=TEXTAREA FORM=NAME:extractor ATTR=NAME:rawdata EXTRACT=TXT" + "\n";
macro +=  "SAVEAS TYPE=EXTRACT FOLDER=C:\\Users\\user\\Desktop\\EmailProject\\EmailData FILE=Belgium01.csv" + "\n";
macro +=  "TAB CLOSE" + "\n";
for (var i=1;i<250;i++)
{

iimSet("i",i)
iimPlay(macro)
}