import type { Emitter, EventType } from 'mitt'
import mitt from 'mitt'

/** 全局公共事件需要在此处添加类型 */
interface Events extends Record<EventType, unknown> {
  openPanel: string
  tagViewsChange: string
  tagViewsShowModel: string
  logoChange: boolean
  changLayoutRoute: string
}

export const emitter: Emitter<Events> = mitt<Events>()
