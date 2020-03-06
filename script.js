 function inputPeserta(ev) {

        // console.log(ev);

        var tr_len = $(".tr-forum").length;
        var tbody_count = $("#tbody-forum").children().last().data("inc");
        var count_class = !tbody_count ? 0 : (parseInt(tbody_count));

        var kat_id = $("select[name=kategori] option:selected").val();
        var kat_text = $("select[name=kategori] option:selected").text();

        var role_id = $("select[name=roles] option:selected").val();
        var role_text = $("select[name=roles] option:selected").text();

        var pers_id = $("select[name=pers] option:selected").val();
        var pers_text = $("select[name=pers] option:selected").text();

        if (kat_id && role_id) {
            for (let index = 1; index <= tr_len; index++) {
                if ($("#kategori-" + index).val() == kat_id && $("#role-" + index).val() == role_id) {
                    swal("Perhatian", "kategori sudah ada !!", "warning");
                    return;
                }
            }
            if (tr_len == 0) {
                $("#tbody-forum").html("")
            }
            var frame = "<tr class='tr-forum' data-inc='" + (count_class + 1) + "' id='tr-comp-" + (count_class + 1) + "' >" +
                "<td class='text-center align-middle numberic' id='text-number" + (count_class + 1) + "'>" + +"</td>" +
                "<td class='text-center align-middle' id='text-kategori-" + (count_class + 1) + "' > <input type='hidden' readonly name='kategori[]' value='" + kat_id + "' id='kategori-" + (count_class + 1) + "' >" + kat_text + " </td>" +
                "<td class='text-center align-middle' id='text-role-" + (count_class + 1) + "' >" + role_text + "<input type='hidden' id='role-" + (count_class + 1) + "' name='role[]' readonly class='form-control' value='" + role_id + "'></td>" +
                "<td class='text-center align-middle' id='text-pers-" + (count_class + 1) + "' >" + pers_text + "<input type='hidden' id='pers-" + (count_class + 1) + "' name='pers[]' readonly class='form-control' value='" + pers_id + "'></td>" +
                "<td class='text-center align-middle' id='action-del-" + (count_class + 1) + "'><a  role='button' class='btn btn-sm btn-light disabled' id='tr-action-" + (count_class + 1) + "' ><i class='fas fa-trash text-white'></i></a></td>" +
                "</tr>"
            $("#tbody-gaji").append(frame);
            setTimeout(() => {
                $("#tr-action-" + (count_class + 1)).attr("onclick", "gatDel(this," + (count_class + 1) + ")").removeClass('disabled').toggleClass("btn-light btn-danger");
            }, 200)
        } else {
            swal("perhatian", "Kompensasi atau gaji harus di isi !!", "warning");
        }
    }

    function gatDel(ev, y) {
        // console.log(ev);
        // console.log(y);
        $("#tr-comp-" + y).remove();
        var class_c = $(".tr-compensasi").length;
        if (class_c == 0) {
            $("#tbody-gaji").html("<tr><td class='text-center align-middle' colspan='3'> Gaji belum ada </td></tr>");
        }
    }
