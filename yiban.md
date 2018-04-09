# 登录接口

{
	"username": "test",
	"password": "test"
}

# 活动申请

{
	"ApplyComp":"申请单位",
	"PeoNum":"参与人数",
	"CompBoss":"负责人(老师)",
	"BossPhone":"老师手机号",
	"CompPeo":"申请人",
	"CompPeoPhone":"申请人手机号",
	"CompPeoEmail":"申请人邮箱",
	"OccupyTimeStart":"起始使用时间",
	"OccupyTimeEnd":"结束使用时间",
	"CompTitle":"活动标题",
	"CompContent":"活动内容",
	"RequireEquipment":"要求设备"
}

PS:后端建立数据库的时候要加入一个字段鉴定是否被审核通过

# 登入页面

## 是否被审核通过

{
	"examine": True or False
}

## 修改已经提交的信息

>接口和申请一样

PS:如果已经审核通过,则不能修改

# 已经被占用时间

{
	"OccupyTime[0]":
	{
		"OccupyTimeStart":"起始使用时间",
		"OccupyTimeEnd":"结束使用时间"
	},
	"OccupyTime[1]":
	{
		"OccupyTimeStart":"起始使用时间",
		"OccupyTimeEnd":"结束使用时间"
	}
	....etc
}

PS:这段json可能有问题,暂定