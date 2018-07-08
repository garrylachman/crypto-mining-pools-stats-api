import { VendorAbstract, fetch } from './vendor-abstract';

export class Nanopool extends VendorAbstract {

  constructor(options) {
    const defaults = {
      "proto": "https",
      "domain": "api.nanopool.org",
      "path": "/v1/xmr/user/"
    }
    super(Nanopool.name, defaults)
    this.mergeOptions(options || {})
  }

  async send() {
    const url = `${this.options.proto}://${this.options.domain}${this.options.path}${this.payment_address}`
    const res = await fetch(url)
    this.raw_data = await res.json();
  }

  parse() {
    // refactoring needed, change to json transformation with validation
    this.data = {
      "domain": this.options.domain,
      "account": this.payment_address
    }
    if (this.raw_data.data) {
      this.data = this.mergeObjects(this.data, {
        "balance": Number(this.raw_data.data.balance),
        "unconfirmed_balance": Number(this.raw_data.data.unconfirmed_balance),
        "hashrate": Number(this.raw_data.data.hashrate)
      })
    }
  }

}
