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

	var url_access = base_url+'item/get_categories';
	var table = $("#category").dataTable({
		 initComplete: function() {
				var api = this.api();
				$('#category_filter input')
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
						{"data": "id_category"},
						{"data": "name_category"},
						{"data": "action_category"}
					],
		 		order: [[1, 'asc']],
		 		columnDefs: [{ "orderable": false, "targets": 2 }],
		 rowCallback: function(row, data, iDisplayIndex) {
				var info = this.fnPagingInfo();
				var page = info.iPage;
				var length = info.iLength;
				$('td:eq(0)', row).html();
		 }
	});

	$('#category').on('click','.edit_record',function(){
			var id_category=$(this).data('id_category');
			var name_category=$(this).data('name_category');

			$('#ModalCategoryUpdate').modal('show');
			$('[name="idCategoryUpdate"]').val(id_category);
			$('[name="nameCategoryUpdate"]').val(name_category);
			
	});

	$('#category').on('click','.hapus_record',function(){
			var id=$(this).data('id_category');
			var name=$(this).data('name_category');
			
			$('#ModalCategoryRemove').modal('show');
			$('[name="idCategoryRemove"]').val(id);
			$('[id="nameCategoryRemove"]').text(name);
	});
});