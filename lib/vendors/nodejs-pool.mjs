import { VendorAbstract, fetch } from './vendor-abstract';

export class NodejsPool extends VendorAbstract {

  constructor(options) {
    const defaults = {
      "proto": "https",
      "domain": "monero.hashvault.pro",
      "path": "/api/miner/[ADDR]/stats"
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
        "balance": Number(this.raw_data.amtDue),
        "unconfirmed_balance": 0,
        "hashrate": Number(this.raw_data.hash)
      })
    }
  }

}
