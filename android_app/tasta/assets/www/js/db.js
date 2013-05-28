function populateDB_lesson_table(tx) {
	tx.executeSql('DELETE FROM lesson_table'); 
	tx.executeSql('CREATE TABLE IF NOT EXISTS lesson_table (code TEXT)');
	tx.executeSql('INSERT INTO lesson_table (code) VALUES ('+getlesson()+')');
}

function errorCB(err) {
	alert("Error processing SQL: " + err);
}

function successCB() {
//	alert("success!");
}