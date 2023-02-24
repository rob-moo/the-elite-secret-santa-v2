export default class SantaInfo {
    private santaPairs: Map<string, string>;
    private santa: string | undefined;
    constructor(password: string) {
        this.santaPairs = new Map<string, string>([
            ['ts*8ev', 'bethan'],
            ['3$c#oq', 'laura'],
            ['s7w$6o', 'zoe'],
            ['z+vj4w', 'jess'],
            ['kp1?md', 'maisie'],
        ]);
        this.santa = this.santaPairs.get(password?.toLowerCase().toString());
    }

    get(): string | undefined {
        return this.santa;
    }
}
