export interface paths {
  '/api/createApi': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 创建基础api */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['system.SysApi']
        }
      }
      responses: {
        /** @description 创建基础api */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/deleteApi': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 删除api */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['system.SysApi']
        }
      }
      responses: {
        /** @description 删除api */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/deleteApisByIds': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    /** 删除选中Api */
    delete: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.IdsReq']
        }
      }
      responses: {
        /** @description 删除选中Api */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/enterSyncApi': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 确认同步API */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 确认同步API */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/freshCasbin': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 刷新casbin缓存 */
    get: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 刷新成功 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/getAllApis': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 获取所有的Api 不分页 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 获取所有的Api 不分页,返回包括api列表 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['response.SysAPIListResponse']
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/getApiById': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 根据id获取api */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.GetById']
        }
      }
      responses: {
        /** @description 根据id获取api,返回包括api详情 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['response.SysAPIResponse']
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/getApiGroups': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 获取API分组 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 获取API分组 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/getApiList': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 分页获取API列表 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.SearchApiParams']
        }
      }
      responses: {
        /** @description 分页获取API列表,返回包括列表,总数,页码,每页数量 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['response.PageResult']
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/syncApi': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 同步API */
    get: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 同步API */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/updateApi': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 修改基础api */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['system.SysApi']
        }
      }
      responses: {
        /** @description 修改基础api */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/api/ignoreApi': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 忽略API */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 同步API */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/authority/copyAuthority': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 拷贝角色 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['response.SysAuthorityCopyResponse']
        }
      }
      responses: {
        /** @description 拷贝角色,返回包括系统角色详情 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['response.SysAuthorityResponse']
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/authority/createAuthority': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 创建角色 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['system.SysAuthority']
        }
      }
      responses: {
        /** @description 创建角色,返回包括系统角色详情 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['response.SysAuthorityResponse']
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/authority/deleteAuthority': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 删除角色 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['system.SysAuthority']
        }
      }
      responses: {
        /** @description 删除角色 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/authority/getAuthorityList': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 分页获取角色列表 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': null
        }
      }
      responses: {
        /** @description 分页获取角色列表,返回包括列表,总数,页码,每页数量 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['system.SysAuthority'][]
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/authority/setDataAuthority': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 设置角色资源权限 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['system.SysAuthority']
        }
      }
      responses: {
        /** @description 设置角色资源权限 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/authority/updateAuthority': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /** 更新角色信息 */
    put: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['system.SysAuthority']
        }
      }
      responses: {
        /** @description 更新角色信息,返回包括系统角色详情 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['response.SysAuthorityResponse']
              msg?: string
            }
          }
        }
      }
    }
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/authorityBtn/canRemoveAuthorityBtn': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 设置权限按钮 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 删除成功 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/authorityBtn/getAuthorityBtn': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 获取权限按钮 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.SysAuthorityBtnReq']
        }
      }
      responses: {
        /** @description 返回列表成功 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['response.SysAuthorityBtnRes']
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/authorityBtn/setAuthorityBtn': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 设置权限按钮 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.SysAuthorityBtnReq']
        }
      }
      responses: {
        /** @description 返回列表成功 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoCode/addFunc': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 增加方法 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.AutoCode']
        }
      }
      responses: {
        /** @description {"success":true,"data":{},"msg":"创建成功"} */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': string
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoCode/createPackage': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 创建package */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.SysAutoCodePackageCreate']
        }
      }
      responses: {
        /** @description 创建package成功 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: {
                [key: string]: unknown
              }
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoCode/getPackage': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 获取package */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 创建package成功 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: {
                [key: string]: unknown
              }
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoCode/getTemplates': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取package */
    get: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 创建package成功 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: {
                [key: string]: unknown
              }
              msg?: string
            }
          }
        }
      }
    }
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoCode/createTemp': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 自动代码模板 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.AutoCode']
        }
      }
      responses: {
        /** @description {"success":true,"data":{},"msg":"创建成功"} */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': string
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoCode/preview': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 预览创建后的代码 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.AutoCode']
        }
      }
      responses: {
        /** @description 预览创建后的代码 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: {
                [key: string]: unknown
              }
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoCode/delPackage': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 删除package */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.GetById']
        }
      }
      responses: {
        /** @description 删除package成功 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: {
                [key: string]: unknown
              }
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoCode/delSysHistory': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 删除回滚记录 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.GetById']
        }
      }
      responses: {
        /** @description 删除回滚记录 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoCode/getColumn': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取当前表所有字段 */
    get: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 获取当前表所有字段 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: {
                [key: string]: unknown
              }
              msg?: string
            }
          }
        }
      }
    }
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoCode/getDatabase': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取当前所有数据库 */
    get: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 获取当前所有数据库 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: {
                [key: string]: unknown
              }
              msg?: string
            }
          }
        }
      }
    }
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoCode/getMeta': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 获取meta信息 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.GetById']
        }
      }
      responses: {
        /** @description 获取meta信息 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: {
                [key: string]: unknown
              }
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoCode/getSysHistory': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 查询回滚记录 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.PageInfo']
        }
      }
      responses: {
        /** @description 查询回滚记录,返回包括列表,总数,页码,每页数量 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['response.PageResult']
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoCode/getTables': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取当前数据库所有表 */
    get: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 获取当前数据库所有表 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: {
                [key: string]: unknown
              }
              msg?: string
            }
          }
        }
      }
    }
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoCode/rollback': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 回滚自动生成代码 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.SysAutoHistoryRollBack']
        }
      }
      responses: {
        /** @description 回滚自动生成代码 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoCode/installPlugin': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 安装插件 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          'multipart/form-data': {
            /**
             * Format: binary
             * @description this is a test file
             * @example
             */
            plug: string
          }
        }
      }
      responses: {
        /** @description 安装插件成功 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: Record<string, never>[]
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/autoCode/pubPlug': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 打包插件 */
    get: {
      parameters: {
        query: {
          /** @description 插件名称 */
          plugName: string
        }
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 打包插件成功 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: {
                [key: string]: unknown
              }
              msg?: string
            }
          }
        }
      }
    }
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/base/captcha': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 生成验证码 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 生成验证码,返回包括随机数id,base64,验证码长度,是否开启验证码 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['response.SysCaptchaResponse']
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/base/login': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 用户登录 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.Login']
        }
      }
      responses: {
        /** @description 返回包括用户信息,token,过期时间 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['response.LoginResponse']
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/casbin/UpdateCasbin': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 更新角色api权限 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.CasbinInReceive']
        }
      }
      responses: {
        /** @description 更新角色api权限 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/casbin/getPolicyPathByAuthorityId': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 获取权限列表 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.CasbinInReceive']
        }
      }
      responses: {
        /** @description 获取权限列表,返回包括casbin详情列表 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['response.PolicyPathResponse']
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/customer/customer': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取单一客户信息 */
    get: {
      parameters: {
        query?: {
          /** @description 主键ID */
          ID?: number
          /** @description 创建时间 */
          createdAt?: string
          /** @description 客户名 */
          customerName?: string
          /** @description 客户手机号 */
          customerPhoneData?: string
          /** @description 管理角色ID */
          sysUserAuthorityID?: number
          /** @description 管理ID */
          sysUserId?: number
          /** @description 更新时间 */
          updatedAt?: string
        }
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 获取单一客户信息,返回包括客户详情 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['response.ExaCustomerResponse']
              msg?: string
            }
          }
        }
      }
    }
    /** 更新客户信息 */
    put: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['example.ExaCustomer']
        }
      }
      responses: {
        /** @description 更新客户信息 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    /** 创建客户 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['example.ExaCustomer']
        }
      }
      responses: {
        /** @description 创建客户 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    /** 删除客户 */
    delete: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['example.ExaCustomer']
        }
      }
      responses: {
        /** @description 删除客户 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/customer/customerList': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 分页获取权限客户列表 */
    get: {
      parameters: {
        query?: {
          /** @description 关键字 */
          keyword?: string
          /** @description 页码 */
          page?: number
          /** @description 每页大小 */
          pageSize?: number
        }
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 分页获取权限客户列表,返回包括列表,总数,页码,每页数量 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['response.PageResult']
              msg?: string
            }
          }
        }
      }
    }
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/email/emailTest': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 发送测试邮件 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description {"success":true,"data":{},"msg":"发送成功"} */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': string
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/email/sendEmail': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 发送邮件 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['response.Email']
        }
      }
      responses: {
        /** @description {"success":true,"data":{},"msg":"发送成功"} */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': string
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/system/getServerInfo': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 获取服务器信息 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 获取服务器信息 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: {
                [key: string]: unknown
              }
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/system/getSystemConfig': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 获取配置文件内容 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 获取配置文件内容,返回包括系统配置 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['response.SysConfigResponse']
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/system/reloadSystem': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 重启系统 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 重启系统 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/system/setSystemConfig': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 设置配置文件内容 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['system.System']
        }
      }
      responses: {
        /** @description 设置配置文件内容 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/fileUploadAndDownload/breakpointContinue': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 断点续传到服务器 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          'multipart/form-data': {
            /**
             * Format: binary
             * @description an example for breakpoint resume, 断点续传示例
             * @example
             */
            file: string
          }
        }
      }
      responses: {
        /** @description 断点续传到服务器 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/fileUploadAndDownload/deleteFile': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 删除文件 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['example.ExaFileUploadAndDownload']
        }
      }
      responses: {
        /** @description 删除文件 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/fileUploadAndDownload/findFile': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 创建文件 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          'multipart/form-data': {
            /**
             * Format: binary
             * @description 上传文件完成
             * @example
             */
            file: string
          }
        }
      }
      responses: {
        /** @description 创建文件,返回包括文件路径 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['response.FilePathResponse']
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/fileUploadAndDownload/getFileList': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 分页文件列表 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.PageInfo']
        }
      }
      responses: {
        /** @description 分页文件列表,返回包括列表,总数,页码,每页数量 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['response.PageResult']
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/fileUploadAndDownload/removeChunk': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 删除切片 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          'multipart/form-data': {
            /**
             * Format: binary
             * @description 删除缓存切片
             * @example
             */
            file: string
          }
        }
      }
      responses: {
        /** @description 删除切片 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/fileUploadAndDownload/upload': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 上传文件示例 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          'multipart/form-data': {
            /**
             * Format: binary
             * @description 上传文件示例
             * @example
             */
            file: string
          }
        }
      }
      responses: {
        /** @description 上传文件示例,返回包括文件详情 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['response.ExaFileResponse']
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/info/createInfo': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 创建公告 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['model.Info']
        }
      }
      responses: {
        /** @description 创建成功 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/info/deleteInfo': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    /** 删除公告 */
    delete: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['model.Info']
        }
      }
      responses: {
        /** @description 删除成功 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/info/deleteInfoByIds': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    /** 批量删除公告 */
    delete: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 批量删除成功 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/info/findInfo': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 用id查询公告 */
    get: {
      parameters: {
        query?: {
          /** @description 主键ID */
          ID?: number
          /** @description 内容 */
          content?: string
          /** @description 创建时间 */
          createdAt?: string
          /** @description 标题 */
          title?: string
          /** @description 更新时间 */
          updatedAt?: string
          /** @description 作者 */
          userID?: number
        }
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 查询成功 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['model.Info']
              msg?: string
            }
          }
        }
      }
    }
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/info/getInfoDataSource': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取Info的数据源 */
    get: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 查询成功 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: Record<string, never>
              msg?: string
            }
          }
        }
      }
    }
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/info/getInfoList': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 分页获取公告列表 */
    get: {
      parameters: {
        query?: {
          endCreatedAt?: string
          /** @description 关键字 */
          keyword?: string
          /** @description 页码 */
          page?: number
          /** @description 每页大小 */
          pageSize?: number
          startCreatedAt?: string
        }
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 获取成功 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['response.PageResult']
              msg?: string
            }
          }
        }
      }
    }
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/info/getInfoPublic': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 不需要鉴权的公告接口 */
    get: {
      parameters: {
        query?: {
          endCreatedAt?: string
          /** @description 关键字 */
          keyword?: string
          /** @description 页码 */
          page?: number
          /** @description 每页大小 */
          pageSize?: number
          startCreatedAt?: string
        }
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 获取成功 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: Record<string, never>
              msg?: string
            }
          }
        }
      }
    }
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/info/updateInfo': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /** 更新公告 */
    put: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['model.Info']
        }
      }
      responses: {
        /** @description 更新成功 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/init/checkdb': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 初始化用户数据库 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 初始化用户数据库 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: {
                [key: string]: unknown
              }
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/init/initdb': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 初始化用户数据库 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.InitDB']
        }
      }
      responses: {
        /** @description 初始化用户数据库 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/jwt/jsonInBlacklist': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** jwt加入黑名单 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description jwt加入黑名单 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/menu/addBaseMenu': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 新增菜单 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['system.SysBaseMenu']
        }
      }
      responses: {
        /** @description 新增菜单 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/menu/deleteBaseMenu': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 删除菜单 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.GetById']
        }
      }
      responses: {
        /** @description 删除菜单 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/menu/getBaseMenuById': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 根据id获取菜单 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.GetById']
        }
      }
      responses: {
        /** @description 根据id获取菜单,返回包括系统菜单列表 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['response.SysBaseMenuResponse']
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/menu/getMenuList': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 分页获取基础menu列表 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 分页获取基础menu列表,返回包括列表,总数,页码,每页数量 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['system.SysMenu'][]
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/menu/updateBaseMenu': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 更新菜单 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['system.SysBaseMenu']
        }
      }
      responses: {
        /** @description 更新菜单 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/menu/addMenuAuthority': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 增加menu和角色关联关系 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.AddMenuAuthorityInfo']
        }
      }
      responses: {
        /** @description 增加menu和角色关联关系 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/menu/getBaseMenuTree': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 获取用户动态路由 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.Empty']
        }
      }
      responses: {
        /** @description 获取用户动态路由,返回包括系统菜单列表 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['response.SysBaseMenusResponse']
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/menu/getMenu': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 获取用户动态路由 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.Empty']
        }
      }
      responses: {
        /** @description 获取用户动态路由,返回包括系统菜单详情列表 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['response.SysMenusResponse']
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/menu/getMenuAuthority': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 获取指定角色menu */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.GetAuthorityId']
        }
      }
      responses: {
        /** @description 获取指定角色menu */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: {
                menus: components['schemas']['system.SysMenu'][]
              } & {
                [key: string]: unknown
              }
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sysDictionary/createSysDictionary': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 创建SysDictionary */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['system.SysDictionary']
        }
      }
      responses: {
        /** @description 创建SysDictionary */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sysDictionary/deleteSysDictionary': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    /** 删除SysDictionary */
    delete: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['system.SysDictionary']
        }
      }
      responses: {
        /** @description 删除SysDictionary */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sysDictionary/findSysDictionary': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 用id查询SysDictionary */
    get: {
      parameters: {
        query?: {
          /** @description 主键ID */
          ID?: number
          /** @description 创建时间 */
          createdAt?: string
          /** @description 描述 */
          desc?: string
          /** @description 字典名（中） */
          name?: string
          /** @description 状态 */
          status?: boolean
          /** @description 字典名（英） */
          type?: string
          /** @description 更新时间 */
          updatedAt?: string
        }
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 用id查询SysDictionary */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: {
                [key: string]: unknown
              }
              msg?: string
            }
          }
        }
      }
    }
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sysDictionary/getSysDictionaryList': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 分页获取SysDictionary列表 */
    get: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 分页获取SysDictionary列表,返回包括列表,总数,页码,每页数量 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['response.PageResult']
              msg?: string
            }
          }
        }
      }
    }
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sysDictionary/updateSysDictionary': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /** 更新SysDictionary */
    put: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['system.SysDictionary']
        }
      }
      responses: {
        /** @description 更新SysDictionary */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sysDictionaryDetail/createSysDictionaryDetail': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 创建SysDictionaryDetail */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['system.SysDictionaryDetail']
        }
      }
      responses: {
        /** @description 创建SysDictionaryDetail */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sysDictionaryDetail/deleteSysDictionaryDetail': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    /** 删除SysDictionaryDetail */
    delete: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['system.SysDictionaryDetail']
        }
      }
      responses: {
        /** @description 删除SysDictionaryDetail */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sysDictionaryDetail/findSysDictionaryDetail': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 用id查询SysDictionaryDetail */
    get: {
      parameters: {
        query?: {
          /** @description 主键ID */
          ID?: number
          /** @description 创建时间 */
          createdAt?: string
          /** @description 扩展值 */
          extend?: string
          /** @description 展示值 */
          label?: string
          /** @description 排序标记 */
          sort?: number
          /** @description 启用状态 */
          status?: boolean
          /** @description 关联标记 */
          sysDictionaryID?: number
          /** @description 更新时间 */
          updatedAt?: string
          /** @description 字典值 */
          value?: string
        }
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 用id查询SysDictionaryDetail */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: {
                [key: string]: unknown
              }
              msg?: string
            }
          }
        }
      }
    }
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sysDictionaryDetail/getSysDictionaryDetailList': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 分页获取SysDictionaryDetail列表 */
    get: {
      parameters: {
        query?: {
          /** @description 主键ID */
          ID?: number
          /** @description 创建时间 */
          createdAt?: string
          /** @description 扩展值 */
          extend?: string
          /** @description 关键字 */
          keyword?: string
          /** @description 展示值 */
          label?: string
          /** @description 页码 */
          page?: number
          /** @description 每页大小 */
          pageSize?: number
          /** @description 排序标记 */
          sort?: number
          /** @description 启用状态 */
          status?: boolean
          /** @description 关联标记 */
          sysDictionaryID?: number
          /** @description 更新时间 */
          updatedAt?: string
          /** @description 字典值 */
          value?: string
        }
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 分页获取SysDictionaryDetail列表,返回包括列表,总数,页码,每页数量 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['response.PageResult']
              msg?: string
            }
          }
        }
      }
    }
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sysDictionaryDetail/updateSysDictionaryDetail': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /** 更新SysDictionaryDetail */
    put: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['system.SysDictionaryDetail']
        }
      }
      responses: {
        /** @description 更新SysDictionaryDetail */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sysExportTemplate/createSysExportTemplate': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 创建导出模板 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['system.SysExportTemplate']
        }
      }
      responses: {
        /** @description {"success":true,"data":{},"msg":"创建成功"} */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': string
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sysExportTemplate/deleteSysExportTemplate': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    /** 删除导出模板 */
    delete: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['system.SysExportTemplate']
        }
      }
      responses: {
        /** @description {"success":true,"data":{},"msg":"删除成功"} */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': string
          }
        }
      }
    }
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sysExportTemplate/deleteSysExportTemplateByIds': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    /** 批量删除导出模板 */
    delete: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.IdsReq']
        }
      }
      responses: {
        /** @description {"success":true,"data":{},"msg":"批量删除成功"} */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': string
          }
        }
      }
    }
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sysExportTemplate/exportExcel': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 导出表格模板 */
    get: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': Record<string, never>
          }
        }
      }
    }
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sysExportTemplate/findSysExportTemplate': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 用id查询导出模板 */
    get: {
      parameters: {
        query?: {
          /** @description 主键ID */
          ID?: number
          /** @description 创建时间 */
          createdAt?: string
          /** @description 数据库名称 */
          dbName?: string
          limit?: number
          /** @description 模板名称 */
          name?: string
          order?: string
          /** @description 表名称 */
          tableName?: string
          /** @description 模板标识 */
          templateID?: string
          /** @description 模板信息 */
          templateInfo?: string
          /** @description 更新时间 */
          updatedAt?: string
        }
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description {"success":true,"data":{},"msg":"查询成功"} */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': string
          }
        }
      }
    }
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sysExportTemplate/getSysExportTemplateList': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 分页获取导出模板列表 */
    get: {
      parameters: {
        query?: {
          /** @description 主键ID */
          ID?: number
          /** @description 创建时间 */
          createdAt?: string
          /** @description 数据库名称 */
          dbName?: string
          endCreatedAt?: string
          /** @description 关键字 */
          keyword?: string
          limit?: number
          /** @description 模板名称 */
          name?: string
          order?: string
          /** @description 页码 */
          page?: number
          /** @description 每页大小 */
          pageSize?: number
          startCreatedAt?: string
          /** @description 表名称 */
          tableName?: string
          /** @description 模板标识 */
          templateID?: string
          /** @description 模板信息 */
          templateInfo?: string
          /** @description 更新时间 */
          updatedAt?: string
        }
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description {"success":true,"data":{},"msg":"获取成功"} */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': string
          }
        }
      }
    }
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sysExportTemplate/updateSysExportTemplate': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /** 更新导出模板 */
    put: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['system.SysExportTemplate']
        }
      }
      responses: {
        /** @description {"success":true,"data":{},"msg":"更新成功"} */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': string
          }
        }
      }
    }
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sysExportTemplate/importExcel': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 导入表格 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': Record<string, never>
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sysOperationRecord/createSysOperationRecord': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 创建SysOperationRecord */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['system.SysOperationRecord']
        }
      }
      responses: {
        /** @description 创建SysOperationRecord */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sysOperationRecord/deleteSysOperationRecord': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    /** 删除SysOperationRecord */
    delete: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['system.SysOperationRecord']
        }
      }
      responses: {
        /** @description 删除SysOperationRecord */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sysOperationRecord/deleteSysOperationRecordByIds': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    /** 批量删除SysOperationRecord */
    delete: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.IdsReq']
        }
      }
      responses: {
        /** @description 批量删除SysOperationRecord */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sysOperationRecord/findSysOperationRecord': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 用id查询SysOperationRecord */
    get: {
      parameters: {
        query?: {
          /** @description 主键ID */
          ID?: number
          /** @description 代理 */
          agent?: string
          /** @description 请求Body */
          body?: string
          /** @description 创建时间 */
          createdAt?: string
          /** @description 错误信息 */
          error_message?: string
          /** @description 请求ip */
          ip?: string
          /** @description 延迟 */
          latency?: string
          /** @description 请求方法 */
          method?: string
          /** @description 请求路径 */
          path?: string
          /** @description 响应Body */
          resp?: string
          /** @description 请求状态 */
          status?: number
          /** @description 更新时间 */
          updatedAt?: string
          /** @description 用户id */
          user_id?: number
        }
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 用id查询SysOperationRecord */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: {
                [key: string]: unknown
              }
              msg?: string
            }
          }
        }
      }
    }
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/sysOperationRecord/getSysOperationRecordList': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 分页获取SysOperationRecord列表 */
    get: {
      parameters: {
        query?: {
          /** @description 主键ID */
          ID?: number
          /** @description 代理 */
          agent?: string
          /** @description 请求Body */
          body?: string
          /** @description 创建时间 */
          createdAt?: string
          /** @description 错误信息 */
          error_message?: string
          /** @description 请求ip */
          ip?: string
          /** @description 关键字 */
          keyword?: string
          /** @description 延迟 */
          latency?: string
          /** @description 请求方法 */
          method?: string
          /** @description 页码 */
          page?: number
          /** @description 每页大小 */
          pageSize?: number
          /** @description 请求路径 */
          path?: string
          /** @description 响应Body */
          resp?: string
          /** @description 请求状态 */
          status?: number
          /** @description 更新时间 */
          updatedAt?: string
          /** @description 用户id */
          user_id?: number
        }
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 分页获取SysOperationRecord列表,返回包括列表,总数,页码,每页数量 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['response.PageResult']
              msg?: string
            }
          }
        }
      }
    }
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/user/SetSelfInfo': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /** 设置用户信息 */
    put: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['system.SysUser']
        }
      }
      responses: {
        /** @description 设置用户信息 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: {
                [key: string]: unknown
              }
              msg?: string
            }
          }
        }
      }
    }
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/user/admin_register': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 用户注册账号 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.Register']
        }
      }
      responses: {
        /** @description 用户注册账号,返回包括用户信息 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['response.SysUserResponse']
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/user/changePassword': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 用户修改密码 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.ChangePasswordReq']
        }
      }
      responses: {
        /** @description 用户修改密码 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/user/deleteUser': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    post?: never
    /** 删除用户 */
    delete: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.GetById']
        }
      }
      responses: {
        /** @description 删除用户 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/user/getUserInfo': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    /** 获取用户信息 */
    get: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: never
      responses: {
        /** @description 获取用户信息 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: {
                [key: string]: unknown
              }
              msg?: string
            }
          }
        }
      }
    }
    put?: never
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/user/getUserList': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 分页获取用户列表 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.PageInfo'] & components['schemas']['system.SysUserRequest']
        }
      }
      responses: {
        /** @description 分页获取用户列表,返回包括列表,总数,页码,每页数量 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: components['schemas']['response.PageResult']
              msg?: string
            } & {
              data: {
                list: components['schemas']['system.SysUser'][]
              }
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/user/resetPassword': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 重置用户密码 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['system.SysUser']
        }
      }
      responses: {
        /** @description 重置用户密码 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/user/setUserAuthorities': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 设置用户权限 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.SetUserAuthorities']
        }
      }
      responses: {
        /** @description 设置用户权限 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/user/setUserAuthority': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    put?: never
    /** 更改用户权限 */
    post: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['request.SetUserAuth']
        }
      }
      responses: {
        /** @description 设置用户权限 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              msg?: string
            }
          }
        }
      }
    }
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
  '/user/setUserInfo': {
    parameters: {
      query?: never
      header?: never
      path?: never
      cookie?: never
    }
    get?: never
    /** 设置用户信息 */
    put: {
      parameters: {
        query?: never
        header?: never
        path?: never
        cookie?: never
      }
      requestBody?: {
        content: {
          /** @example  */
          'application/json': components['schemas']['system.SysUser']
        }
      }
      responses: {
        /** @description 设置用户信息 */
        200: {
          headers: {
            [name: string]: unknown
          }
          content: {
            'application/json': components['schemas']['response.Response'] & {
              data?: {
                [key: string]: unknown
              }
              msg?: string
            }
          }
        }
      }
    }
    post?: never
    delete?: never
    options?: never
    head?: never
    patch?: never
    trace?: never
  }
}
export type webhooks = Record<string, never>
export interface components {
  schemas: {
    'config.AliyunOSS': {
      'access-key-id'?: string
      'access-key-secret'?: string
      'base-path'?: string
      'bucket-name'?: string
      'bucket-url'?: string
      'endpoint'?: string
    }
    'system.SysUserRequest': {
      Username?: string
      NickName?: string
      Phone?: string
      Email?: string
    }
    'config.Autocode': {
      'ai-path'?: string
      'module'?: string
      'root'?: string
      'server'?: string
      'web'?: string
    }
    'config.AwsS3': {
      'base-url'?: string
      'bucket'?: string
      'disable-ssl'?: boolean
      'endpoint'?: string
      'path-prefix'?: string
      'region'?: string
      's3-force-path-style'?: boolean
      'secret-id'?: string
      'secret-key'?: string
    }
    'config.CORS': {
      mode?: string
      whitelist?: components['schemas']['config.CORSWhitelist'][]
    }
    'config.CORSWhitelist': {
      'allow-credentials'?: boolean
      'allow-headers'?: string
      'allow-methods'?: string
      'allow-origin'?: string
      'expose-headers'?: string
    }
    'config.Captcha': {
      /** @description 验证码高度 */
      'img-height'?: number
      /** @description 验证码宽度 */
      'img-width'?: number
      /** @description 验证码长度 */
      'key-long'?: number
      /** @description 防爆破验证码开启此数，0代表每次登录都需要验证码，其他数字代表错误密码此数，如3代表错误三次后出现验证码 */
      'open-captcha'?: number
      /** @description 防爆破验证码超时时间，单位：s(秒) */
      'open-captcha-timeout'?: number
    }
    'config.CloudflareR2': {
      'access-key-id'?: string
      'account-id'?: string
      'base-url'?: string
      'bucket'?: string
      'path'?: string
      'secret-access-key'?: string
    }
    'config.DiskList': {
      'mount-point'?: string
    }
    'config.Excel': {
      dir?: string
    }
    'config.HuaWeiObs': {
      'access-key'?: string
      'bucket'?: string
      'endpoint'?: string
      'path'?: string
      'secret-key'?: string
    }
    'config.JWT': {
      /** @description 缓冲时间 */
      'buffer-time'?: string
      /** @description 过期时间 */
      'expires-time'?: string
      /** @description 签发者 */
      'issuer'?: string
      /** @description jwt签名 */
      'signing-key'?: string
    }
    'config.Local': {
      /** @description 本地文件访问路径 */
      'path'?: string
      /** @description 本地文件存储路径 */
      'store-path'?: string
    }
    'config.Mongo': {
      /** @description 验证数据库 */
      'auth-source'?: string
      /** @description collection name */
      'coll'?: string
      /** @description 连接超时时间 */
      'connect-timeout-ms'?: number
      /** @description database name */
      'database'?: string
      /** @description 主机列表 */
      'hosts'?: components['schemas']['config.MongoHost'][]
      /** @description 是否开启zap日志 */
      'is-zap'?: boolean
      /** @description 最大连接池 */
      'max-pool-size'?: number
      /** @description 最小连接池 */
      'min-pool-size'?: number
      /** @description mongodb options */
      'options'?: string
      /** @description 密码 */
      'password'?: string
      /** @description socket超时时间 */
      'socket-timeout-ms'?: number
      /** @description 用户名 */
      'username'?: string
    }
    'config.MongoHost': {
      /** @description ip地址 */
      host?: string
      /** @description 端口 */
      port?: string
    }
    'config.Mssql': {
      /** @description 高级配置 */
      'config'?: string
      /** @description 数据库名 */
      'db-name'?: string
      /**
       * @description 数据库引擎，默认InnoDB
       * @default InnoDB
       */
      'engine': string
      /** @description 是否开启Gorm全局日志 */
      'log-mode'?: string
      /** @description 是否通过zap写入日志文件 */
      'log-zap'?: boolean
      /** @description 空闲中的最大连接数 */
      'max-idle-conns'?: number
      /** @description 打开到数据库的最大连接数 */
      'max-open-conns'?: number
      /** @description 数据库密码 */
      'password'?: string
      /** @description 数据库地址 */
      'path'?: string
      /** @description 数据库端口 */
      'port'?: string
      /** @description 数据库前缀 */
      'prefix'?: string
      /** @description 是否开启全局禁用复数，true表示开启 */
      'singular'?: boolean
      /** @description 数据库账号 */
      'username'?: string
    }
    'config.Mysql': {
      /** @description 高级配置 */
      'config'?: string
      /** @description 数据库名 */
      'db-name'?: string
      /**
       * @description 数据库引擎，默认InnoDB
       * @default InnoDB
       */
      'engine': string
      /** @description 是否开启Gorm全局日志 */
      'log-mode'?: string
      /** @description 是否通过zap写入日志文件 */
      'log-zap'?: boolean
      /** @description 空闲中的最大连接数 */
      'max-idle-conns'?: number
      /** @description 打开到数据库的最大连接数 */
      'max-open-conns'?: number
      /** @description 数据库密码 */
      'password'?: string
      /** @description 数据库地址 */
      'path'?: string
      /** @description 数据库端口 */
      'port'?: string
      /** @description 数据库前缀 */
      'prefix'?: string
      /** @description 是否开启全局禁用复数，true表示开启 */
      'singular'?: boolean
      /** @description 数据库账号 */
      'username'?: string
    }
    'config.Oracle': {
      /** @description 高级配置 */
      'config'?: string
      /** @description 数据库名 */
      'db-name'?: string
      /**
       * @description 数据库引擎，默认InnoDB
       * @default InnoDB
       */
      'engine': string
      /** @description 是否开启Gorm全局日志 */
      'log-mode'?: string
      /** @description 是否通过zap写入日志文件 */
      'log-zap'?: boolean
      /** @description 空闲中的最大连接数 */
      'max-idle-conns'?: number
      /** @description 打开到数据库的最大连接数 */
      'max-open-conns'?: number
      /** @description 数据库密码 */
      'password'?: string
      /** @description 数据库地址 */
      'path'?: string
      /** @description 数据库端口 */
      'port'?: string
      /** @description 数据库前缀 */
      'prefix'?: string
      /** @description 是否开启全局禁用复数，true表示开启 */
      'singular'?: boolean
      /** @description 数据库账号 */
      'username'?: string
    }
    'config.Pgsql': {
      /** @description 高级配置 */
      'config'?: string
      /** @description 数据库名 */
      'db-name'?: string
      /**
       * @description 数据库引擎，默认InnoDB
       * @default InnoDB
       */
      'engine': string
      /** @description 是否开启Gorm全局日志 */
      'log-mode'?: string
      /** @description 是否通过zap写入日志文件 */
      'log-zap'?: boolean
      /** @description 空闲中的最大连接数 */
      'max-idle-conns'?: number
      /** @description 打开到数据库的最大连接数 */
      'max-open-conns'?: number
      /** @description 数据库密码 */
      'password'?: string
      /** @description 数据库地址 */
      'path'?: string
      /** @description 数据库端口 */
      'port'?: string
      /** @description 数据库前缀 */
      'prefix'?: string
      /** @description 是否开启全局禁用复数，true表示开启 */
      'singular'?: boolean
      /** @description 数据库账号 */
      'username'?: string
    }
    'config.Qiniu': {
      /** @description 秘钥AK */
      'access-key'?: string
      /** @description 空间名称 */
      'bucket'?: string
      /** @description CDN加速域名 */
      'img-path'?: string
      /** @description 秘钥SK */
      'secret-key'?: string
      /** @description 上传是否使用CDN上传加速 */
      'use-cdn-domains'?: boolean
      /** @description 是否使用https */
      'use-https'?: boolean
      /** @description 存储区域 */
      'zone'?: string
    }
    'config.Redis': {
      /** @description 服务器地址:端口 */
      addr?: string
      /** @description 集群模式下的节点地址列表 */
      clusterAddrs?: string[]
      /** @description 单实例模式下redis的哪个数据库 */
      db?: number
      /** @description 密码 */
      password?: string
      /** @description 是否使用集群模式 */
      useCluster?: boolean
    }
    'config.Server': {
      'aliyun-oss'?: components['schemas']['config.AliyunOSS']
      /** @description auto */
      'autocode'?: components['schemas']['config.Autocode']
      'aws-s3'?: components['schemas']['config.AwsS3']
      'captcha'?: components['schemas']['config.Captcha']
      'cloudflare-r2'?: components['schemas']['config.CloudflareR2']
      /** @description 跨域配置 */
      'cors'?: components['schemas']['config.CORS']
      'db-list'?: components['schemas']['config.SpecializedDB'][]
      'disk-list'?: components['schemas']['config.DiskList'][]
      'email'?: components['schemas']['github_com_flipped-aurora_gin-vue-admin_server_config.Email']
      'excel'?: components['schemas']['config.Excel']
      'hua-wei-obs'?: components['schemas']['config.HuaWeiObs']
      'jwt'?: components['schemas']['config.JWT']
      /** @description oss */
      'local'?: components['schemas']['config.Local']
      'mongo'?: components['schemas']['config.Mongo']
      'mssql'?: components['schemas']['config.Mssql']
      /** @description gorm */
      'mysql'?: components['schemas']['config.Mysql']
      'oracle'?: components['schemas']['config.Oracle']
      'pgsql'?: components['schemas']['config.Pgsql']
      'qiniu'?: components['schemas']['config.Qiniu']
      'redis'?: components['schemas']['config.Redis']
      'sqlite'?: components['schemas']['config.Sqlite']
      'system'?: components['schemas']['config.System']
      'tencent-cos'?: components['schemas']['config.TencentCOS']
      'zap'?: components['schemas']['config.Zap']
    }
    'config.SpecializedDB': {
      'alias-name'?: string
      /** @description 高级配置 */
      'config'?: string
      /** @description 数据库名 */
      'db-name'?: string
      'disable'?: boolean
      /**
       * @description 数据库引擎，默认InnoDB
       * @default InnoDB
       */
      'engine': string
      /** @description 是否开启Gorm全局日志 */
      'log-mode'?: string
      /** @description 是否通过zap写入日志文件 */
      'log-zap'?: boolean
      /** @description 空闲中的最大连接数 */
      'max-idle-conns'?: number
      /** @description 打开到数据库的最大连接数 */
      'max-open-conns'?: number
      /** @description 数据库密码 */
      'password'?: string
      /** @description 数据库地址 */
      'path'?: string
      /** @description 数据库端口 */
      'port'?: string
      /** @description 数据库前缀 */
      'prefix'?: string
      /** @description 是否开启全局禁用复数，true表示开启 */
      'singular'?: boolean
      'type'?: string
      /** @description 数据库账号 */
      'username'?: string
    }
    'config.Sqlite': {
      /** @description 高级配置 */
      'config'?: string
      /** @description 数据库名 */
      'db-name'?: string
      /**
       * @description 数据库引擎，默认InnoDB
       * @default InnoDB
       */
      'engine': string
      /** @description 是否开启Gorm全局日志 */
      'log-mode'?: string
      /** @description 是否通过zap写入日志文件 */
      'log-zap'?: boolean
      /** @description 空闲中的最大连接数 */
      'max-idle-conns'?: number
      /** @description 打开到数据库的最大连接数 */
      'max-open-conns'?: number
      /** @description 数据库密码 */
      'password'?: string
      /** @description 数据库地址 */
      'path'?: string
      /** @description 数据库端口 */
      'port'?: string
      /** @description 数据库前缀 */
      'prefix'?: string
      /** @description 是否开启全局禁用复数，true表示开启 */
      'singular'?: boolean
      /** @description 数据库账号 */
      'username'?: string
    }
    'config.System': {
      /** @description 端口值 */
      'addr'?: number
      /** @description 数据库类型:mysql(默认)|sqlite|sqlserver|postgresql */
      'db-type'?: string
      'iplimit-count'?: number
      'iplimit-time'?: number
      /** @description Oss类型 */
      'oss-type'?: string
      'router-prefix'?: string
      /** @description 使用mongo */
      'use-mongo'?: boolean
      /** @description 多点登录拦截 */
      'use-multipoint'?: boolean
      /** @description 使用redis */
      'use-redis'?: boolean
    }
    'config.TencentCOS': {
      'base-url'?: string
      'bucket'?: string
      'path-prefix'?: string
      'region'?: string
      'secret-id'?: string
      'secret-key'?: string
    }
    'config.Zap': {
      /** @description 日志文件夹 */
      'director'?: string
      /** @description 编码级 */
      'encode-level'?: string
      /** @description 输出 */
      'format'?: string
      /** @description 级别 */
      'level'?: string
      /** @description 输出控制台 */
      'log-in-console'?: boolean
      /** @description 日志前缀 */
      'prefix'?: string
      /** @description 日志保留天数 */
      'retention-day'?: number
      /** @description 显示行 */
      'show-line'?: boolean
      /** @description 栈名 */
      'stacktrace-key'?: string
    }
    'example.ExaCustomer': {
      /** @description 主键ID */
      ID?: number
      /** @description 创建时间 */
      createdAt?: string
      /** @description 客户名 */
      customerName?: string
      /** @description 客户手机号 */
      customerPhoneData?: string
      /** @description 管理详情 */
      sysUser?: components['schemas']['system.SysUser']
      /** @description 管理角色ID */
      sysUserAuthorityID?: number
      /** @description 管理ID */
      sysUserId?: number
      /** @description 更新时间 */
      updatedAt?: string
    }
    'example.ExaFile': {
      /** @description 主键ID */
      ID?: number
      chunkTotal?: number
      /** @description 创建时间 */
      createdAt?: string
      exaFileChunk?: components['schemas']['example.ExaFileChunk'][]
      fileMd5?: string
      fileName?: string
      filePath?: string
      isFinish?: boolean
      /** @description 更新时间 */
      updatedAt?: string
    }
    'example.ExaFileChunk': {
      /** @description 主键ID */
      ID?: number
      /** @description 创建时间 */
      createdAt?: string
      exaFileID?: number
      fileChunkNumber?: number
      fileChunkPath?: string
      /** @description 更新时间 */
      updatedAt?: string
    }
    'example.ExaFileUploadAndDownload': {
      /** @description 主键ID */
      ID?: number
      /** @description 创建时间 */
      createdAt?: string
      /** @description 编号 */
      key?: string
      /** @description 文件名 */
      name?: string
      /** @description 文件标签 */
      tag?: string
      /** @description 更新时间 */
      updatedAt?: string
      /** @description 文件地址 */
      url?: string
    }
    'github_com_flipped-aurora_gin-vue-admin_server_config.Email': {
      /** @description 发件人  你自己要发邮件的邮箱 */
      'from'?: string
      /** @description 服务器地址 例如 smtp.qq.com  请前往QQ或者你要发邮件的邮箱查看其smtp协议 */
      'host'?: string
      /** @description 是否SSL   是否开启SSL */
      'is-ssl'?: boolean
      /** @description 昵称    发件人昵称 通常为自己的邮箱 */
      'nickname'?: string
      /** @description 端口     请前往QQ或者你要发邮件的邮箱查看其smtp协议 大多为 465 */
      'port'?: number
      /** @description 密钥    用于登录的密钥 最好不要用邮箱密码 去邮箱smtp申请一个用于登录的密钥 */
      'secret'?: string
      /** @description 收件人:多个以英文逗号分隔 例：a@qq.com b@qq.com 正式开发中请把此项目作为参数使用 */
      'to'?: string
    }
    'model.Info': {
      /** @description 主键ID */
      ID?: number
      /** @description 附件 */
      attachments?: Record<string, never>[]
      /** @description 内容 */
      content?: string
      /** @description 创建时间 */
      createdAt?: string
      /** @description 标题 */
      title?: string
      /** @description 更新时间 */
      updatedAt?: string
      /** @description 作者 */
      userID?: number
    }
    'request.AddMenuAuthorityInfo': {
      /** @description 角色ID */
      authorityId?: number
      menus?: components['schemas']['system.SysBaseMenu'][]
    }
    'request.AutoCode': Record<string, never>
    'request.CasbinInReceive': {
      /** @description 权限id */
      authorityId?: number
      casbinInfos?: components['schemas']['request.CasbinInfo'][]
    }
    'request.CasbinInfo': {
      /** @description 方法 */
      method?: string
      /** @description 路径 */
      path?: string
    }
    'request.ChangePasswordReq': {
      /** @description 新密码 */
      newPassword?: string
      /** @description 密码 */
      password?: string
    }
    'request.Empty': Record<string, never>
    'request.GetAuthorityId': {
      /** @description 角色ID */
      authorityId?: number
    }
    'request.GetById': {
      /** @description 主键ID */
      id?: number
    }
    'request.IdsReq': {
      ids?: number[]
    }
    'request.InitDB': {
      adminPassword: string
      /** @description 数据库名 */
      dbName: string
      /** @description sqlite数据库文件路径 */
      dbPath?: string
      /** @description 数据库类型 */
      dbType?: string
      /** @description 服务器地址 */
      host?: string
      /** @description 数据库密码 */
      password?: string
      /** @description 数据库连接端口 */
      port?: string
      /** @description 数据库用户名 */
      userName?: string
    }
    'request.Login': {
      /** @description 验证码 */
      captcha?: string
      /** @description 验证码ID */
      captchaId?: string
      /** @description 密码 */
      password?: string
      /** @description 用户名 */
      username?: string
    }
    'request.PageInfo': {
      /** @description 页码 */
      page?: number
      /** @description 每页大小 */
      pageSize?: number
    }
    'request.Register': {
      authorityId?: number
      authorityIds?: number[]
      email?: string
      enable?: number
      headerImg?: string
      nickName?: string
      passWord?: string
      phone?: string
      userName?: string
    }
    'request.SearchApiParams': {
      /** @description 主键ID */
      ID?: number
      /** @description api组 */
      apiGroup?: string
      /** @description 创建时间 */
      createdAt?: string
      /** @description 排序方式:升序false(默认)|降序true */
      desc?: boolean
      /** @description api中文描述 */
      description?: string
      /** @description 关键字 */
      keyword?: string
      /** @description 方法:创建POST(默认)|查看GET|更新PUT|删除DELETE */
      method?: string
      /** @description 排序 */
      orderKey?: string
      /** @description 页码 */
      page?: number
      /** @description 每页大小 */
      pageSize?: number
      /** @description api路径 */
      path?: string
      /** @description 更新时间 */
      updatedAt?: string
    }
    'request.SetUserAuth': {
      /** @description 角色ID */
      authorityId?: number
    }
    'request.SetUserAuthorities': {
      /** @description 角色ID */
      authorityIds?: number[]
      id?: number
    }
    'request.SysAuthorityBtnReq': {
      authorityId?: number
      menuID?: number
      selected?: number[]
    }
    'request.SysAutoCodePackageCreate': {
      desc?: string
      label?: string
      packageName?: string
      template?: string
    }
    'request.SysAutoHistoryRollBack': {
      /** @description 是否删除接口 */
      deleteApi?: boolean
      /** @description 是否删除菜单 */
      deleteMenu?: boolean
      /** @description 是否删除表 */
      deleteTable?: boolean
      /** @description 主键ID */
      id?: number
    }
    'response.Email': {
      /** @description 邮件内容 */
      body?: string
      /** @description 邮件标题 */
      subject?: string
      /** @description 邮件发送给谁 */
      to?: string
    }
    'response.ExaCustomerResponse': {
      customer?: components['schemas']['example.ExaCustomer']
    }
    'response.ExaFileResponse': {
      file?: components['schemas']['example.ExaFileUploadAndDownload']
    }
    'response.FilePathResponse': {
      filePath?: string
    }
    'response.FileResponse': {
      file?: components['schemas']['example.ExaFile']
    }
    'response.LoginResponse': {
      expiresAt?: number
      token?: string
      user?: components['schemas']['system.SysUser']
    }
    'response.PageResult': {
      list?: (string | number | boolean | unknown[] | Record<string, never> | null)[]
      page?: number
      pageSize?: number
      total?: number
    }
    'response.PolicyPathResponse': {
      paths?: components['schemas']['request.CasbinInfo'][]
    }
    'response.Response': {
      code?: number
    }
    'response.SysAPIListResponse': {
      apis?: components['schemas']['system.SysApi'][]
    }
    'response.SysAPIResponse': {
      api?: components['schemas']['system.SysApi']
    }
    'response.SysAuthorityBtnRes': {
      selected?: number[]
    }
    'response.SysAuthorityCopyResponse': {
      authority?: components['schemas']['system.SysAuthority']
      /** @description 旧角色ID */
      oldAuthorityId?: number
    }
    'response.SysAuthorityResponse': {
      authority?: components['schemas']['system.SysAuthority']
    }
    'response.SysBaseMenuResponse': {
      menu?: components['schemas']['system.SysBaseMenu']
    }
    'response.SysBaseMenusResponse': {
      menus?: components['schemas']['system.SysBaseMenu'][]
    }
    'response.SysCaptchaResponse': {
      captchaId?: string
      captchaLength?: number
      openCaptcha?: boolean
      picPath?: string
    }
    'response.SysConfigResponse': {
      config?: components['schemas']['config.Server']
    }
    'response.SysMenusResponse': {
      menus?: components['schemas']['system.SysMenu'][]
    }
    'response.SysUserResponse': {
      user?: components['schemas']['system.SysUser']
    }
    'system.Condition': {
      /** @description 主键ID */
      ID?: number
      column?: string
      /** @description 创建时间 */
      createdAt?: string
      from?: string
      operator?: string
      templateID?: string
      /** @description 更新时间 */
      updatedAt?: string
    }
    'system.JoinTemplate': {
      /** @description 主键ID */
      ID?: number
      /** @description 创建时间 */
      createdAt?: string
      joins?: string
      on?: string
      table?: string
      templateID?: string
      /** @description 更新时间 */
      updatedAt?: string
    }
    'system.Meta': {
      activeName?: string
      /** @description 自动关闭tab */
      closeTab?: boolean
      /** @description 是否是基础路由（开发中） */
      defaultMenu?: boolean
      /** @description 菜单图标 */
      icon?: string
      /** @description 是否缓存 */
      keepAlive?: boolean
      /** @description 菜单名 */
      title?: string
    }
    'system.SysApi': {
      /** @description 主键ID */
      ID?: number
      /** @description api组 */
      apiGroup?: string
      /** @description 创建时间 */
      createdAt?: string
      /** @description api中文描述 */
      description?: string
      /** @description 方法:创建POST(默认)|查看GET|更新PUT|删除DELETE */
      method?: string
      /** @description api路径 */
      path?: string
      /** @description 更新时间 */
      updatedAt?: string
    }
    'system.SysAuthority': {
      /** @description 角色ID */
      authorityId?: number
      /** @description 角色名 */
      authorityName?: string
      children?: components['schemas']['system.SysAuthority'][]
      /** @description 创建时间 */
      CreatedAt?: string
      dataAuthorityId?: components['schemas']['system.SysAuthority'][]
      /** @description 默认菜单(默认dashboard) */
      defaultRouter?: string
      DeletedAt?: string
      menus?: components['schemas']['system.SysBaseMenu'][]
      /** @description 父角色ID */
      parentId?: number
      /** @description 更新时间 */
      UpdatedAt?: string
    }
    'system.SysBaseMenu': {
      /** @description 主键ID */
      ID?: number
      authoritys?: components['schemas']['system.SysAuthority'][]
      children?: components['schemas']['system.SysBaseMenu'][]
      /** @description 对应前端文件路径 */
      component?: string
      /** @description 创建时间 */
      CreatedAt?: string
      /** @description 是否在列表隐藏 */
      hidden?: boolean
      menuBtn?: components['schemas']['system.SysBaseMenuBtn'][]
      /** @description 附加属性 */
      meta?: components['schemas']['system.Meta']
      /** @description 路由name */
      name?: string
      parameters?: components['schemas']['system.SysBaseMenuParameter'][]
      /** @description 父菜单ID */
      parentId?: number
      /** @description 路由path */
      path?: string
      /** @description 排序标记 */
      sort?: number
      /** @description 更新时间 */
      UpdatedAt?: string
    }
    'system.SysBaseMenuBtn': {
      /** @description 主键ID */
      ID?: number
      /** @description 创建时间 */
      createdAt?: string
      desc?: string
      name?: string
      sysBaseMenuID?: number
      /** @description 更新时间 */
      updatedAt?: string
    }
    'system.SysBaseMenuParameter': {
      /** @description 主键ID */
      ID?: number
      /** @description 创建时间 */
      createdAt?: string
      /** @description 地址栏携带参数的key */
      key?: string
      sysBaseMenuID?: number
      /** @description 地址栏携带参数为params还是query */
      type?: string
      /** @description 更新时间 */
      updatedAt?: string
      /** @description 地址栏携带参数的值 */
      value?: string
    }
    'system.SysDictionary': {
      /** @description 主键ID */
      ID?: number
      /** @description 创建时间 */
      createdAt?: string
      /** @description 描述 */
      desc?: string
      /** @description 字典名（中） */
      name?: string
      /** @description 状态 */
      status?: boolean
      sysDictionaryDetails?: components['schemas']['system.SysDictionaryDetail'][]
      /** @description 字典名（英） */
      type?: string
      /** @description 更新时间 */
      updatedAt?: string
    }
    'system.SysDictionaryDetail': {
      /** @description 主键ID */
      ID?: number
      /** @description 创建时间 */
      createdAt?: string
      /** @description 扩展值 */
      extend?: string
      /** @description 展示值 */
      label?: string
      /** @description 排序标记 */
      sort?: number
      /** @description 启用状态 */
      status?: boolean
      /** @description 关联标记 */
      sysDictionaryID?: number
      /** @description 更新时间 */
      updatedAt?: string
      /** @description 字典值 */
      value?: string
    }
    'system.SysExportTemplate': {
      /** @description 主键ID */
      ID?: number
      conditions?: components['schemas']['system.Condition'][]
      /** @description 创建时间 */
      createdAt?: string
      /** @description 数据库名称 */
      dbName?: string
      joinTemplate?: components['schemas']['system.JoinTemplate'][]
      limit?: number
      /** @description 模板名称 */
      name?: string
      order?: string
      /** @description 表名称 */
      tableName?: string
      /** @description 模板标识 */
      templateID?: string
      /** @description 模板信息 */
      templateInfo?: string
      /** @description 更新时间 */
      updatedAt?: string
    }
    'system.SysMenu': {
      /** @description 主键ID */
      ID?: number
      authoritys?: components['schemas']['system.SysAuthority'][]
      btns?: {
        [key: string]: number
      }
      children?: components['schemas']['system.SysMenu'][]
      /** @description 对应前端文件路径 */
      component?: string
      /** @description 创建时间 */
      CreatedAt?: string
      /** @description 是否在列表隐藏 */
      hidden?: boolean
      menuBtn?: components['schemas']['system.SysBaseMenuBtn'][]
      menuId?: number
      /** @description 附加属性 */
      meta?: components['schemas']['system.Meta']
      /** @description 路由name */
      name?: string
      parameters?: components['schemas']['system.SysBaseMenuParameter'][]
      /** @description 父菜单ID */
      parentId?: number
      /** @description 路由path */
      path?: string
      /** @description 排序标记 */
      sort?: number
      /** @description 更新时间 */
      UpdatedAt?: string
    }
    'system.SysOperationRecord': {
      /** @description 主键ID */
      ID?: number
      /** @description 代理 */
      agent?: string
      /** @description 请求Body */
      body?: string
      /** @description 创建时间 */
      createdAt?: string
      /** @description 错误信息 */
      error_message?: string
      /** @description 请求ip */
      ip?: string
      /** @description 延迟 */
      latency?: string
      /** @description 请求方法 */
      method?: string
      /** @description 请求路径 */
      path?: string
      /** @description 响应Body */
      resp?: string
      /** @description 请求状态 */
      status?: number
      /** @description 更新时间 */
      updatedAt?: string
      user?: components['schemas']['system.SysUser']
      /** @description 用户id */
      user_id?: number
    }
    'system.SysUser': {
      /** @description 主键ID */
      ID?: number
      authorities?: components['schemas']['system.SysAuthority'][]
      authority?: components['schemas']['system.SysAuthority']
      /** @description 用户角色ID */
      authorityId?: number
      /** @description 基础颜色 */
      baseColor?: string
      /** @description 创建时间 */
      createdAt?: string
      /** @description 用户邮箱 */
      email?: string
      /** @description 用户是否被冻结 1正常 2冻结 */
      enable?: number
      /** @description 用户头像 */
      headerImg?: string
      /** @description 用户昵称 */
      nickName?: string
      /** @description 用户手机号 */
      phone?: string
      /** @description 用户侧边主题 */
      sideMode?: string
      /** @description 更新时间 */
      updatedAt?: string
      /** @description 用户登录名 */
      userName?: string
      /** @description 用户UUID */
      uuid?: string
    }
    'system.System': {
      config?: components['schemas']['config.Server']
    }
  }
  responses: never
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}
export type $defs = Record<string, never>
export type operations = Record<string, never>
