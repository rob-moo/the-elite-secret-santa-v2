export class UserVerifier {
    private static users: Map<string, string> = new Map<string, string>([
        ['rob', 'admin'],
        ['zoe', 'ts*8ev'],
        ['bethan', 'kp1?md'],
        ['jess', '3$c#oq'],
        ['maisie', 'z+vj4w'],
        ['laura', 's7w$6o'],
    ]);

    static validate(username: string, password: string) {
        return this.userPassComboExists(username, password);
    }

    private static userPassComboExists(username: string, password: string) {
        const lcUsername = username.toLocaleLowerCase();
        const lcPassword = password.toLocaleLowerCase();
        return (
            this.users.has(lcUsername) &&
            this.users.get(lcUsername) === lcPassword
        );
    }
}
