import { SpringSolver } from './lib/lib';

function main(){
   
    const input1 = document.getElementById('input1') as HTMLInputElement;
    const input2 = document.getElementById('input2') as HTMLInputElement;
    const input3 = document.getElementById('input3') as HTMLInputElement;
    const input4 = document.getElementById('input4') as HTMLInputElement;

    const setInstance = ()=>{
        return spr = new SpringSolver(
            parseFloat(input1.value),
            parseFloat(input2.value),
            parseFloat(input3.value),
            parseFloat(input4.value),
        )
    }

    let spr:SpringSolver = setInstance();

    [input1,input2,input3,input4].forEach((o)=>{
        o.addEventListener('change',(ev)=>{
            spr = setInstance()
        })
    })

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

    document.querySelector('#go').addEventListener('click',()=>{
        const appleEle = document.querySelector('.apple') as HTMLElement;
        animate(appleEle);
    })

    

    
}

main();