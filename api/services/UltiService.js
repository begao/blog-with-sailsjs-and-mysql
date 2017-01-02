const crypto = require('crypto');
module.exports = {
	slug: function(title)
    {
        var v_slug;
        //Đổi chữ hoa thành chữ thường
        v_slug = title.toLowerCase();

        //Đổi ký tự có dấu thành không dấu
        v_slug = v_slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
        v_slug = v_slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
        v_slug = v_slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
        v_slug = v_slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
        v_slug = v_slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
        v_slug = v_slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
        v_slug = v_slug.replace(/đ/gi, 'd');
        //Xóa các ký tự đặt biệt
        v_slug = v_slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
        //Đổi khoảng trắng thành ký tự gạch ngang
        v_slug = v_slug.replace(/ /gi, " - ");
        //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
        v_slug = v_slug.replace(/(-+)/g, '-');
        //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
        v_slug = v_slug.replace(/\-\-\-\-\-/gi, '-');
        v_slug = v_slug.replace(/\-\-\-\-/gi, '-');
        v_slug = v_slug.replace(/\-\-\-/gi, '-');
        v_slug = v_slug.replace(/\-\-/gi, '-');
        //Xóa các ký tự gạch ngang ở đầu và cuối
        v_slug = '@' + v_slug + '@';
        v_slug = v_slug.replace(/\@\-|\-\@|\@/gi, '');
        return v_slug;
    },
    randomString: function(len)
    {
        var code = crypto.randomBytes(Math.ceil(len/2))
            .toString('hex')
            .slice(0,len);
        return code.toUpperCase();
    }
}