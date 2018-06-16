import { VendorAbstract, fetch } from './vendor-abstract';

export class NodejsPool extends VendorAbstract {

  constructor(options) {
    const defaults = {
      "api": {
        "proto": "https",
        "domain": "monero.hashvault.pro",
        "path": "/api/miner/[ADDR]/stats"
      }
    }
    super(NodejsPool.name, defaults)
    this.mergeOptions(options || {})
  }

  async send() {
    const url =
      `${this.options.api.proto}://${this.options.api.domain}${this.options.api.path}`
      .replace('[ADDR]', this.payment_address)
    const res = await fetch(url)
    this.raw_data = await res.json();
  }

  parse() {
    // refactoring needed, change to json transformation with validation
    if (this.raw_data) {
      this.data = {
        "domain": this.options.api.domain,
        "account": this.payment_address,
        "balance": Number(this.raw_data.amtDue),
        "unconfirmed_balance": 0,
        "hashrate": Number(this.raw_data.hash)
      }
    }
  }

}
