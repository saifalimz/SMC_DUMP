﻿var macro; 
macro =  "CODE:";
macro +=  "VERSION BUILD=9030808 RECORDER=FX" + "\n";
macro +=  "SET !ERRORIGNORE YES" + "\n"; 
macro +=  "SET !EXTRACT_TEST_POPUP NO" + "\n"; 
macro +=  "SET !EXTRACT NULL" + "\n";
macro +=  "SET !DATASOURCE C:\\Users\\user\\Desktop\\EmailProject\\EmailData\\ArabCompanies.csv" + "\n";
macro +=  "SET !LOOP 1" + "\n";
macro +=  "SET !DATASOURCE_LINE {{!LOOP}}" + "\n";
macro +=  "URL GOTO=https://www.google.com" + "\n";
macro +=  "TAG POS=1 TYPE=INPUT:TEXT FORM=ID:tsf ATTR=ID:lst-ib CONTENT={{!COL1}}" + "\n";
macro +=  "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:tsf ATTR=NAME:btnK" + "\n";
macro +=  "TAG POS=1 TYPE=H3 ATTR=CLASS:\"r\" EXTRACT=HTM" + "\n";
macro +=  "SET !EXTRACT EVAL(\"'{{!EXTRACT}}'.match(/a href=\\\"(.*)\\\" onmousedown=/)[1];\")" + "\n";
macro +=  "WAIT SECONDS=2" + "\n";
macro +=  "URL GOTO={{!EXTRACT}}" + "\n";
macro +=  "SET !EXTRACT_TEST_POPUP NO" + "\n";
macro +=  "TAG POS=1 TYPE=A ATTR=TXT:*Contact*" + "\n";
macro +=  "TAG POS=1 TYPE=A ATTR=TXT:*&&HREF:mailto:* EXTRACT=TXT" + "\n";
macro +=  "SAVEAS TYPE=EXTRACT FOLDER=C:\\Users\\user\\Desktop\\EmailProject\\EmailData FILE=ArabCompaniesEmails.csv" + "\n";
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
macro +=  "SAVEAS TYPE=EXTRACT FOLDER=C:\\Users\\user\\Desktop\\EmailProject\\EmailData FILE=ArabCompaniesEmails.csv" + "\n";
macro +=  "TAB CLOSE" + "\n";
iimPlay(macro)