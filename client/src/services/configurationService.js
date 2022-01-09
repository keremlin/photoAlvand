export default new class configurationService{
    findLabel(keys, config) {
        for (let i = 0; i < config.length; i++)
            if (config[i].configKey.includes(keys)) return (config[i].configLabel);
        return '--';
    }
    findValue(keys, config) {
        return parseInt(this.findStringValue(keys, config));
    }
    findStringValue(keys, config) {
        for (let i = 0; i < config.length; i++)
            if (config[i].configKey.includes(keys)) return config[i].configValue;
        return "0";
    }
    findID(keys, config) {
        for (let i = 0; i < config.length; i++)
            if (config[i].configKey.includes(keys)) return i;
        return "0";
    }
    create(config) {
        return [
            {
                smallText: this.findStringValue("indexFirstSliderSmallText", config)
                , bigText: this.findStringValue("indexFirstSliderBigText", config)
                , picture: this.findValue("indexFirstSliderPictureId", config)
            },
            {
                smallText: this.findStringValue("indexSecondSliderSmallText", config)
                , bigText: this.findStringValue("indexSecondSliderBigText", config)
                , picture: this.findValue("indexSecondSliderPictureId", config)
            },
            {
                smallText: this.findStringValue("indexThirdSliderSmallText", config)
                , bigText: this.findStringValue("indexThirdSliderBigText", config)
                , picture: this.findValue("indexThirdSliderPictureId", config)
            },

        ];
    }
}()