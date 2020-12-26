import request from '@/utils/request'


// 查询菜单列表
export function listMenu(query) {
    return request({
        url: '/sys-menu-api',
        method: 'get',
        params: query
    })
}


//查询菜单树形数据
export function listMenuTree(query) {
    return request({
        url: '/sys-menu-api/tree',
        method: 'get',
        params: query
    })
}
