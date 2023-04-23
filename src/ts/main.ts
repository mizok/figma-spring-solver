import { SpringSolver } from './lib/lib';

function main(){
    const spr=  new SpringSolver(0.5,0.01,0.001,10);
    

    const animate = (ele:HTMLElement)=>{
        const beginTime = performance.now();
        const repeater =  ()=>{
            const dist  =spr.solve(performance.now() - beginTime)
            if(Math.abs(dist) > 0){
                ele.style.transform = `translateY(${dist}px)`
                requestAnimationFrame(repeater);
            }
        }

        requestAnimationFrame(repeater);
    }

    document.documentElement.addEventListener('click',()=>{
        const appleEle = document.querySelector('.apple') as HTMLElement;
        animate(appleEle);
    })
}

main();