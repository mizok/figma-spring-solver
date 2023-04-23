export declare class SpringSolver {
    mass: number;
    stiffness: number;
    damping: number;
    initialVelocity: number;
    private m_w0;
    private m_zeta;
    private m_wd;
    private m_A;
    private m_B;
    constructor(mass: number, stiffness: number, damping: number, initialVelocity: number);
    private init;
    solve(t: number): number;
}
