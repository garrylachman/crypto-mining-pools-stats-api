import { default as Hoek } from 'hoek';
export { default as fetch } from 'node-fetch';

export class VendorAbstract {

  constructor(vendor_name, options) {
    this.options = {}
    this.mergeOptions(options)

    this.vendor_name = vendor_name
    this.data = void 0
    this.raw_data = void 0
    this.payment_address = void 0
  }

  // Merge options to current options
  mergeOptions(options) {
    this.options = Hoek.applyToDefaults(this.options, options)
  }

  isValid() {
    return
      this.data instanceof Object &&
      this.data.constructor === Object;
  }

  async execute(payment_address) {
    this.payment_address = payment_address
    await this.send()
    this.parse()
    return this.data;
  }

  // Override mandatory methods

  send() {
    throw new Error('Method `send` is not implemented')
  }

  parse() {
    throw new Error('Method `parse` is not implemented')
  }

}
