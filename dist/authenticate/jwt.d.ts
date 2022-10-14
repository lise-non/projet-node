/**
 * création du token JWT
 */
export declare function generateToken(): string;
interface TokenPayload {
    exp: number;
    accessTypes: string[];
    name: string;
    userId: number;
}
/**
 * Vérifie que le token JWT est valide
 *
 * @param token Le token JWT à valider
 * @return Promise<TokenPayload> Une promesse contenant les éléments utiles (le payload) contenu dans le token
 */
export declare function validateToken(token: string): Promise<TokenPayload>;
export {};
