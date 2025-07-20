import { PlayerData } from "./src/data-model";

Hooks.on("init", () => {
    CONFIG.Actor.dataModels.player = PlayerData;
    CONFIG.Actor.trackableAttributes = {
        player: {
            bar: ["resources.health", "resources.blot"]
        }
    };
});
