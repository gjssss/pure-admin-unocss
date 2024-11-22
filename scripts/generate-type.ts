import type { OpenAPI3 } from 'openapi-typescript'
import fs from 'node:fs/promises'
import process from 'node:process'
import axios from 'axios'
import openapiTS, { astToString } from 'openapi-typescript'

const PROJECT_ID = process.env.PROJECT_ID!
const TOKEN = process.env.TOKEN!
const DIST_PATH = process.env.DIST_PATH!

async function generate() {
  if (!PROJECT_ID || !TOKEN || !DIST_PATH) {
    throw new Error('未设置环境变量PROJECT_ID, TOKEN, DIST_PATH')
  }

  console.log('正在从APIFOX中偷取类型')
  const { data } = await axios.post<OpenAPI3>(`https://api.apifox.com/v1/projects/${PROJECT_ID}/export-openapi`, {}, {
    headers: {
      'X-Apifox-Api-Version': '2024-03-28',
      'Authorization': `Bearer ${TOKEN}`,
    },
  })
  console.log('正在解析')
  const ast = await openapiTS(data)
  const content = astToString(ast)
  await fs.writeFile(DIST_PATH, content, 'utf-8')
}

generate().then(() => {
  console.log('成功🤩')
}).catch((e) => {
  console.log('失败🤺', e)
})
