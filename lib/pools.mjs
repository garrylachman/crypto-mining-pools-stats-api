import { Nanopool } from './vendors/nanopool';
import { NodejsPool } from './vendors/nodejs-pool';
import { NodeCryptonotePool } from './vendors/node-cryptonote-pool';

export const Pools = [
  {
    "name": "Nanopool",
    "coin": "xmr",
    "vendor": Nanopool,
    "options": {
      "path": "/v1/xmr/user/"
    }
  },
  {
    "name": "Nanopool",
    "coin": "eth",
    "vendor": Nanopool,
    "options": {
      "path": "/v1/eth/user/"
    }
  },
  {
    "name": "Nanopool",
    "coin": "etc",
    "vendor": Nanopool,
    "options": {
      "path": "/v1/etc/user/"
    }
  },
  {
    "name": "Nanopool",
    "coin": "sia",
    "vendor": Nanopool,
    "options": {
      "path": "/v1/sia/user/"
    }
  },
  {
    "name": "Nanopool",
    "coin": "pasc",
    "vendor": Nanopool,
    "options": {
      "path": "/v1/pasc/user/"
    }
  },
  {
    "name": "Nanopool",
    "coin": "zec",
    "vendor": Nanopool,
    "options": {
      "path": "/v1/zec/user/"
    }
  },
  {
    "name": "Nanopool",
    "coin": "etn",
    "vendor": Nanopool,
    "options": {
      "path": "/v1/etn/user/"
    }
  },
  {
    "name": "Hashvault",
    "coin": "xmr",
    "vendor": NodejsPool,
    "options": {
      "domain": "monero.hashvault.pro"
    }
  },
  {
    "name": "Hashvault",
    "coin": "aeon",
    "vendor": NodejsPool,
    "options": {
      "domain": "aeon.hashvault.pro"
    }
  },
  {
    "name": "Hashvault",
    "coin": "sumo",
    "vendor": NodejsPool,
    "options": {
      "domain": "sumo.hashvault.pro"
    }
  },
  {
    "name": "Hashvault",
    "coin": "krb",
    "vendor": NodejsPool,
    "options": {
      "domain": "karbo.hashvault.pro"
    }
  },
  {
    "name": "Hashvault",
    "coin": "etn",
    "vendor": NodejsPool,
    "options": {
      "domain": "electroneum.hashvault.pro"
    }
  },
  {
    "name": "Hashvault",
    "coin": "itns",
    "vendor": NodejsPool,
    "options": {
      "domain": "intense.hashvault.pro"
    }
  },
  {
    "name": "Hashvault",
    "coin": "dero",
    "vendor": NodejsPool,
    "options": {
      "domain": "dero.hashvault.pro"
    }
  },
  {
    "name": "Hashvault",
    "coin": "msr",
    "vendor": NodejsPool,
    "options": {
      "domain": "masari.hashvault.pro"
    }
  },
  {
    "name": "Hashvault",
    "coin": "grft",
    "vendor": NodejsPool,
    "options": {
      "domain": "graft.hashvault.pro"
    }
  },
  {
    "name": "Hashvault",
    "coin": "xtl",
    "vendor": NodejsPool,
    "options": {
      "domain": "stellite.hashvault.pro"
    }
  },
  {
    "name": "Hashvault",
    "coin": "xhv",
    "vendor": NodejsPool,
    "options": {
      "domain": "haven.hashvault.pro"
    }
  },
  {
    "name": "Hashvault",
    "coin": "lok",
    "vendor": NodejsPool,
    "options": {
      "domain": "loki.hashvault.pro"
    }
  },
  {
    "name": "Hashvault",
    "coin": "ryo",
    "vendor": NodejsPool,
    "options": {
      "domain": "ryo.hashvault.pro"
    }
  },
  {
    "name": "SupportXMR",
    "coin": "xmr",
    "vendor": NodejsPool,
    "options": {
      "domain": "supportxmr.com"
    }
  },
  {
    "name": "XMLPool",
    "coin": "xmr",
    "vendor": NodejsPool,
    "options": {
      "domain": "api.xmrpool.net",
      "path": "/miner/[ADDR]/stats"
    }
  },
  {
    "name": "moneroocean",
    "coin": "xmr",
    "vendor": NodejsPool,
    "options": {
      "domain": "api.moneroocean.stream",
      "path": "/miner/[ADDR]/stats"
    }
  },
  {
    "name": "moriaxmr",
    "coin": "xmv",
    "vendor": NodejsPool,
    "options": {
      "domain": "api.moriaxmr.com",
      "path": "/miner/[ADDR]/stats"
    }
  },
  {
    "name": "viaxmr",
    "coin": "xmr",
    "vendor": NodejsPool,
    "options": {
      "domain": "api.viaxmr.com",
      "path": "/miner/[ADDR]/stats"
    }
  },
  {
    "name": "mixpools.org",
    "coin": "xmr",
    "vendor": NodeCryptonotePool,
    "options": {
      "domain": "mixpools.org:8117"
    }
  },
];
