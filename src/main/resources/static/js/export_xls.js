function exportExcel(name, date, id){
	var data_type = 'data:application/vnd.ms-excel';
	var table_div = document.getElementById(id);
	var table_html = table_div.outerHTML.replace(/ /g, '%20');

	var a = document.createElement('a');
	a.href = data_type + ', ' + table_html;
	a.download = 'exported_table_' + name + '_'+date + '.xls';
	a.click();
}