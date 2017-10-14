export function tomler () {
  this.add('role:convert-toml,cmd:from', (msg: any, respond: any) => {
    respond(`${msg}`)
  })
  this.add('role:convert-toml,cmd:to', (msg: any, respond: any) => {
    respond(`${msg}`)
  })
}
