$(document).ready(function(){
	// Setup datatables
	$.fn.dataTableExt.oApi.fnPagingInfo = function(oSettings)
	{
		 return {
			"iStart": oSettings._iDisplayStart,
			"iEnd": oSettings.fnDisplayEnd(),
			"iLength": oSettings._iDisplayLength,
			"iTotal": oSettings.fnRecordsTotal(),
			"iFilteredTotal": oSettings.fnRecordsDisplay(),
			"iPage": Math.ceil(oSettings._iDisplayStart / oSettings._iDisplayLength),
			"iTotalPages": Math.ceil(oSettings.fnRecordsDisplay() / oSettings._iDisplayLength)
		 };
	};

	var url_access = base_url+'item/get_items';

	var branchLength = $('.branchs').length;
	var list = 	[
					{"data": "name_item"},
					{"data": "name_category"},
					{"data": "sale_price"},
				];

	var id = $('[name="branch_0"]').attr('id');
	list.push({"data": "item_store_"+id});
	var roleUser = $('#roleUser').val();
	if(roleUser != 'Kasir'){
		list.push({"data": "action_item"});
	}
	
	var roleUser = $('#roleUser').val();
	if(roleUser != 'Kasir'){
		var table = $("#item").dataTable({
			initComplete: function() {
				var api = this.api();
				$('#item_filter input')
					.off('.DT')
					.on('input.DT', function() {
						 api.search(this.value).draw();
				});
			},
				oLanguage: {
				sProcessing: "loading..."
			},
				processing: true,
				serverSide: true,
				ajax: {"url": url_access, "type": "POST"},
				 	columns: list,
		 		order: [[0, 'asc']],
		 		columnDefs: [
		 			{ "orderable": false, "targets": 4 },
		 			{ "searchable": false, "targets": 3 }
		 		],
			rowCallback: function(row, data, iDisplayIndex) {
				var info = this.fnPagingInfo();
				var page = info.iPage;
				var length = info.iLength;
				$('td:eq(0)', row).html();
				
				$('td:eq(2)', row).html('<span class="number-right">'+currencyFormater(data.sale_price)+'</span>');
				$('td:eq(3)', row).html('<span class="number-right">'+data[list[3].data]+'</span>');	

				$('td:eq(4)', row).html(data.action_item);	
			}
		});
	}else{
		var table = $("#item").dataTable({
			initComplete: function() {
				var api = this.api();
				$('#item_filter input')
					.off('.DT')
					.on('input.DT', function() {
						 api.search(this.value).draw();
				});
			},
				oLanguage: {
				sProcessing: "loading..."
			},
				processing: true,
				serverSide: true,
				ajax: {"url": url_access, "type": "POST"},
				 	columns: list,
		 		order: [[0, 'asc']],
		 		columnDefs: [{ "searchable": false, "targets": 3 }],
			rowCallback: function(row, data, iDisplayIndex) {
				var info = this.fnPagingInfo();
				var page = info.iPage;
				var length = info.iLength;
				$('td:eq(0)', row).html();				
				$('td:eq(2)', row).html('<span class="number-right">'+currencyFormater(data.sale_price)+'</span>');
				$('td:eq(3)', row).html('<span class="number-right">'+data[list[3].data]+'</span>');
			}
		});
	}

	$('#item').on('click','.stock_record',function(){
		var id_item=$(this).data('id_item');
		var name_item=$(this).data('name_item');
		var storage_item=$(this).data('storage_item');
		$('#stockItemUpdate').modal('show');
		$('[name="idItemStock"]').val(id_item);
		$('[name="nameItemStock"]').val(name_item);
		$('[name="storageItemStock"]').val(storage_item);
	})

});