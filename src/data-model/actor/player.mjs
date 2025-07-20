const {
    HTMLField, SchemaField, NumberField, StringField, FilePathField, ArrayField
} = foundry.data.fields;

class ActorData extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        return {
            resources: new SchemaField({
                health: new SchemaField({
                    value: new NumberField({ required: true, integer: true, min: 0, initial: 0}),
                    min: new NumberField({ required: true, integer: true, min: 0, initial: 0}),
                    max: new NumberField({ required: true, integer: true, min: 0, initial: 0})
                }),
                blot: new NumberField({ required: true, integer: true, min: 0, max: 0, initial: 0})
            })
        };
    }
}

class PlayerData extends Actor {}

export { PlayerData };
