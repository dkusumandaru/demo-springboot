$(document).ready(function(){
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
					{"data": "buy_price"},
					{"data": "sale_price"},
					{"data": "date_price"},
					{"data": "storage_item"},
					// {"data": "image_item"},
					
				];
	var defC = [
		 			{ "orderable": false, "targets": 8 },
		 		];

	var defCid = 5;
	for (var i = 0; i < branchLength; i++) {
		
		var id = $('[name="branch_'+i+'"]').attr('id');
		list.push({"data": "item_store_"+id});
		defCid = defCid+1;
		defC.push({ "searchable": false, "targets": defCid});
	}
	list.push({"data": "action_item"});

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
		 		columnDefs: defC,
		 rowCallback: function(row, data, iDisplayIndex) {
				var info = this.fnPagingInfo();
				var page = info.iPage;
				var length = info.iLength;
				if(data.image_item != ''){
					$('td:eq(0)', row).html(data.name_item+'<br><img class="preview" src="'+base_url+data.image_item+'">');
				}else{
					$('td:eq(0)', row).html();
				}
				
				$('td:eq(2)', row).html('<span class="number-right">'+currencyFormater(data.buy_price)+'</span>');
				$('td:eq(3)', row).html('<span class="number-right">'+currencyFormater(data.sale_price)+'</span>');
				$('td:eq(5)', row).html('<span class="number-right">'+data.storage_item+'</span>');

				var temp = 6;
				for (var i = 0; i < branchLength; i++) {
					temp = temp+i;
					$('td:eq('+temp+')', row).html('<span class="number-right">'+data[list[temp].data]+'</span>');
				}
		 }
	});

	$('#item').on('click','.edit_record',function(){
			var id_item=$(this).data('id_item');
			var name_item=$(this).data('name_item');
			var image_item=$(this).data('image_item');
			var category_item=$(this).data('id_category');
			
			$('#infoItemUpdate').modal('show');
			$('[name="idItemUpdate"]').val(id_item);
			$('[name="nameItemUpdate"]').val(name_item);
			$('[name="categoryItemUpdate"]').val(category_item);
			$('[name="imagetempItemUpdate"]').val(image_item);
	});

	$('#item').on('click','.price_record',function(){
			var id_item=$(this).data('id_item');
			var name_item=$(this).data('name_item');
			var buy_price=$(this).data('buy_price');
			var sale_price=$(this).data('sale_price');
			$('#priceItemUpdate').modal('show');
			$('[name="idItemPrice"]').val(id_item);
			$('[name="nameItemPrice"]').val(name_item);
			$('[name="buyItemPrice"]').val(buy_price);
			$('[name="saleItemPrice"]').val(sale_price);
	});

	$('#item').on('click','.stock_record',function(){
		var id_item=$(this).data('id_item');
		var name_item=$(this).data('name_item');
		var storage_item=$(this).data('storage_item');
		$('#stockItemUpdate').modal('show');
		$('[name="idItemStock"]').val(id_item);
		$('[name="nameItemStock"]').val(name_item);
		$('[name="storageItemStock"]').val(storage_item);
	})

	$('#item').on('click','.hapus_record',function(){
			var id=$(this).data('id_item');
			var name=$(this).data('name_item');
			$('#ModalItemRemove').modal('show');
			$('[name="idItemRemove"]').val(id);
			$('[id="nameItemRemove"]').text(name);
	});
});