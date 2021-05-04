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

	var url_access = base_url+'discount/get_discounts';
	var table = $("#discount").dataTable({
		 initComplete: function() {
				var api = this.api();
				$('#discount_filter input')
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
				 	columns: [
						{"data": "name_discount"},
						{"data": "create_discount"},
						{"data": "limit_discount"},
						{"data": "require_discount"},
						{"data": "value_discount"},
						{"data": "member_discount"},
						// {"data": "member_discount"},
						{"data": "action_discount"}
					],
				order: [[0, 'asc']],
		 		columnDefs: [
		 			{ "orderable": false, "targets": 6 }
		 		],
		 rowCallback: function(row, data, iDisplayIndex) {
			var info = this.fnPagingInfo();
			var page = info.iPage;
			var length = info.iLength;

			$('td:eq(0)', row).html();			
			$('td:eq(1)', row).html(data.create_discount);

			if (data.requiretype_discount == 'piece') {
				$('td:eq(2)', row).html('<span class="number-right">'+data.require_discount+' /pcs </span>');
			}else if (data.requiretype_discount == 'nominal') {
				$('td:eq(2)', row).html('<span class="number-right">'+currencyFormater(data.require_discount)+'</span>');
			}

			if (data.type_discount == 'percent') {
				$('td:eq(3)', row).html('<span class="number-right"> '+data.value_discount+' % </span>');
			}else if (data.type_discount == 'nominal') {
				$('td:eq(3)', row).html('<span class="number-right"> '+currencyFormater(data.value_discount)+'</span>');
			}

			if (data.status_discount == 'true') {
				var status = '<span class="badge badge-success">'+data.status_discount+'</span>';
				$('td:eq(4)', row).html(status);
			}else if (data.status_discount == 'false') {
				var status = '<span class="badge badge-danger">'+data.status_discount+'</span>';
				$('td:eq(4)', row).html(status);
			}
		 }
	});

	$('#discount').on('click','.edit_record',function(){
		var id_discount=$(this).data('id_discount');
		var name_discount=$(this).data('name_discount');
		var create_discount=$(this).data('create_discount');
		var require_discount=$(this).data('require_discount');
		var requiretype_discount=$(this).data('requiretype_discount');
		var value_discount=$(this).data('value_discount');
		var type_discount=$(this).data('type_discount');
		var status_discount=$(this).data('status_discount');
		var viewRequireDiscountUpdate, viewDiscountUpdate;
		if(requiretype_discount == 'nominal'){
			viewRequireDiscountUpdate = 'Rp. '+currencyFormater(require_discount);
		}else if(type_discount == 'piece'){
			viewRequireDiscountUpdate = require_discount+' */pcs';
		}

		if(type_discount == 'nominal'){
			viewDiscountUpdate = 'Rp. '+currencyFormater(value_discount);
		}else if(type_discount == 'percent'){
			viewDiscountUpdate = value_discount+' %';
		}

		$('#ModalDiscountUpdate').modal('show');
		$('[name="idDiscountUpdate"]').val(id_discount);
		$('[name="nameDiscountUpdate"]').val(name_discount);
		$('[name="dateDiscountUpdate"]').val(create_discount);
		$('[name="statusDiscountUpdate"]').val(String(status_discount));
		$('[name="viewRequireDiscountUpdate"]').val(viewRequireDiscountUpdate);
		$('[name="viewDiscountUpdate"]').val(viewDiscountUpdate);
		
	});

	$('#discount').on('click','.hapus_record',function(){
		var id=$(this).data('id_discount');
		var name=$(this).data('name_discount');
		
		$('#ModalDiscountRemove').modal('show');
		$('[name="idDiscountRemove"]').val(id);
		$('[id="nameDiscountRemove"]').text(name);
	});
});