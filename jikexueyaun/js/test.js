 $("input[type='file']").change(function() {
        var file = $(this)[0].files[0];
        var id = $(this).attr("data");
        if (file === null || file === undefined) {
            go_error("请选择您要上传的文件！");
            return false;
        }
        //检测文件类型
        if (file.type.indexOf('image') === -1) {
            go_error("您上传的文件无法被检测为图片~，可能是浏览器权限问题。");
            return false;
        }
        var size = Math.floor(file.size / 1024);
        if (size > upload_max * 1000) {
            go_error("上传文件不得超过" + upload_max + "M!");
            return false;
        }
        loading_txt("正在上传图片，请稍等...");
        var file_obj = this.files[0];
        go_upload_upload(file_obj, id,
        function(json) {
            go_with_json(json);
            hide_loading();
        });
    });
    function progress(evt) {
        if (evt.lengthComputable) {
            var per = evt.loaded / evt.total * 100;
            show_loading();
            var percent = per.toFixed(2);
            if (!isNaN(percent)) {
                loading_txt("上传进度：" + percent + "%");
                if (per >= 100) {
                    loading_txt("服务器正在处理您的图片，请稍等...");
                }
            }
        }
    }
    var debug = "";
    function go_upload_upload(content, id, callback) {
        show_loading();
        loading_txt("正在上传，请稍等...");
        var data = new FormData();
        data.append('file', content);
        data.append('type', id);
        $.ajax({
            xhr: function() {
                var xhr = $.ajaxSettings.xhr();
                xhr.upload.addEventListener('progress', progress, false);
                return xhr;
            },
            async: true,
            url: "/user/upload",
            type: "POST",
            dataType: 'json',
            jsonp: 'callback',
            processData: false,
            contentType: false,
            data: data,
            timeout: 60000, //毫秒
            success: function(json) {
                if (typeof callback === 'function') {
                    callback(json);
                }
            },
            error: function(json) {
                go_with_error_json(json);
            },
            complete: function() {}
        });
    }
    function go_error(str){
    }
    function loading_txt(str){
    }
    function go_with_json(str){
    }
    function show_loading(str){
    }
    function hide_loading(){
    }
});