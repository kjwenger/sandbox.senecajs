export function tomler () {
  this.add('role:convert,cmd:from', (msg: any, respond: any) => {
    respond(`${msg}`)
  })
  this.add('role:convert,cmd:to', (msg: any, respond: any) => {
    respond(`${msg}`)
  })
}
