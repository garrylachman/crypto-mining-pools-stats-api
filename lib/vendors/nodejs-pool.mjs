import { VendorAbstract, fetch } from './vendor-abstract';

export class NodejsPool extends VendorAbstract {

  constructor(options) {
    const defaults = {
      "proto": "https",
      "domain": "api.hashvault.pro",
      "path": "/v2/monero/miner/[ADDR]/stats"
    }
    super(NodejsPool.name, defaults)
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
    this.data = {
      "domain": this.options.domain,
      "account": this.payment_address
    }
    if (this.raw_data) {
      this.data = this.mergeObjects(this.data, {
        "balance": Number(this.raw_data.amtDue)/10000000000,
        "unconfirmed_balance": 0,
        "hashrate": Number(this.raw_data.hash),
        "total_hashes": 0,
        "paid": 0
      })
    }
  }

}
