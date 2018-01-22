/**
 * Created by wenbo.kuang on 2018/1/8.
 */
export interface ILogger {
  info(msg: any);
  warn(msg: any);
  error(msg: any);
}

export class Logger implements ILogger {
  info(msg: any) {
    console.info(msg);
  }

  warn(msg: any) {
    console.warn(msg);
  }

  error(msg: any) {
    console.error(msg);
  }

}
