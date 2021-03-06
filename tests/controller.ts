import { Context } from '../src/interface';
import {provide, inject, controller, get} from '../src/ioc';

@provide()
@controller('/stock')
export class StockController{
    @inject()
    ctx: Context;

    @inject('stockService')
    service: any;

    @get('/')
    async index(){
        console.log('[StockController] is run....', );
        this.ctx.body = await this.service.getStock({code:9999});
    }
}
