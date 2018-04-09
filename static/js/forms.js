
// 手机号码验证
jQuery.validator.addMethod("isMobile", function(value, element) {
    var length = value.length;
    var mobile = /^(13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/;
    return this.optional(element) || (length == 11 && mobile.test(value));
}, "请正确填写您的手机号码");


$("#FormInfo").validate({
    rules:{
        ApplyComp:"required",
        PeoNum:{
            required : true,
            minlength : 1
        },
        CompBoss:"required",
        BossPhone:{
            required:true,
            minlength:11,
            isMobile:true
        },
        CompPeo:"required",
        CompPeoPhone:{
            required:true,
            minlength:11,
            isMobile:true
        },
        CompPeoEmail:{
            required:true,
            email:true
        },
        OccupyTimeStart:"required",
        OccupyTimeEnd:"required",
        CompTitle:"required",
        CompContent:"required",
        RequireEquipment:"required"

    },
    messages:{
        ApplyComp:"请输入申请单位",
        PeoNum:{
            required:"请输入参与人数",
            minlength:"参与人数应不少于一位"
        },

        CompBoss:"请输入负责人(老师)",
        BossPhone:{
            required : "请输入手机号",
            minlength : "确认手机为11个字符",
            isMobile : "请正确填写您的手机号码"
        },

        CompPeo:"请输入申请人",
        CompPeoPhone:{
            required : "请输入手机号",
            minlength : "确认手机为11个字符",
            isMobile : "请正确填写您的手机号码"
        },
        CompPeoEmail:{
            required:"请输入申请人邮箱",
            email:"请正确输入邮箱"
        },

        OccupyTimeStart:"请输入起始使用时间",
        OccupyTimeEnd:"请输入结束使用时间",

        CompTitle:"请输入活动标题",
        CompContent:"请输入活动内容",
        RequireEquipment:"请输入申请要求设备"
    },
    focusCleanup:true,
    success:"valid",
    submitHandler:function() {
        $.ajax({
            type: 'POST',
            crossDomain: true,
            url: "",//后端接口
            data: JSON.stringify(data),
            dataType: "json",
            complete: function (res) {
                if (res.responseJSON.msg) {
                    alert(res.responseJSON.msg);
                }
                else {
                    alert("服务端发生错误")
                }
                alert("提交成功！");
            }
        });
    }
})