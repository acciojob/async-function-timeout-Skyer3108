//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async () => {
   
    const text = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value, 10);

    
    if (isNaN(delay) || delay < 0) {
        alert('Please enter a valid positive number for delay.');
        return;
    }

   
    const delayFunction = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    
    const showMessageAfterDelay = async () => {
        await delayFunction(delay); 
        document.getElementById('output').innerText = text; 
    };

    
    showMessageAfterDelay();
});