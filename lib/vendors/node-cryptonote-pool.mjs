import { VendorAbstract, fetch } from './vendor-abstract';

export class NodeCryptonotePool extends VendorAbstract {

  constructor(options) {
    const defaults = {
      "proto": "https",
      "domain": "mixpools.org:8117",
      "path": "/stats_address?address=[ADDR]&longpoll=false"
    }
    super(NodeCryptonotePool.name, defaults)
    this.mergeOptions(options || {})
  }

  async send() {
    const url =
      `${this.options.proto}://${this.options.domain}${this.options.path}`
      .replace('[ADDR]', this.payment_address)
    const res = await fetch(url)
    this.raw_data = await res.json();
  }

  parse() {
    // refactoring needed, change to json transformation with validation
    console.log(this.raw_data)
    this.data = {
      "domain": this.options.domain,
      "account": this.payment_address
    }
    if (this.raw_data && this.raw_data.stats) {
      this.data = this.mergeObjects(this.data, {
        "balance": Number(this.raw_data.stats.balance)/10000000000,
        "paid": Number(this.raw_data.stats.paid)/10000000000,
        "total_hashes": Number(this.raw_data.stats.hashes),
        "unconfirmed_balance": 0,
        "hashrate": 0,
      })
    }
  }

}
