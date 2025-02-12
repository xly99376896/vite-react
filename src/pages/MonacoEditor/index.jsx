import React from 'react'
import { MonacoEditorCom } from '@/components'

const App = () => {

    const value = `{
        'platform.common.is': '是',
        'platform.common.isfalse': '否',
        'platform.pagination.totaltext': '共{total}条',
        'platform.xmodal.footer.oktext': '确定',
        'platform.xmodal.footer.canceltext': '取消',
        'platform.xmodal.footer.emptytext': '清空',
        'platform.modalfunc.footer.oktext': '确认',
        'platform.dicthelp.column.idtext': '编号',
        'platform.dicthelp.column.nametext': '名称',
        'platform.dicthelp.column.leveltext': '层级',
        'platform.dicthelp.footer.refreshtext': '刷新',
        'platform.dicthelp.footer.casCadetext': '是否选中下级',
        'platform.dicthelp.search.placetext': '请输入检索内容',
        'platform.dicteditor.modal.createtext': '新增{title}',
        'platform.dicteditor.modal.updatetext': '更新{title}',
        'platform.dicteditor.richmodal.titletext': '富文本编辑器',
        'platform.dicteditor.select.allItemtext': '全部',
        'platform.dicteditor.range.placetext0': '开始时间',
        'platform.dicteditor.range.placetext1': '结束时间',
        'platform.dicteditor.date.placetext': '请选择时间',
        'platform.dicteditor.rule.defaulttext': '该字段不能为空！',
        'platform.dicteditor.rule.datettext': '请选择时间',
        'platform.dicteditor.rule.patterntext': '仅能输入 @，-，数字，字母和下划线',
        'platform.dicteditor.rule.numtext': '仅能输入数字',
        'platform.dicteditor.rule.lengthtext': '输入长度超出限制',
        'platform.distributionmodal.usertorole.headertext': '角色分配用户',
        'platform.distributionmodal.usertorole.transferTitletext0': '未选择列表',
        'platform.distributionmodal.usertorole.transferTitletext1': '已选择列表',
    }`

    return (
        <div>
            <MonacoEditorCom value={value} />
        </div>
    );
}

export default App