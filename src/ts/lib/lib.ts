//this is a typescript version of webkit spring solver (https://svn.webkit.org/repository/webkit/trunk/Source/WebCore/platform/graphics/SpringSolver.h)

export class SpringSolver {
    private m_w0!:number;
    private m_zeta!:number;
    private m_wd!:number;
    private m_A!:number;
    private m_B!:number;
    constructor( public mass:number,  public stiffness:number,  public damping:number,  public initialVelocity:number){
        this.init();
    }
       
    private init(){
        this.m_w0 = Math.sqrt(this.stiffness / this.mass);
        this.m_zeta = this.damping / (2 * Math.sqrt(this.stiffness * this.mass));
    
        if (this.m_zeta < 1) {
            // Under-damped.
            this.m_wd = this.m_w0 * Math.sqrt(1 - this.m_zeta * this.m_zeta);
            this.m_A = 1;
            this.m_B = (this.m_zeta * this.m_w0 + -this.initialVelocity) / this.m_wd;
        } else {
            // Critically damped (ignoring over-damped case for now).
            this.m_A = 1;
            this.m_B = -this.initialVelocity + this.m_w0;
        }
    }
    /**
     *
     *
     * @param {number} t // time passed
     * @return {*} 
     * @memberof SpringSolver
     */
    solve(t:number)
    {
        if (this.m_zeta < 1) {
            // Under-damped
            t = Math.exp(-t * this.m_zeta * this.m_w0) * (this.m_A * Math.cos(this.m_wd * t) + this.m_B * Math.sin(this.m_wd * t));
        } else {
            // Critically damped (ignoring over-damped case for now).
            t = (this.m_A + this.m_B * t) * Math.exp(-t * this.m_w0);
        }
    
        // Map range from [1..0] to [0..1].
        return 1 - t;
    }
    
}