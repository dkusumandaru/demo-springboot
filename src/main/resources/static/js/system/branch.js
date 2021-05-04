function getBranchName() {
	var value = $('[name="idBranchItemStock"]').val();
	if (value != null) {
		var name = $("select.form-control option[value="+value+"]").text();
		$("[name='nameBranchItemStock']").val(name);
	}
}