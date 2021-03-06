// the LuaSwap Default token list lives here
const COMMIT_HASH = '226e0994228a15b60695d5e15ac11cd6dda10eb2'

export const DEFAULT_TOKEN_LIST_URL =
  'https://raw.githubusercontent.com/tomochain/luaswap-token-list/' +
  COMMIT_HASH +
  '/build/luaswap-default.tokenlist.json'

export const DEFAULT_LIST_OF_LISTS: string[] = [DEFAULT_TOKEN_LIST_URL]
