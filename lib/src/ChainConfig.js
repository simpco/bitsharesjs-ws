let _this;

let ecc_config = {
    address_prefix: "JMC"
};

_this = {
    core_asset: "JMC",
    address_prefix: "JMC",
    expire_in_secs: 15,
    expire_in_secs_proposal: 24 * 60 * 60,
    review_in_secs_committee: 24 * 60 * 60,
    networks: {
        BitShares: {
            core_asset: "JMC",
            address_prefix: "JMC",
            chain_id: "8413bd1fbfb5382a0d1cd340f6b560070e58744a05908a98b4e875a3fcb79a84"
        },
        Muse: {
            core_asset: "MUSE",
            address_prefix: "MUSE",
            chain_id: "8413bd1fbfb5382a0d1cd340f6b560070e58744a05908a98b4e875a3fcb79a84"
        },
        Test: {
            core_asset: "TEST",
            address_prefix: "TEST",
            chain_id: "8413bd1fbfb5382a0d1cd340f6b560070e58744a05908a98b4e875a3fcb79a84"
        },
        Obelisk: {
            core_asset: "GOV",
            address_prefix: "FEW",
            chain_id: "8413bd1fbfb5382a0d1cd340f6b560070e58744a05908a98b4e875a3fcb79a84"
        }
    },

    /** Set a few properties for known chain IDs. */
    setChainId: function(chain_id) {

        let i, len, network, network_name, ref;
        ref = Object.keys(_this.networks);

        for (i = 0, len = ref.length; i < len; i++) {

            network_name = ref[i];
            network = _this.networks[network_name];

            if (network.chain_id === chain_id) {

                _this.network_name = network_name;

                if (network.address_prefix) {
                    _this.address_prefix = network.address_prefix;
                    ecc_config.address_prefix = network.address_prefix;
                }

                // console.log("INFO    Configured for", network_name, ":", network.core_asset, "\n");

                return {
                    network_name: network_name,
                    network: network
                }
            }
        }

        if (!_this.network_name) {
            console.log("Unknown chain id (this may be a testnet)", chain_id);
        }

    },

    reset: function() {
        _this.core_asset = "JMC";
        _this.address_prefix = "JMC";
        ecc_config.address_prefix = "JMC";
        _this.expire_in_secs = 15;
        _this.expire_in_secs_proposal = 24 * 60 * 60;

        console.log("Chain config reset");
    },

    setPrefix: function(prefix = "JMC") {
        _this.address_prefix = prefix;
        ecc_config.address_prefix = prefix;
    }
}

export default _this;
