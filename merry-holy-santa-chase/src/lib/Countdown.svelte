<script>
    import {push} from 'svelte-spa-router'
    import {onDestroy} from 'svelte'

    let time = 1000*120;
    let interval = 1000;
    let running = true;
    // let time = 1000*120
    
    const twoDigits = (number) => {
        return number.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        })
    }
    
    const timeString = (ms) => {
        let seconds = ms / 1000;
        const minutes = Math.floor(seconds / 60);
        seconds = seconds % 60;
        const timeString = twoDigits(minutes) + ":" + twoDigits(seconds);
        return timeString
    }
    
    let timeShown = timeString(time)
    
    const startCountdown = () => {
        setTimeout(()=>{
            time -= interval;
            timeShown = timeString(time);
            if (time > 0 && running) {
                startCountdown();
            } else if (time > 0 && !running) {
                console.log("Countdown stopped")
            } else {
                console.log("Done!")
                setTimeout( () => {
                    push('/gameover')
                },1000)
            }
        }, interval)
    }

    startCountdown()

    onDestroy(()=>{
        running = false;
    })

</script>

<div id="countdown">
    {timeShown}
</div>

<style>
    #countdown {
        text-align: right;
    }
</style>