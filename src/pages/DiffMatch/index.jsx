import { CodeDiff } from '@/components'

export default function App () {

    const firstValue = '{"groupScopes":[{"conds":[],"groupMemberMap":{"APPGROUP":"DEFAULT"},"items":[],"scopeSelect":"ALL"}],"groups":[{"factCol":"F_APP_ID","fdictId":"ACT_ORG_APPID","fdictStyle":"select","fdictType":"CATEGORY","fdictWhere":"","fid":"APPGROUP","fname":"应用分组","fobjectId":"SYS_ORG","forder":1}],"object":{"fabbr":"SYS_ORG","factColAux":"","factColObject":"F_BH","factColUser":"USR_ID","factId":"SYS_ORG_ACT","fcheck":"YES","fdictId":"SYS_ORG","fdictType":"DICT","fdictWhere":"","fid":"SYS_ORG","fnote":"","forder":"1","fparent":"","ftype":"OBJECT","fuseRole":"0","fuseUser":"1"},"operations":[{"factId":"F_G00","feffect":"SELF","fid":"LOGIN","fname":"登陆","fnote":"","fobjectId":"SYS_ORG","forder":1,"ftype":"CHECKBOX999"},{"factId":"F_G01","feffect":"SELF","fid":"APPROVAL","fname":"审批","fnote":"","fobjectId":"SYS_ORG000","forder":2,"ftype":"CHECKBOX"},{"factId":"F_G02","feffect":"SELF","fid":"ASSIGN","fname":"分配","fnote":"","fobjectId":"SYS_ORG","forder":3,"ftype":"CHECKBOX"},{"factId":"F_G03","feffect":"SELF","fid":"QUERY","fname":"查询","fnote":"","fobjectId":"SYS_ORG","forder":4,"ftype":"CHECKBOX"}]}'
    const secondValue = '{"groupScopes":[{"conds":[],"groupMemberMap":{"APPGROUP":"DEFAULT"},"items":[],"scopeSelect":"ALL"}],"groups":[{"factCol":"F_APP_ID","fdictId":"ACT_ORG_APPID","fdictStyle":"select","fdictWhere":"","fid":"APPGROUP","fobjectId":"SYS_ORG","forder":1}],"object":{"fabbr":"SYS_ORG","factColAux":"","factColMask":"F_GRAN","factColObject":"F_BH","factColUser":"USR_ID","factId":"SYS_ORG_ACT","fcheck":"YES","fdictId":"SYS_ORG","fdictType":"DICT","fdictWhere":"","fid":"SYS_ORG","fname":"机构权限","fnote":"","forder":"1","fparent":"","ftype":"OBJECT","fuseRole":"0","fuseUser":"1"},"operations":[{"factId":"F_G00","feffect":"SELF","fid":"LOGIN","fname":"登陆","fnote":"","fobjectId":"SYS_ORG","forder":1,"ftype":"CHECKBOX"},{"factId":"F_G01","feffect":"SELF","fid":"APPROVAL","fname":"审批","fnote":"","fobjectId":"SYS_ORG","forder":2,"ftype":"CHECKBOX"},{"factId":"F_G02","feffect":"SELF","fid":"ASSIGN","fname":"分配","fnote":"","fobjectId":"SYS_ORG","forder":3,"ftype":"CHECKBOX"},{"factId":"F_G03","feffect":"SELF","fid":"QUERY","fname":"查询","fnote":"","fobjectId":"SYS_ORG","forder":4,"ftype":"CHECKBOX"}]}'

    return (
        <div>
            <CodeDiff firstValue={firstValue} secondValue={secondValue} />
        </div>
    )

}
